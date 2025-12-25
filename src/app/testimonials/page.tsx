"use client";

import MinimalNavbar from "@/components/other/MinimalNavbar";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  resourceLink: string;
  createdAt: string;
}

const serviceTypeLabels: Record<string, string> = {
  website: "Website",
  "web-app": "Web App",
  "mobile-app": "Mobile App",
  ecommerce: "E-Commerce",
  custom: "Custom",
  other: "Other",
};

export default function TestimonialsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/review?public=true");
        const data = await response.json();

        if (response.ok) {
          setReviews(data.reviews);
        }
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Render Stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-600"}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  // Calculate average rating
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : "0.0";

  return (
    <>
      <MinimalNavbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm text-gray-300 font-medium">Client Testimonials</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-unbounded bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
              What Clients Say
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-space-grotesk">
              Real feedback from real clients. See what others have to say about working with us.
            </p>

            {/* Stats */}
            {reviews.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">{reviews.length}</div>
                  <div className="text-sm text-gray-400">Total Reviews</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-yellow-400">{averageRating}</span>
                    <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400">
                    {Math.round((reviews.filter(r => r.wouldRecommend).length / reviews.length) * 100)}%
                  </div>
                  <div className="text-sm text-gray-400">Would Recommend</div>
                </div>
              </div>
            )}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Loading testimonials...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && reviews.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">No Reviews Yet</h2>
              <p className="text-gray-400 mb-8">Be the first to share your experience!</p>
              <Link
                href="/review"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 inline-block"
              >
                Leave a Review
              </Link>
            </div>
          )}

          {/* Reviews Grid */}
          {!loading && reviews.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Link
                  key={review._id}
                  href={`/review/${review.resourceLink}`}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg font-bold">
                        {review.clientName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {review.clientName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {new Date(review.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    {renderStars(review.rating)}
                  </div>

                  {/* Title */}
                  <h4 className="font-semibold text-white mb-2 line-clamp-1">{review.reviewTitle}</h4>

                  {/* Review Text */}
                  <p className="text-gray-400 text-sm line-clamp-3 mb-4">{review.reviewText}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <p className="text-xs text-gray-500">Project</p>
                      <p className="text-sm text-gray-300 truncate max-w-[150px]">{review.projectName}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300">
                      {serviceTypeLabels[review.serviceType] || review.serviceType}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* CTA */}
          {!loading && (
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">
                  Had a great experience?
                </h2>
                <p className="text-gray-400 mb-6">
                  We'd love to hear your feedback. Share your experience with us!
                </p>
                <Link
                  href="/review"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 inline-block"
                >
                  Leave a Review
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
