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
              Let's Work Together
            </h3>
            <p className="text-neutral-100 text-3xl font-semibold sm:text-4xl">
              Interested in hiring me?
            </p>
            <p>
              I'm actively seeking remote opportunities in WordPress, PHP, Laravel, and full-stack development. Whether you need custom solutions, e-commerce development, or enterprise applications, let's discuss how I can help your team.
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
                    className="w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 placeholder-neutral-400/70"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 placeholder-neutral-400/70"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <select
                    required
                    className="w-full px-3 py-2 text-neutral-400/70 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 focus:text-neutral-100"
                  >
                    <option value="" disabled>Type of Inquiry</option>
                    <option value="full-time-remote" className="text-neutral-100">Full-time Remote Position</option>
                    <option value="contract-remote" className="text-neutral-100">Contract Remote Work</option>
                    <option value="wordpress-dev" className="text-neutral-100">WordPress Development</option>
                    <option value="laravel-dev" className="text-neutral-100">Laravel Application</option>
                    <option value="php-dev" className="text-neutral-100">PHP Development</option>
                    <option value="woocommerce" className="text-neutral-100">WooCommerce Project</option>
                    <option value="consulting" className="text-neutral-100">Technical Consulting</option>
                    <option value="other" className="text-neutral-100">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <input
                    type="text"
                    placeholder="Company/Organization (optional)"
                    className="w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 placeholder-neutral-400/70"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    className="w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 placeholder-neutral-400/70"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <select
                    className="w-full px-3 py-2 text-neutral-400/70 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 focus:text-neutral-100"
                  >
                    <option value="" disabled>Project Budget (optional)</option>
                    <option value="under-5k" className="text-neutral-100">Under $5,000</option>
                    <option value="5k-10k" className="text-neutral-100">$5,000 - $10,000</option>
                    <option value="10k-25k" className="text-neutral-100">$10,000 - $25,000</option>
                    <option value="25k-50k" className="text-neutral-100">$25,000 - $50,000</option>
                    <option value="50k-100k" className="text-neutral-100">$50,000 - $100,000</option>
                    <option value="over-100k" className="text-neutral-100">$100,000+</option>
                    <option value="discuss" className="text-neutral-100">Let&apos;s discuss</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <textarea
                    required
                    placeholder="Tell me about your project or opportunity: What are you looking to build? Are you hiring for a full-time role or contract work? Include details about the tech stack, project scope, timeline, and whether it's a remote position. The more information you provide, the better I can understand how I can help."
                    className="w-full h-40 px-3 py-2 resize-none appearance-none bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 text-neutral-100 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 placeholder-neutral-400/70"
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
