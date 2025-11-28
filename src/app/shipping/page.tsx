"use client";

import MinimalNavbar from "@/components/other/MinimalNavbar";
import Link from "next/link";

export default function Shipping() {
  return (
    <>
      <MinimalNavbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm text-gray-300 font-medium">Service Delivery</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-unbounded bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Service Delivery Policy
            </h1>
            <p className="text-xl text-gray-400 font-space-grotesk">
              Last Updated: November 28, 2025
            </p>
          </div>

          <div className="space-y-8 text-gray-300 font-space-grotesk leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">1. Nature of Services</h2>
              <p>
                Vinaytz provides digital services including web development, software development, and related technical consulting. As we deliver digital products and services, there is no physical shipping involved. All deliverables are provided electronically through secure digital channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">2. Delivery Timeline</h2>
              <p className="mb-4">
                Project delivery timelines are established in the project agreement and depend on several factors:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Project scope and complexity</li>
                <li>Client feedback and approval turnaround time</li>
                <li>Availability of required resources and information from the client</li>
                <li>Third-party service dependencies</li>
              </ul>
              <p className="mt-4">
                Typical delivery timeframes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong className="text-white">Landing Pages:</strong> 3-7 business days</li>
                <li><strong className="text-white">Small Websites:</strong> 2-4 weeks</li>
                <li><strong className="text-white">Medium Complexity Projects:</strong> 4-8 weeks</li>
                <li><strong className="text-white">Large Scale Applications:</strong> 8-16 weeks or as mutually agreed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">3. Delivery Methods</h2>
              <p className="mb-4">
                We deliver our services through the following secure digital channels:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Git Repositories:</strong> Source code via GitHub, GitLab, or Bitbucket</li>
                <li><strong className="text-white">Cloud Storage:</strong> Files via Google Drive, Dropbox, or similar secure platforms</li>
                <li><strong className="text-white">Email:</strong> Documentation and small files sent to registered email</li>
                <li><strong className="text-white">Deployment:</strong> Direct deployment to client's hosting environment</li>
                <li><strong className="text-white">Project Management Tools:</strong> Via platforms like Trello, Asana, or Jira</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">4. Milestone-Based Delivery</h2>
              <p className="mb-4">
                For larger projects, we follow a milestone-based delivery approach:
              </p>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li><strong className="text-white">Planning & Design Phase:</strong> Wireframes, mockups, and technical specifications</li>
                <li><strong className="text-white">Development Phase:</strong> Functional modules delivered in stages for review</li>
                <li><strong className="text-white">Testing Phase:</strong> Complete project with testing documentation</li>
                <li><strong className="text-white">Deployment & Handover:</strong> Final deployment with documentation and training</li>
              </ol>
              <p className="mt-4">
                Each milestone requires client approval before proceeding to the next phase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">5. Client Responsibilities</h2>
              <p className="mb-4">
                Timely delivery requires client cooperation in the following areas:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing content, assets, and brand materials within agreed timeframes</li>
                <li>Granting necessary access to hosting, domains, and third-party services</li>
                <li>Reviewing and approving deliverables promptly (typically within 3-5 business days)</li>
                <li>Providing clear and consolidated feedback</li>
                <li>Being available for scheduled meetings and consultations</li>
              </ul>
              <p className="mt-4">
                Delays caused by client-side factors may result in timeline extensions without penalty to Vinaytz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">6. Revisions and Modifications</h2>
              <p className="mb-4">
                Each project includes a specified number of revision rounds:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Design Phase:</strong> Up to 3 rounds of revisions</li>
                <li><strong className="text-white">Development Phase:</strong> Up to 2 rounds of minor revisions</li>
                <li><strong className="text-white">Post-Delivery:</strong> Bug fixes during warranty period (typically 30 days)</li>
              </ul>
              <p className="mt-4">
                Additional revisions beyond the agreed scope may incur extra charges and extend delivery timelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">7. Final Deliverables</h2>
              <p className="mb-4">
                Upon project completion, clients will receive:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Complete source code with documentation</li>
                <li>Deployment packages or live deployment</li>
                <li>User manuals and technical documentation</li>
                <li>Admin panel access credentials (if applicable)</li>
                <li>Configuration files and environment setup guides</li>
                <li>Training materials or video tutorials (as agreed)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">8. Post-Delivery Support</h2>
              <p className="mb-4">
                After delivery, we provide:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Warranty Period:</strong> 30 days of bug fixes and issue resolution at no cost</li>
                <li><strong className="text-white">Technical Support:</strong> Email support for setup and configuration queries</li>
                <li><strong className="text-white">Documentation:</strong> Comprehensive guides for maintenance and updates</li>
              </ul>
              <p className="mt-4">
                Extended support and maintenance packages are available separately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">9. Delays and Extensions</h2>
              <p className="mb-4">
                If delays occur, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Notify you immediately with explanation and revised timeline</li>
                <li>Provide regular progress updates</li>
                <li>Work to minimize impact on your business operations</li>
                <li>Offer compensation or discounts for significant delays caused by our team (case-by-case basis)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">10. Acceptance and Sign-Off</h2>
              <p className="mb-4">
                Project delivery is considered complete when:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All agreed deliverables have been provided</li>
                <li>Client has tested and approved the final deliverables</li>
                <li>Written acceptance has been received via email</li>
                <li>Final payment has been processed</li>
              </ul>
              <p className="mt-4">
                If no response is received within 7 days of delivery, the project will be deemed accepted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 font-unbounded">11. Contact for Delivery Queries</h2>
              <p className="mb-4">
                For questions about service delivery, timelines, or to track your project status:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="mb-2"><strong className="text-white">Email:</strong> contact@vinaytz.com</p>
                <p className="mb-2"><strong className="text-white">Business Name:</strong> Vinaytz</p>
                <p className="mb-2"><strong className="text-white">Location:</strong> India</p>
                <p className="mt-4 text-sm text-gray-400">Response Time: Within 24 hours on business days</p>
              </div>
            </section>
          </div>

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
