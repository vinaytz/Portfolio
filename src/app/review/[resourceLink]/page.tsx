"use client";

import MinimalNavbar from "@/components/other/MinimalNavbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Review {
  _id: string;
  clientName: string;
  projectName: string;
  projectUrl?: string;
  rating: number;
  reviewTitle: string;
  reviewText: string;
  wouldRecommend: boolean;
  serviceType: string;
  isPublic: boolean;
  createdAt: string;
}

const serviceTypeLabels: Record<string, string> = {
  website: "Website Development",
  "web-app": "Web Application",
  "mobile-app": "Mobile App",
  ecommerce: "E-Commerce Store",
  custom: "Custom Solution",
  other: "Other",
};

export default function ReviewDetailPage() {
  const params = useParams();
  const resourceLink = params.resourceLink as string;
  
  const [review, setReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`/api/review?resourceLink=${resourceLink}`);
        const data = await response.json();

        if (response.ok) {
          setReview(data.review);
        } else {
          setError(data.error || "Review not found");
        }
      } catch (err) {
        setError("Failed to load review");
      } finally {
        setLoading(false);
      }
    };

    if (resourceLink) {
      fetchReview();
    }
  }, [resourceLink]);

  // Loading State
  if (loading) {
    return (
      <>
        <MinimalNavbar />
        <div className="min-h-screen bg-black text-white pt-32 pb-20 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading review...</p>
          </div>
        </div>
      </>
    );
  }

  // Error State
  if (error || !review) {
    return (
      <>
        <MinimalNavbar />
        <div className="min-h-screen bg-black text-white pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
              <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4 font-unbounded text-white">Review Not Found</h1>
            <p className="text-gray-400 mb-8">
              {error || "The review you're looking for doesn't exist or has been removed."}
            </p>
            <Link
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Render Stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-6 h-6 ${star <= rating ? "text-yellow-400" : "text-gray-600"}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
      <MinimalNavbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm text-gray-300 font-medium">Client Review</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-unbounded bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
              {review.reviewTitle}
            </h1>
          </div>

          {/* Review Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {/* Review Header */}
            <div className="p-6 sm:p-8 border-b border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                    {review.clientName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">{review.clientName}</h2>
                    <p className="text-sm text-gray-400">
                      {new Date(review.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2">
                  {renderStars(review.rating)}
                  <span className="text-sm text-gray-400">{review.rating} out of 5</span>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 sm:p-8 border-b border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Project Details</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Project Name</p>
                  <p className="text-white font-medium">{review.projectName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Service Type</p>
                  <p className="text-white font-medium">
                    {serviceTypeLabels[review.serviceType] || review.serviceType}
                  </p>
                </div>
                {review.projectUrl && (
                  <div className="sm:col-span-2">
                    <p className="text-sm text-gray-500 mb-1">Project URL</p>
                    <a
                      href={review.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                    >
                      {review.projectUrl}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Review Content */}
            <div className="p-6 sm:p-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Review</h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{review.reviewText}</p>
              
              {review.wouldRecommend && (
                <div className="mt-6 flex items-center gap-2 text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium">Would recommend to others</span>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/review"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 text-center"
            >
              Leave Your Review
            </Link>
            <Link
              href="/"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
