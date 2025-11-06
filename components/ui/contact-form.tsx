"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Portfolio Contact Form",
      subject: "New Contact Message from Your Portfolio",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

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
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              {/* Hidden Honeypot */}
              <input
                type="checkbox"
                id="botcheck"
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              />

              {/* Full Name */}
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={`w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 rounded-lg placeholder-neutral-400/70 ${
                      errors.name
                        ? "border-red-600 focus:border-red-600"
                        : "border-purple-500 focus:border-white/80"
                    }`}
                    {...register("name", {
                      required: "Full name is required",
                      maxLength: 80,
                    })}
                  />
                </div>
                {errors.name && (
                  <div className="mt-1 text-red-400 text-sm">
                    {errors.name.message as string}
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={`w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 rounded-lg placeholder-neutral-400/70 ${
                      errors.email
                        ? "border-red-600 focus:border-red-600"
                        : "border-purple-500 focus:border-white/80"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <div className="mt-1 text-red-400 text-sm">
                    {errors.email.message as string}
                  </div>
                )}
              </div>

              {/* Inquiry Type */}
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <select
                    className={`w-full px-3 py-2 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 rounded-lg ${
                      errors.inquiryType
                        ? "border-red-600 focus:border-red-600 text-neutral-100"
                        : "border-purple-500 focus:border-white/80 text-neutral-400/70 focus:text-neutral-100"
                    }`}
                    defaultValue=""
                    {...register("inquiryType", {
                      required: "Please select an inquiry type",
                    })}
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
                {errors.inquiryType && (
                  <div className="mt-1 text-red-400 text-sm">
                    {errors.inquiryType.message as string}
                  </div>
                )}
              </div>

              {/* Company */}
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <input
                    type="text"
                    placeholder="Company/Organization (optional)"
                    className="w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 placeholder-neutral-400/70"
                    {...register("company")}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <input
                    type="tel"
                    placeholder="Phone Number (optional)"
                    className="w-full px-3 py-2 text-neutral-100 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 placeholder-neutral-400/70"
                    {...register("phone")}
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <select
                    className="w-full px-3 py-2 text-neutral-400/70 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 outline-none border-2 border-purple-500 rounded-lg focus:border-white/80 focus:text-neutral-100"
                    defaultValue=""
                    {...register("budget")}
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

              {/* Message */}
              <div>
                <div className="relative rounded-lg bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[2px]">
                  <textarea
                    placeholder="Tell me about your project or opportunity: What are you looking to build? Are you hiring for a full-time role or contract work? Include details about the tech stack, project scope, timeline, and whether it's a remote position. The more information you provide, the better I can understand how I can help."
                    className={`w-full h-40 px-3 py-2 resize-none appearance-none bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 text-neutral-100 outline-none border-2 rounded-lg placeholder-neutral-400/70 ${
                      errors.message
                        ? "border-red-600 focus:border-red-600"
                        : "border-purple-500 focus:border-white/80"
                    }`}
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                </div>
                {errors.message && (
                  <div className="mt-1 text-red-400 text-sm">
                    {errors.message.message as string}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Send Inquiry"
                )}
              </Button>
            </form>

            {isSubmitSuccessful && isSuccess && (
              <div className="mt-3 text-sm text-center text-green-400">
                {message || "Success! Your message has been sent."}
              </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
              <div className="mt-3 text-sm text-center text-red-400">
                {message || "Something went wrong. Please try again later."}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
