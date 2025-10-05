"use client";

import { Button } from "@/components/ui/button";

export default function ContactForm() {
  // Contact methods removed as they were placeholder content

  return (
    <section id="contact-me" className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-neutral-300 md:px-8">
        {/* Contact Form Section */}
        <div className="mt-20">
          <div className="max-w-lg mx-auto space-y-3 sm:text-center">
            <h3 className="text-indigo-600 font-semibold">
              Let's Build Something Amazing
            </h3>
            <p className="text-neutral-100 text-3xl font-semibold sm:text-4xl">
              Ready to leverage AI?
            </p>
            <p>
              Looking to build AI-powered applications, integrate intelligent features, or launch your next startup? Let's discuss how we can bring your vision to life.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 placeholder-neutral-400/50"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 placeholder-neutral-400/50"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <select
                    required
                    className="w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80"
                  >
                    <option value="" className="text-neutral-400/50">Type of Inquiry</option>
                    <option value="ai-integration">AI Integration Project</option>
                    <option value="startup-mvp">Startup MVP Development</option>
                    <option value="ai-consulting">AI Strategy Consulting</option>
                    <option value="full-time">Full-time AI Engineering Role</option>
                    <option value="contract">Contract AI Development</option>
                    <option value="mentorship">Startup Mentorship</option>
                    <option value="collaboration">Tech Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <input
                    type="text"
                    placeholder="Company/Organization (optional)"
                    className="w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 placeholder-neutral-400/50"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    className="w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 placeholder-neutral-400/50"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <select
                    className="w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80"
                  >
                    <option value="" className="text-neutral-400/50">Project Budget (optional)</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">$100,000+</option>
                    <option value="discuss">Let&apos;s discuss</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <textarea
                    required
                    placeholder="Describe your AI project or startup idea: What problem are you solving? Do you need AI integration, LLM implementation, RAG systems, or full-stack development? Include your timeline, tech stack preferences (TypeScript/Python), and any specific AI technologies you're considering. The more details you share, the better I can help bring your vision to life."
                    className="w-full h-40 px-3 py-2 resize-none appearance-none bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 text-neutral-100 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 placeholder-neutral-400/50"
                  ></textarea>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full"
              >
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
