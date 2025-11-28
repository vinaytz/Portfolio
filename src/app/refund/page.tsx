"use client";

import MinimalNavbar from "@/components/other/MinimalNavbar";
import Link from "next/link";

export default function Refund() {
  return (
    <>
      <MinimalNavbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="text-sm text-gray-300 font-medium">Payment & Refunds</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-unbounded bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xl text-gray-400 font-space-grotesk">
              Last Updated: November 28, 2025
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300 font-space-grotesk leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">1. Overview</h2>
              <p>
                At Vinaytz, we strive to deliver high-quality services and ensure client satisfaction. This Refund & Cancellation Policy outlines the terms and conditions for refunds and cancellations of our web development and software services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">2. Cancellation Policy</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">2.1 Client-Initiated Cancellation</h3>
              <p className="mb-4">
                Clients may cancel a project under the following conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong className="text-white">Before Project Commencement:</strong> Full refund minus payment processing fees (typically 2-3%)</li>
                <li><strong className="text-white">During Planning Phase (0-25% completion):</strong> 75% refund of total project cost</li>
                <li><strong className="text-white">During Development Phase (25-50% completion):</strong> 50% refund of total project cost</li>
                <li><strong className="text-white">During Testing Phase (50-75% completion):</strong> 25% refund of total project cost</li>
                <li><strong className="text-white">After 75% Completion or Delivery:</strong> No refund available</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">2.2 Service Provider-Initiated Cancellation</h3>
              <p className="mb-4">
                We reserve the right to cancel a project if:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Client fails to provide necessary information or resources after multiple requests</li>
                <li>Client violates our Terms & Conditions</li>
                <li>Project requirements are beyond our scope of expertise</li>
                <li>Payment is not received as per the agreed schedule</li>
              </ul>
              <p>
                In such cases, work completed up to the cancellation date will be billed, and any excess payment will be refunded within 7-10 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">3. Refund Policy</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">3.1 Eligibility for Refunds</h3>
              <p className="mb-4">
                Refunds may be requested under the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Services not delivered as per the agreed specifications and timeline</li>
                <li>Major defects or issues that cannot be resolved within a reasonable timeframe</li>
                <li>Duplicate payment made by mistake</li>
                <li>Payment made for services not yet commenced</li>
                <li>Cancellation as per our cancellation policy</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">3.2 Non-Refundable Items</h3>
              <p className="mb-4">
                The following are non-refundable:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Consultation fees and initial project planning costs</li>
                <li>Third-party service costs (domain registration, hosting, licenses, APIs, etc.)</li>
                <li>Custom development work that has been delivered and approved</li>
                <li>Services rendered during the agreed warranty period</li>
                <li>Payment processing fees charged by Razorpay or other payment gateways</li>
                <li>Costs for revisions beyond the agreed scope or revision limit</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">4. Refund Process</h2>
              <p className="mb-4">
                To request a refund:
              </p>
              <ol className="list-decimal list-inside space-y-3 ml-4 mb-4">
                <li>Send a written refund request to contact@vinaytz.com with:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-400">
                    <li>Project details and transaction ID</li>
                    <li>Reason for refund request</li>
                    <li>Supporting documentation (if applicable)</li>
                  </ul>
                </li>
                <li>Our team will review your request within 3-5 business days</li>
                <li>You will receive a response regarding the approval or denial of your request</li>
                <li>If approved, refund will be processed within 7-10 business days</li>
                <li>Refund will be credited to the original payment method</li>
              </ol>
              <p>
                Please note that depending on your bank or payment provider, it may take an additional 5-7 business days for the refund to reflect in your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">5. Partial Refunds</h2>
              <p className="mb-4">
                Partial refunds may be issued in the following scenarios:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Partial project completion followed by mutual cancellation agreement</li>
                <li>Reduction in project scope after initial payment</li>
                <li>Minor defects or issues that affect only part of the deliverables</li>
                <li>Late delivery compensation as per project agreement</li>
              </ul>
              <p className="mt-4">
                The partial refund amount will be calculated based on the work completed and mutually agreed upon between both parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">6. Milestone-Based Projects</h2>
              <p className="mb-4">
                For projects with milestone-based payments:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Refunds are calculated based on incomplete milestones only</li>
                <li>Completed and approved milestones are non-refundable</li>
                <li>Work in progress on the current milestone will be assessed and billed accordingly</li>
                <li>Payment for future milestones will be fully refunded</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">7. Subscription Services</h2>
              <p className="mb-4">
                For ongoing maintenance or subscription-based services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cancellation must be requested at least 7 days before the next billing cycle</li>
                <li>No refunds for the current billing period</li>
                <li>Services will continue until the end of the paid period</li>
                <li>Unused time in annual subscriptions may be prorated if cancelled within the first 90 days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">8. Dispute Resolution</h2>
              <p className="mb-4">
                If you disagree with a refund decision:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Contact us at contact@vinaytz.com to discuss your concerns</li>
                <li>We will review your case and provide a detailed explanation</li>
                <li>If an agreement cannot be reached, both parties may opt for mediation</li>
                <li>As a last resort, disputes will be handled according to the Governing Law specified in our Terms & Conditions</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">9. Force Majeure</h2>
              <p>
                In the event of circumstances beyond our control (natural disasters, pandemics, government restrictions, etc.), we will work with you to either:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Extend the project timeline without additional charges</li>
                <li>Provide a refund for undelivered work, minus costs already incurred</li>
                <li>Mutually agree on an alternative solution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">10. Amendments to This Policy</h2>
              <p>
                We reserve the right to modify this Refund & Cancellation Policy at any time. Changes will be effective immediately upon posting to our website. It is your responsibility to review this policy periodically. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">11. Contact Information</h2>
              <p className="mb-4">
                For refund requests, cancellations, or questions about this policy, please contact us:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="mb-2"><strong className="text-white">Email:</strong> contact@vinaytz.com</p>
                <p className="mb-2"><strong className="text-white">Business Name:</strong> Vinaytz</p>
                <p className="mb-2"><strong className="text-white">Location:</strong> India</p>
                <p className="mt-4 text-sm text-gray-400">Response Time: Within 24-48 hours on business days</p>
              </div>
            </section>
          </div>

          {/* Back Button */}
          <div className="mt-16 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
