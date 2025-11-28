"use client";

import MinimalNavbar from "@/components/other/MinimalNavbar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PaymentFailedContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const errorCode = searchParams.get("error_code");
  const errorDescription = searchParams.get("error_description");

  return (
    <>
      <MinimalNavbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Error Animation */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/10 border-2 border-red-500/30 mb-8 animate-pulse">
              <svg
                className="w-12 h-12 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-unbounded bg-clip-text text-transparent bg-gradient-to-b from-red-400 via-red-300 to-red-500">
              Payment Failed
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-space-grotesk">
              Unfortunately, we couldn't process your payment. Please try again or contact support.
            </p>
          </div>

          {/* Error Details */}
          {(orderId || errorCode || errorDescription) && (
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 font-unbounded flex items-center gap-3">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Error Details
              </h2>
              
              <div className="space-y-4">
                {orderId && (
                  <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-red-500/20">
                    <span className="text-gray-400 mb-1 sm:mb-0">Order ID</span>
                    <span className="text-white font-semibold font-mono">{orderId}</span>
                  </div>
                )}
                {errorCode && (
                  <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-red-500/20">
                    <span className="text-gray-400 mb-1 sm:mb-0">Error Code</span>
                    <span className="text-red-400 font-semibold font-mono">{errorCode}</span>
                  </div>
                )}
                {errorDescription && (
                  <div className="py-3">
                    <span className="text-gray-400 block mb-2">Error Description</span>
                    <span className="text-white">{errorDescription}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Common Reasons */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-unbounded flex items-center gap-3">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Common Reasons for Payment Failure
            </h2>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2"></div>
                <div>
                  <span className="font-semibold text-white">Insufficient Balance</span>
                  <p className="text-sm text-gray-400 mt-1">
                    Your account may not have sufficient funds to complete the transaction.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2"></div>
                <div>
                  <span className="font-semibold text-white">Incorrect Card Details</span>
                  <p className="text-sm text-gray-400 mt-1">
                    Please verify that your card number, CVV, and expiry date are entered correctly.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2"></div>
                <div>
                  <span className="font-semibold text-white">Bank Declined</span>
                  <p className="text-sm text-gray-400 mt-1">
                    Your bank may have declined the transaction for security reasons. Please contact your bank.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2"></div>
                <div>
                  <span className="font-semibold text-white">Network Issues</span>
                  <p className="text-sm text-gray-400 mt-1">
                    Temporary network issues may have interrupted the payment process.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2"></div>
                <div>
                  <span className="font-semibold text-white">Payment Limits Exceeded</span>
                  <p className="text-sm text-gray-400 mt-1">
                    You may have exceeded your daily transaction limit set by your bank.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-unbounded flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              What You Can Do
            </h2>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Verify Your Details</span>
                  <p className="text-sm text-gray-400 mt-1">
                    Double-check your card details, billing address, and ensure you have sufficient balance.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-400 font-bold">2</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Try Another Payment Method</span>
                  <p className="text-sm text-gray-400 mt-1">
                    Consider using a different card, UPI, net banking, or another payment option.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold">3</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Contact Your Bank</span>
                  <p className="text-sm text-gray-400 mt-1">
                    If the issue persists, contact your bank to verify if there are any restrictions on your account.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Support Info */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-unbounded flex items-center gap-3">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Need Assistance?
            </h2>
            <p className="text-gray-400 mb-4">
              Our support team is here to help. If you continue to experience issues, please reach out:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@vinaytz.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold hover:bg-blue-500/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 font-semibold hover:bg-purple-500/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Contact Form
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Retry Payment
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default function PaymentFailed() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <PaymentFailedContent />
    </Suspense>
  );
}
