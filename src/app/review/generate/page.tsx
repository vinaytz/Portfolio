"use client";

import MinimalNavbar from "@/components/other/MinimalNavbar";
import { useState } from "react";

export default function GenerateReviewLink() {
  const [formData, setFormData] = useState({
    projectName: "",
    projectUrl: "",
    clientName: "",
    serviceType: "website",
    // Resources to give after review
    resources: {
      liveWebsiteUrl: "",
      sourceCodeUrl: "",
      documentationUrl: "",
      customMessage: "",
      additionalLinks: [] as { label: string; url: string }[],
    },
  });

  const [generatedLink, setGeneratedLink] = useState("");
  const [newLink, setNewLink] = useState({ label: "", url: "" });

  const serviceTypes = [
    { value: "website", label: "Website Development" },
    { value: "web-app", label: "Web Application" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "ecommerce", label: "E-Commerce Store" },
    { value: "custom", label: "Custom Solution" },
    { value: "other", label: "Other" },
  ];

  const addAdditionalLink = () => {
    if (newLink.label && newLink.url) {
      setFormData({
        ...formData,
        resources: {
          ...formData.resources,
          additionalLinks: [...formData.resources.additionalLinks, newLink],
        },
      });
      setNewLink({ label: "", url: "" });
    }
  };

  const removeAdditionalLink = (index: number) => {
    setFormData({
      ...formData,
      resources: {
        ...formData.resources,
        additionalLinks: formData.resources.additionalLinks.filter((_, i) => i !== index),
      },
    });
  };

  const generateLink = () => {
    const data = {
      pn: formData.projectName,
      pu: formData.projectUrl,
      cn: formData.clientName,
      st: formData.serviceType,
      res: formData.resources,
    };

    const encoded = btoa(encodeURIComponent(JSON.stringify(data)));
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    const link = `${baseUrl}/review?data=${encoded}`;
    setGeneratedLink(link);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
  };

  return (
    <>
      <MinimalNavbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span className="text-sm text-gray-300 font-medium">Admin Tool</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-unbounded bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Generate Review Link
            </h1>
            <p className="text-gray-400 font-space-grotesk">
              Create a custom link to send to your client for collecting reviews.
            </p>
          </div>

          <div className="space-y-8">
            {/* Project Details */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs text-blue-400">1</span>
                Project Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Client Name</label>
                  <input
                    type="text"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Project Name *</label>
                  <input
                    type="text"
                    value={formData.projectName}
                    onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="Awesome Website"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Project URL</label>
                  <input
                    type="url"
                    value={formData.projectUrl}
                    onChange={(e) => setFormData({ ...formData, projectUrl: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="https://client-website.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Service Type</label>
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

            {/* Resources to Give */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs text-emerald-400">2</span>
                Resources for Client (After Review)
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                These will be shown to the client after they submit their review.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">🌐 Live Website URL</label>
                  <input
                    type="url"
                    value={formData.resources.liveWebsiteUrl}
                    onChange={(e) => setFormData({ ...formData, resources: { ...formData.resources, liveWebsiteUrl: e.target.value } })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="https://your-live-website.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">💻 Source Code URL (GitHub, etc.)</label>
                  <input
                    type="url"
                    value={formData.resources.sourceCodeUrl}
                    onChange={(e) => setFormData({ ...formData, resources: { ...formData.resources, sourceCodeUrl: e.target.value } })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="https://github.com/user/repo"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">📄 Documentation URL</label>
                  <input
                    type="url"
                    value={formData.resources.documentationUrl}
                    onChange={(e) => setFormData({ ...formData, resources: { ...formData.resources, documentationUrl: e.target.value } })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="https://docs.example.com"
                  />
                </div>

                {/* Additional Links */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">➕ Additional Links</label>
                  {formData.resources.additionalLinks.length > 0 && (
                    <div className="space-y-2 mb-3">
                      {formData.resources.additionalLinks.map((link, index) => (
                        <div key={index} className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                          <span className="text-sm text-white flex-1">{link.label}: {link.url}</span>
                          <button
                            onClick={() => removeAdditionalLink(index)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newLink.label}
                      onChange={(e) => setNewLink({ ...newLink, label: e.target.value })}
                      className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      placeholder="Label (e.g., Design Files)"
                    />
                    <input
                      type="url"
                      value={newLink.url}
                      onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                      className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      placeholder="URL"
                    />
                    <button
                      onClick={addAdditionalLink}
                      className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">💬 Custom Thank You Message</label>
                  <textarea
                    value={formData.resources.customMessage}
                    onChange={(e) => setFormData({ ...formData, resources: { ...formData.resources, customMessage: e.target.value } })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
                    rows={3}
                    placeholder="Thank you for your review! Here are your project files..."
                  />
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateLink}
              disabled={!formData.projectName}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Generate Link
            </button>

            {/* Generated Link */}
            {generatedLink && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">✅ Link Generated!</h3>
                <p className="text-sm text-gray-400 mb-3">Send this link to your client:</p>
                <div className="flex items-center gap-2 bg-black/50 rounded-xl p-4">
                  <code className="flex-1 text-emerald-400 text-sm break-all">{generatedLink}</code>
                  <button
                    onClick={copyToClipboard}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white text-sm"
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
