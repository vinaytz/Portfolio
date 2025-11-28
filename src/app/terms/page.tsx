"use client";

import MinimalNavbar from "@/components/other/MinimalNavbar";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <MinimalNavbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm text-gray-300 font-medium">Legal Documentation</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-unbounded bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-400 font-space-grotesk">
              Last Updated: November 28, 2025
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300 font-space-grotesk leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by Vinaytz ("we," "our," or "us"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms & Conditions, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">2. Services Provided</h2>
              <p className="mb-4">
                Vinaytz offers professional web development, software development, and related digital services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full-stack web application development</li>
                <li>Front-end and back-end development</li>
                <li>UI/UX design and implementation</li>
                <li>API development and integration</li>
                <li>Website maintenance and support</li>
                <li>Consulting and technical advisory services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">3. Payment Terms</h2>
              <p className="mb-4">
                All payments are processed securely through Razorpay. By making a payment, you agree to the following:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payments are due as per the agreed project milestones or payment schedule</li>
                <li>All prices are quoted in INR unless otherwise specified</li>
                <li>Payment confirmations will be sent to your registered email address</li>
                <li>Failed payments must be rectified within 48 hours to avoid service delays</li>
                <li>Refunds are subject to our Refund & Cancellation Policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">4. Project Scope and Deliverables</h2>
              <p className="mb-4">
                All projects are governed by a mutually agreed statement of work (SOW) or project agreement that includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Detailed project scope and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Payment schedule</li>
                <li>Revision and approval process</li>
                <li>Ownership and intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">5. Intellectual Property Rights</h2>
              <p className="mb-4">
                Upon full payment for the project:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You will receive ownership of the final deliverables as specified in the project agreement</li>
                <li>We retain the right to use the project in our portfolio unless otherwise agreed</li>
                <li>Pre-existing intellectual property and third-party components remain the property of their respective owners</li>
                <li>Any custom code or design created specifically for your project becomes your property upon final payment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">6. Client Responsibilities</h2>
              <p className="mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing timely feedback and approvals</li>
                <li>Supplying necessary content, assets, and access credentials</li>
                <li>Ensuring all provided content is legally owned or licensed</li>
                <li>Making payments according to the agreed schedule</li>
                <li>Communicating requirements clearly and promptly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">7. Confidentiality</h2>
              <p>
                We respect your privacy and confidentiality. All information shared during the course of our engagement will be kept confidential and will not be disclosed to third parties without your explicit consent, except where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">8. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Our total liability shall not exceed the total amount paid for the specific service</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>We are not responsible for third-party service failures or downtime</li>
                <li>Clients are responsible for maintaining backups of their data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">9. Warranties and Disclaimers</h2>
              <p className="mb-4">
                We warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Services will be performed with professional skill and care</li>
                <li>Deliverables will substantially conform to agreed specifications</li>
                <li>We will fix any bugs or issues reported within the agreed warranty period</li>
              </ul>
              <p className="mt-4">
                However, we disclaim all other warranties, express or implied, including merchantability and fitness for a particular purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">10. Termination</h2>
              <p className="mb-4">
                Either party may terminate the agreement under the following conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>By mutual written agreement</li>
                <li>If the other party breaches any material term and fails to remedy within 14 days</li>
                <li>For non-payment of invoices beyond 30 days</li>
              </ul>
              <p className="mt-4">
                Upon termination, you will be invoiced for work completed up to the termination date, and any completed deliverables will be provided upon payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">11. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any such changes constitutes your acceptance of the new Terms & Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">12. Governing Law</h2>
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">13. Contact Information</h2>
              <p className="mb-4">
                For any questions or concerns regarding these Terms & Conditions, please contact us:
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
