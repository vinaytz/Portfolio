"use client";

import MinimalNavbar from "@/components/other/MinimalNavbar";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <MinimalNavbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm text-gray-300 font-medium">Your Data Privacy</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-unbounded bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400 font-space-grotesk">
              Last Updated: November 28, 2025
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300 font-space-grotesk leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">1. Introduction</h2>
              <p>
                At Vinaytz ("we," "our," or "us"), we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">2. Information We Collect</h2>
              <p className="mb-4">
                We may collect the following types of information:
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Name and contact details (email address, phone number)</li>
                <li>Business or company name</li>
                <li>Project requirements and specifications</li>
                <li>Payment and billing information (processed through Razorpay)</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Operating system information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and deliver the services you request</li>
                <li>To process payments and send transaction confirmations</li>
                <li>To communicate with you about projects, updates, and service-related matters</li>
                <li>To improve our website and services</li>
                <li>To send promotional materials (only with your consent)</li>
                <li>To comply with legal obligations</li>
                <li>To prevent fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">4. Payment Information Security</h2>
              <p className="mb-4">
                All payment transactions are processed through Razorpay. We do not store your complete credit card or debit card information on our servers. Razorpay handles all sensitive payment data in compliance with industry standards.
              </p>
              <p>
                We only retain transaction IDs and basic payment metadata necessary for providing services and support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">5. Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and providing services (e.g., Razorpay for payment processing, email service providers)</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong className="text-white">Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets</li>
                <li><strong className="text-white">With Your Consent:</strong> With your explicit permission for any other purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Project-related data may be retained for up to 7 years for legal and accounting purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">7. Your Rights and Choices</h2>
              <p className="mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong className="text-white">Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong className="text-white">Data Portability:</strong> Request a copy of your data in a structured, commonly used format</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at contact@vinaytz.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">8. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. Note that disabling cookies may affect website functionality.
              </p>
              <p>
                Types of cookies we use:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong className="text-white">Essential Cookies:</strong> Necessary for website operation</li>
                <li><strong className="text-white">Performance Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong className="text-white">Functionality Cookies:</strong> Remember your preferences and settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">9. Security Measures</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">10. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">11. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">12. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">13. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">14. Contact Us</h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="mb-2"><strong className="text-white">Email:</strong> contact@vinaytz.com</p>
                <p className="mb-2"><strong className="text-white">Business Name:</strong> Vinaytz</p>
                <p><strong className="text-white">Location:</strong> India</p>
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
