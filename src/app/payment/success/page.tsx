"use client";

import MinimalNavbar from "@/components/other/MinimalNavbar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const amount = searchParams.get("amount");
  const paymentId = searchParams.get("payment_id");

  return (
    <>
      <MinimalNavbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Success Animation */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 mb-8 animate-pulse">
              <svg
                className="w-12 h-12 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-unbounded bg-clip-text text-transparent bg-gradient-to-b from-emerald-400 via-emerald-300 to-emerald-500">
              Payment Successful!
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-space-grotesk">
              Thank you for your payment. Your transaction has been completed successfully.
            </p>
          </div>

          {/* Transaction Details */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-unbounded flex items-center gap-3">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Transaction Details
            </h2>
            
            <div className="space-y-4">
              {orderId && (
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-white/10">
                  <span className="text-gray-400 mb-1 sm:mb-0">Order ID</span>
                  <span className="text-white font-semibold font-mono">{orderId}</span>
                </div>
              )}
              {paymentId && (
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-white/10">
                  <span className="text-gray-400 mb-1 sm:mb-0">Payment ID</span>
                  <span className="text-white font-semibold font-mono">{paymentId}</span>
                </div>
              )}
              {amount && (
                <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-white/10">
                  <span className="text-gray-400 mb-1 sm:mb-0">Amount Paid</span>
                  <span className="text-emerald-400 font-bold text-xl">₹{amount}</span>
                </div>
              )}
              <div className="flex flex-col sm:flex-row sm:justify-between py-3">
                <span className="text-gray-400 mb-1 sm:mb-0">Payment Status</span>
                <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  Completed
                </span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-unbounded flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              What Happens Next?
            </h2>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Confirmation Email</span>
                  <p className="text-sm text-gray-400 mt-1">
                    You will receive a confirmation email with your payment receipt and order details at your registered email address.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-400 font-bold">2</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Project Kickoff</span>
                  <p className="text-sm text-gray-400 mt-1">
                    Our team will reach out to you within 24 hours to schedule a project kickoff meeting and discuss the requirements in detail.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald-400 font-bold">3</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Development Begins</span>
                  <p className="text-sm text-gray-400 mt-1">
                    Once we finalize the requirements, we'll start working on your project and keep you updated with regular progress reports.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Support Info */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-unbounded flex items-center gap-3">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Need Help?
            </h2>
            <p className="text-gray-400 mb-4">
              If you have any questions or concerns about your payment or project, feel free to reach out to us:
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
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Receipt
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition-all"
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

export default function PaymentSuccess() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
}
