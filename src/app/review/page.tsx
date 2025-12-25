"use client";

import MinimalNavbar from "@/components/other/MinimalNavbar";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface Resources {
  liveWebsiteUrl?: string;
  sourceCodeUrl?: string;
  documentationUrl?: string;
  customMessage?: string;
  additionalLinks?: { label: string; url: string }[];
}

interface PrefilledData {
  pn?: string;
  pu?: string;
  cn?: string;
  st?: string;
  res?: Resources;
}

const serviceTypes = [
  { value: "website", label: "Website Development" },
  { value: "web-app", label: "Web Application" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "ecommerce", label: "E-Commerce Store" },
  { value: "custom", label: "Custom Solution" },
  { value: "other", label: "Other" },
];

const experienceQuestions = [
  {
    id: "communication",
    question: "How was the communication throughout the project?",
    emoji: "💬",
    options: [
      { value: "excellent", label: "Excellent - Always responsive" },
      { value: "good", label: "Good - Most times responsive" },
      { value: "average", label: "Average" },
      { value: "poor", label: "Could be better" },
    ],
  },
  {
    id: "delivery",
    question: "Was the project delivered on time?",
    emoji: "⏰",
    options: [
      { value: "early", label: "Yes, ahead of schedule!" },
      { value: "ontime", label: "Yes, right on time" },
      { value: "slight-delay", label: "Slightly delayed but communicated" },
      { value: "delayed", label: "Delayed" },
    ],
  },
  {
    id: "quality",
    question: "How would you rate the quality of work?",
    emoji: "✨",
    options: [
      { value: "exceeded", label: "Exceeded expectations!" },
      { value: "met", label: "Met all expectations" },
      { value: "good", label: "Good, minor revisions needed" },
      { value: "needs-improvement", label: "Needs improvement" },
    ],
  },
];

const whatIfQuestions = [
  { id: "workAgain", question: "Would you work with me again on future projects?", emoji: "🤝" },
  { id: "recommendFriend", question: "Would you recommend me to a friend or colleague?", emoji: "👥" },
  { id: "enjoyedProcess", question: "Did you enjoy the overall development process?", emoji: "😊" },
];

// Confetti/Party Popper Component
function Confetti() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const colors = ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98D8C8"];
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            animation: `confetti 3s ease-out ${particle.delay}s forwards`,
            backgroundColor: particle.color,
            width: "10px",
            height: "10px",
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
          }}
        />
      ))}
      <style>{`
        @keyframes confetti {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

function ReviewPageContent() {
  const searchParams = useSearchParams();
  const [resources, setResources] = useState<Resources | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    projectName: "",
    projectUrl: "",
    rating: 0,
    reviewTitle: "",
    reviewText: "",
    serviceType: "website",
    isPublic: true,
    experienceAnswers: {} as Record<string, string>,
    whatIfAnswers: {
      workAgain: false,
      recommendFriend: false,
      enjoyedProcess: false,
    } as Record<string, boolean>,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      try {
        const decoded = JSON.parse(decodeURIComponent(atob(dataParam)));
        setResources(decoded.res || null);
        setFormData((prev) => ({
          ...prev,
          projectName: decoded.pn || "",
          projectUrl: decoded.pu || "",
          clientName: decoded.cn || "",
          serviceType: decoded.st || "website",
        }));
      } catch (e) {
        console.error("Failed to parse prefilled data:", e);
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          wouldRecommend: formData.whatIfAnswers.recommendFriend,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowConfetti(true);
        setTimeout(() => setStatus("success"), 500);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.clientName && formData.clientEmail && formData.projectName;
      case 2:
        return Object.keys(formData.experienceAnswers).length === experienceQuestions.length;
      case 3:
        return formData.rating > 0;
      case 4:
        return formData.reviewTitle && formData.reviewText;
      default:
        return true;
    }
  };

  // Success State with Resources
  if (status === "success") {
    return (
      <>
        <MinimalNavbar />
        {showConfetti && <Confetti />}
        <div className="min-h-screen bg-black text-white pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center">
              {/* Party Popper */}
              <div className="text-8xl mb-6 animate-bounce">🎉</div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-unbounded bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
                You&apos;re Awesome!
              </h1>
              <p className="text-xl text-gray-400 mb-8 font-space-grotesk">
                Thank you so much for taking the time to share your experience. It means the world to us! 🙏
              </p>

              {/* Custom Message */}
              {resources?.customMessage && (
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-6 mb-8 text-left">
                  <p className="text-gray-300 whitespace-pre-wrap">{resources.customMessage}</p>
                </div>
              )}

              {/* Resources Card */}
              {resources && (resources.liveWebsiteUrl || resources.sourceCodeUrl || resources.documentationUrl || (resources.additionalLinks && resources.additionalLinks.length > 0)) && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
                    🎁 Your Project Resources
                  </h2>
                  <p className="text-sm text-gray-400 mb-6">
                    Here are the resources for your project. Save these links!
                  </p>

                  <div className="space-y-4">
                    {resources.liveWebsiteUrl && (
                      <a
                        href={resources.liveWebsiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl hover:bg-emerald-500/20 transition-colors group"
                      >
                        <span className="text-2xl">🌐</span>
                        <div className="flex-1 text-left">
                          <p className="font-semibold text-white">Live Website</p>
                          <p className="text-sm text-emerald-400 truncate">{resources.liveWebsiteUrl}</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}

                    {resources.sourceCodeUrl && (
                      <a
                        href={resources.sourceCodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl hover:bg-purple-500/20 transition-colors group"
                      >
                        <span className="text-2xl">💻</span>
                        <div className="flex-1 text-left">
                          <p className="font-semibold text-white">Source Code</p>
                          <p className="text-sm text-purple-400 truncate">{resources.sourceCodeUrl}</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}

                    {resources.documentationUrl && (
                      <a
                        href={resources.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl hover:bg-blue-500/20 transition-colors group"
                      >
                        <span className="text-2xl">📄</span>
                        <div className="flex-1 text-left">
                          <p className="font-semibold text-white">Documentation</p>
                          <p className="text-sm text-blue-400 truncate">{resources.documentationUrl}</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}

                    {resources.additionalLinks?.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-2xl">🔗</span>
                        <div className="flex-1 text-left">
                          <p className="font-semibold text-white">{link.label}</p>
                          <p className="text-sm text-gray-400 truncate">{link.url}</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* No resources message */}
              {!resources && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                  <p className="text-gray-400">
                    Your review has been submitted successfully! We&apos;ll be in touch soon with your project resources.
                  </p>
                </div>
              )}

              {/* <Link
                href="/"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
              >
                Visit Our Website
              </Link> */}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <MinimalNavbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">👋</div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-unbounded bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Hey{formData.clientName ? `, ${formData.clientName.split(' ')[0]}` : ''}! 
            </h1>
            <p className="text-gray-400 font-space-grotesk">
              Thanks for working with me on <span className="text-blue-400">{formData.projectName || 'your project'}</span>! 
              I&apos;d love to hear about your experience.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-gray-400">{Math.round((currentStep / totalSteps) * 100)}% complete</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Your Info */}
            {currentStep === 1 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">📝</span>
                  Let&apos;s start with the basics
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">What&apos;s your name?</label>
                    <input
                      type="text"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your email (kept private)</label>
                    <input
                      type="email"
                      value={formData.clientEmail}
                      onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Project Name</label>
                      <input
                        type="text"
                        value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                        placeholder="My Website"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Type</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
                      >
                        {serviceTypes.map((type) => (
                          <option key={type.value} value={type.value} className="bg-gray-900">
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Quick Questions */}
            {currentStep === 2 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  Quick questions about your experience
                </h2>

                <div className="space-y-8">
                  {experienceQuestions.map((q) => (
                    <div key={q.id} className="bg-white/5 rounded-xl p-5">
                      <p className="font-medium text-white mb-4 flex items-center gap-2">
                        <span>{q.emoji}</span> {q.question}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setFormData({
                              ...formData,
                              experienceAnswers: { ...formData.experienceAnswers, [q.id]: option.value }
                            })}
                            className={`p-3 rounded-lg text-left text-sm transition-all ${
                              formData.experienceAnswers[q.id] === option.value
                                ? 'bg-blue-500/20 border-2 border-blue-500 text-white'
                                : 'bg-white/5 border-2 border-transparent text-gray-300 hover:bg-white/10'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: What-If Questions + Rating */}
            {currentStep === 3 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">🤔</span>
                  A few more quick ones...
                </h2>

                {/* What-If Toggle Questions */}
                <div className="space-y-4 mb-8">
                  {whatIfQuestions.map((q) => (
                    <div
                      key={q.id}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
                    >
                      <span className="flex items-center gap-2 text-gray-300">
                        <span>{q.emoji}</span> {q.question}
                      </span>
                      <button
                        type="button"
                        onClick={() => setFormData({
                          ...formData,
                          whatIfAnswers: { ...formData.whatIfAnswers, [q.id]: !formData.whatIfAnswers[q.id] }
                        })}
                        className={`w-14 h-8 rounded-full transition-all relative ${
                          formData.whatIfAnswers[q.id] ? 'bg-emerald-500' : 'bg-gray-600'
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${
                            formData.whatIfAnswers[q.id] ? 'left-7' : 'left-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Star Rating */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20">
                  <p className="font-medium text-white mb-4 text-center">⭐ Overall, how would you rate your experience?</p>
                  <div className="flex justify-center items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="p-1 transition-transform hover:scale-125"
                      >
                        <svg
                          className={`w-12 h-12 transition-colors ${
                            star <= (hoveredRating || formData.rating) ? "text-yellow-400" : "text-gray-600"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                  <p className="text-center text-2xl font-bold text-yellow-400">{formData.rating}/5</p>
                </div>
              </div>
            )}

            {/* Step 4: Final Review */}
            {currentStep === 4 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">✍️</span>
                  Finally, share your thoughts!
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Give your review a title
                    </label>
                    <input
                      type="text"
                      value={formData.reviewTitle}
                      onChange={(e) => setFormData({ ...formData, reviewTitle: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      placeholder="e.g., Amazing work, highly recommend!"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tell us more about your experience
                    </label>
                    <textarea
                      value={formData.reviewText}
                      onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
                      placeholder="What did you like most? Any highlights from the project? Feel free to share anything!"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-2">{formData.reviewText.length}/2000 characters</p>
                  </div>

                  {/* Privacy Toggle */}
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div>
                      <p className="text-gray-300 font-medium">Make review public?</p>
                      <p className="text-xs text-gray-500">May be displayed on our website</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, isPublic: !formData.isPublic })}
                      className={`w-14 h-8 rounded-full transition-all relative ${
                        formData.isPublic ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${
                          formData.isPublic ? 'left-7' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                {errorMessage}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 px-6 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
                >
                  ← Back
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Continue →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={status === "submitting" || !canProceed()}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "🎉 Submit Review"
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default function ReviewPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ReviewPageContent />
    </Suspense>
  );
}
