"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check, Send } from "lucide-react";
import useWeb3Forms from "@web3forms/react";

interface FormData {
  name: string;
  email: string;
  inquiryType: string;
  company: string;
  phone: string;
  budget: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  inquiryType?: string;
  company?: string;
  phone?: string;
  budget?: string;
  message?: string;
}

const steps = [
  { id: "name", question: "Hi! What's your name?" },
  { id: "email", question: "Nice to meet you, {name}! What's your email?" },
  { id: "inquiryType", question: "Thanks! What type of inquiry is this?" },
  { id: "company", question: "Great! What's your company or organization? (optional)" },
  { id: "phone", question: "And your phone number? (optional)" },
  { id: "budget", question: "What's your project budget? (optional)" },
  { id: "message", question: "Perfect! Tell me about your project or opportunity:" },
  { id: "review", question: "Excellent! Here's what I have:" },
];

const inquiryOptions = [
  { value: "full-time-remote", label: "Full-time Remote Position" },
  { value: "contract-remote", label: "Contract Remote Work" },
  { value: "wordpress-dev", label: "WordPress Development" },
  { value: "laravel-dev", label: "Laravel Application" },
  { value: "php-dev", label: "PHP Development" },
  { value: "woocommerce", label: "WooCommerce Project" },
  { value: "consulting", label: "Technical Consulting" },
  { value: "other", label: "Other" },
];

const budgetOptions = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "over-100k", label: "$100,000+" },
  { value: "discuss", label: "Let's discuss" },
];

export default function ConversationalContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    inquiryType: "",
    company: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isTyping, setIsTyping] = useState(false);
  const [displayedQuestion, setDisplayedQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null)[]>([]);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

  const { submit: submitToWeb3Forms } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Portfolio Contact Form",
      subject: "New Contact Message from Your Portfolio",
    },
    onSuccess: (msg) => {
      setSubmitMessage(msg);
      setSubmitError(false);
      setIsComplete(true);
    },
    onError: (msg) => {
      setSubmitMessage(msg || "Something went wrong. Please try again.");
      setSubmitError(true);
      setIsSubmitting(false);
    },
  });

  // GSAP animations for section entry only (not for step transitions)
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for main section elements only
    gsap.set('[data-gsap="contact-subheading"]', { opacity: 0, y: 20 });
    gsap.set('[data-gsap="contact-heading"]', { opacity: 0, y: 25 });
    gsap.set('[data-gsap="contact-description"]', { opacity: 0, y: 30 });
    gsap.set('[data-gsap="contact-container"]', { opacity: 0, y: 40, scale: 0.95 });

    // Create timeline for contact section animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="contact-subheading"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('[data-gsap="contact-subheading"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
      .to(
        '[data-gsap="contact-heading"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3',
      )
      .to(
        '[data-gsap="contact-description"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3',
      )
      .to(
        '[data-gsap="contact-container"]',
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.2',
      );
  });

  // Track component mount
  useEffect(() => {
    // Component mounted
  }, []);

  // Typing animation effect
  useEffect(() => {
    let question = steps[currentStep].question;

    // Only use name in second step if it's available
    if (currentStep === 1 && formData.name) {
      question = question.replace("{name}", formData.name);
    }

    setIsTyping(true);
    setDisplayedQuestion("");

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < question.length) {
        setDisplayedQuestion(question.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
        // Focus input after typing completes - ONLY if contact form is visible
        if (currentStep < 7 && inputRefs.current[currentStep]) {
          setTimeout(() => {
            const element = inputRefs.current[currentStep];
            if (element) {
              // Check if contact form is visible in viewport before focusing
              const contactElement = document.getElementById('contact-me');
              if (contactElement) {
                const rect = contactElement.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                if (isVisible) {
                  element.focus();
                }
              }
            }
          }, 100);
        }
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [currentStep]); // eslint-disable-line react-hooks/exhaustive-deps

  // Update displayed question when name changes (only for step 1)
  useEffect(() => {
    if (currentStep === 1 && !isTyping) {
      const question = steps[currentStep].question.replace("{name}", formData.name);
      setDisplayedQuestion(question);
    }
  }, [formData.name, currentStep, isTyping]);

  const validateCurrentStep = (): boolean => {
    const newErrors: ValidationErrors = {};

    switch (currentStep) {
      case 0: // name
        if (!formData.name.trim()) {
          newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
          newErrors.name = "Please enter a valid name";
        }
        break;
      case 1: // email
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email";
        }
        break;
      case 2: // inquiryType
        if (!formData.inquiryType) {
          newErrors.inquiryType = "Please select an inquiry type";
        }
        break;
      case 3: // company (optional, no validation)
        break;
      case 4: // phone (optional, but validate format if provided)
        if (formData.phone && !/^[+]?[\d\s\-\(\)]+$/.test(formData.phone)) {
          newErrors.phone = "Please enter a valid phone number";
        }
        break;
      case 5: // budget (optional, no validation)
        break;
      case 6: // message
        if (!formData.message.trim()) {
          newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
          newErrors.message = "Please provide more details (at least 10 characters)";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        setErrors({});
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const handleSubmit = async () => {
    if (validateCurrentStep()) {
      setIsSubmitting(true);

      try {
        await submitToWeb3Forms({
          name: formData.name,
          email: formData.email,
          inquiryType: formData.inquiryType,
          company: formData.company || undefined,
          phone: formData.phone || undefined,
          budget: formData.budget || undefined,
          message: formData.message,
          botcheck: false,
        });
      } catch (error) {
        setSubmitMessage("Failed to send message. Please try again.");
        setSubmitError(true);
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error for this field when user starts typing
    if (errors[field as keyof ValidationErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentStep < 7 && e.target instanceof HTMLInputElement) {
      e.preventDefault();
      handleNext();
    }
  };

  if (isComplete) {
    return (
      <section id="contact-me" className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-neutral-300 md:px-8">
          <div className="mt-20">
            <div className="max-w-lg mx-auto space-y-3 sm:text-center">
              <h3 data-gsap="contact-subheading" className="text-indigo-600 font-semibold">
                Let's Work Together
              </h3>
              <p data-gsap="contact-heading" className="text-neutral-100 text-3xl font-semibold sm:text-4xl">
                Interested in hiring me?
              </p>
              <p data-gsap="contact-description">
                I'm actively seeking remote opportunities in WordPress, PHP, Laravel, and full-stack development. Whether you need custom solutions, e-commerce development, or enterprise applications, let's discuss how I can help your team.
              </p>
            </div>
            <div className="mt-12 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                data-gsap="contact-container"
                className="w-full max-w-2xl p-8 md:p-12 lg:p-16 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 rounded-2xl border border-purple-500/30 text-center"
              >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className={`w-16 h-16 ${submitError ? "bg-red-500" : "bg-green-500"} rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          <Check className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">
          {submitError ? "Oops!" : `Thank you, ${formData.name}!`}
        </h3>
        <p className="text-neutral-300 mb-6">
          {submitError
            ? submitMessage || "Something went wrong. Please try again later."
            : submitMessage || `I've received your message and will get back to you soon at ${formData.email}.`
          }
        </p>
        <Button
          onClick={() => {
            setCurrentStep(0);
            setFormData({ name: "", email: "", inquiryType: "", company: "", phone: "", budget: "", message: "" });
            setIsComplete(false);
            setSubmitMessage("");
            setSubmitError(false);
          }}
          variant="outline"
          className="border-purple-500 text-purple-300 hover:bg-purple-500/20"
        >
          Send Another Message
        </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-me" className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-neutral-300 md:px-8">
        <div className="mt-20">
          <div className="max-w-lg mx-auto space-y-3 sm:text-center">
            <h3 data-gsap="contact-subheading" className="text-indigo-600 font-semibold">
              Let's Work Together
            </h3>
            <p data-gsap="contact-heading" className="text-neutral-100 text-3xl font-semibold sm:text-4xl">
              Interested in hiring me?
            </p>
            <p data-gsap="contact-description">
              I'm actively seeking remote opportunities in WordPress, PHP, Laravel, and full-stack development. Whether you need custom solutions, e-commerce development, or enterprise applications, let's discuss how I can help your team.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <div data-gsap="contact-container" className="w-full max-w-2xl p-8 md:p-12 lg:p-16 bg-gradient-to-br from-purple-900/90 via-neutral-900/90 to-blue-900/90 rounded-2xl border border-purple-500/30">
      {/* Progress Indicator */}
      <div className="flex justify-center space-x-3 mb-10 md:mb-12">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentStep
                ? "bg-purple-400 w-10 md:w-12"
                : index < currentStep
                ? "bg-green-400"
                : "bg-neutral-600"
            }`}
          />
        ))}
      </div>

      {/* Chat Container */}
      <div className="space-y-8 md:space-y-10">
        {/* Question Bubble */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`question-${currentStep}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-start space-x-3"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex-shrink-0 flex items-center justify-center">
              <span className="text-white text-sm md:text-base font-bold">K</span>
            </div>
            <div className="flex-1">
              <div className="bg-neutral-800/80 rounded-2xl rounded-tl-none p-4 md:p-6 backdrop-blur-sm">
                <p className="text-neutral-100 text-base md:text-lg whitespace-pre-wrap">
                  {displayedQuestion}
                  {isTyping && <span className="inline-block w-2 h-4 md:h-5 bg-purple-400 animate-pulse ml-1" />}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* User Response */}
        {currentStep < 7 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`response-${currentStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              className="flex items-start space-x-3 md:space-x-4 justify-end"
            >
              <div className="flex-1 max-w-[85%] md:max-w-[90%]">
                {currentStep === 0 && (
                  <input
                    ref={(el) => {
                    inputRefs.current[0] = el;
                  }}
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Your name..."
                    className={`w-full px-4 py-3 md:px-6 md:py-4 bg-neutral-800/80 rounded-2xl rounded-tr-none text-white text-base md:text-lg placeholder-neutral-400 border-2 outline-none transition-all ${
                      errors.name
                        ? "border-red-400/50"
                        : "border-purple-500/30 focus:border-purple-400/60"
                    }`}
                    disabled={isTyping}
                  />
                )}
                {currentStep === 1 && (
                  <input
                    ref={(el) => {
                    inputRefs.current[1] = el;
                  }}
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 md:px-6 md:py-4 bg-neutral-800/80 rounded-2xl rounded-tr-none text-white text-base md:text-lg placeholder-neutral-400 border-2 outline-none transition-all ${
                      errors.email
                        ? "border-red-400/50"
                        : "border-purple-500/30 focus:border-purple-400/60"
                    }`}
                    disabled={isTyping}
                  />
                )}
                {currentStep === 2 && (
                  <select
                    ref={(el) => {
                    inputRefs.current[2] = el;
                  }}
                    value={formData.inquiryType}
                    onChange={(e) => handleInputChange("inquiryType", e.target.value)}
                    className={`w-full px-4 py-3 md:px-6 md:py-4 bg-neutral-800/80 rounded-2xl rounded-tr-none text-white text-base md:text-lg border-2 outline-none transition-all ${
                      errors.inquiryType
                        ? "border-red-400/50"
                        : "border-purple-500/30 focus:border-purple-400/60"
                    }`}
                    disabled={isTyping}
                  >
                    <option value="" className="text-neutral-800">Select inquiry type...</option>
                    {inquiryOptions.map((option) => (
                      <option key={option.value} value={option.value} className="text-neutral-800">
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
                {currentStep === 3 && (
                  <input
                    ref={(el) => {
                    inputRefs.current[3] = el;
                  }}
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Company/Organization (optional)"
                    className={`w-full px-4 py-3 md:px-6 md:py-4 bg-neutral-800/80 rounded-2xl rounded-tr-none text-white text-base md:text-lg placeholder-neutral-400 border-2 outline-none transition-all ${
                      errors.company
                        ? "border-red-400/50"
                        : "border-purple-500/30 focus:border-purple-400/60"
                    }`}
                    disabled={isTyping}
                  />
                )}
                {currentStep === 4 && (
                  <input
                    ref={(el) => {
                    inputRefs.current[4] = el;
                  }}
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Phone Number (optional)"
                    className={`w-full px-4 py-3 md:px-6 md:py-4 bg-neutral-800/80 rounded-2xl rounded-tr-none text-white text-base md:text-lg placeholder-neutral-400 border-2 outline-none transition-all ${
                      errors.phone
                        ? "border-red-400/50"
                        : "border-purple-500/30 focus:border-purple-400/60"
                    }`}
                    disabled={isTyping}
                  />
                )}
                {currentStep === 5 && (
                  <select
                    ref={(el) => {
                    inputRefs.current[5] = el;
                  }}
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    className={`w-full px-4 py-3 md:px-6 md:py-4 bg-neutral-800/80 rounded-2xl rounded-tr-none text-white text-base md:text-lg border-2 outline-none transition-all ${
                      errors.budget
                        ? "border-red-400/50"
                        : "border-purple-500/30 focus:border-purple-400/60"
                    }`}
                    disabled={isTyping}
                  >
                    <option value="" className="text-neutral-800">Select budget (optional)</option>
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value} className="text-neutral-800">
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
                {currentStep === 6 && (
                  <textarea
                    ref={(el) => {
                    inputRefs.current[6] = el;
                  }}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell me about your project or opportunity: What are you looking to build? Are you hiring for a full-time role or contract work? Include details about the tech stack, project scope, timeline, and whether it's a remote position. The more information you provide, the better I can understand how I can help."
                    rows={6}
                    className={`w-full px-4 py-3 md:px-6 md:py-4 bg-neutral-800/80 rounded-2xl rounded-tr-none text-white text-base md:text-lg placeholder-neutral-400 border-2 outline-none transition-all resize-none ${
                      errors.message
                        ? "border-red-400/50"
                        : "border-purple-500/30 focus:border-purple-400/60"
                    }`}
                    disabled={isTyping}
                  />
                )}
                {errors[currentStep === 0 ? "name" :
                   currentStep === 1 ? "email" :
                   currentStep === 2 ? "inquiryType" :
                   currentStep === 3 ? "company" :
                   currentStep === 4 ? "phone" :
                   currentStep === 5 ? "budget" : "message"] && (
                  <p className="text-red-400 text-sm md:text-base mt-2 ml-2">
                    {errors[currentStep === 0 ? "name" :
                      currentStep === 1 ? "email" :
                      currentStep === 2 ? "inquiryType" :
                      currentStep === 3 ? "company" :
                      currentStep === 4 ? "phone" :
                      currentStep === 5 ? "budget" : "message"]}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Review Step */}
        {currentStep === 7 && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              className="space-y-3"
            >
              <div className="bg-neutral-800/60 rounded-xl p-4 md:p-5 border border-purple-500/20 overflow-hidden">
                <p className="text-xs md:text-sm text-purple-400 mb-1">Name</p>
                <p className="text-white text-base md:text-lg break-words">{formData.name}</p>
              </div>
              <div className="bg-neutral-800/60 rounded-xl p-4 md:p-5 border border-purple-500/20 overflow-hidden">
                <p className="text-xs md:text-sm text-purple-400 mb-1">Email</p>
                <p className="text-white text-base md:text-lg break-words">{formData.email}</p>
              </div>
              {formData.inquiryType && (
                <div className="bg-neutral-800/60 rounded-xl p-4 md:p-5 border border-purple-500/20 overflow-hidden">
                  <p className="text-xs md:text-sm text-purple-400 mb-1">Inquiry Type</p>
                  <p className="text-white text-base md:text-lg break-words">
                    {inquiryOptions.find(opt => opt.value === formData.inquiryType)?.label || formData.inquiryType}
                  </p>
                </div>
              )}
              {formData.company && (
                <div className="bg-neutral-800/60 rounded-xl p-4 md:p-5 border border-purple-500/20 overflow-hidden">
                  <p className="text-xs md:text-sm text-purple-400 mb-1">Company</p>
                  <p className="text-white text-base md:text-lg break-words">{formData.company}</p>
                </div>
              )}
              {formData.phone && (
                <div className="bg-neutral-800/60 rounded-xl p-4 md:p-5 border border-purple-500/20 overflow-hidden">
                  <p className="text-xs md:text-sm text-purple-400 mb-1">Phone</p>
                  <p className="text-white text-base md:text-lg break-words">{formData.phone}</p>
                </div>
              )}
              {formData.budget && (
                <div className="bg-neutral-800/60 rounded-xl p-4 md:p-5 border border-purple-500/20 overflow-hidden">
                  <p className="text-xs md:text-sm text-purple-400 mb-1">Budget</p>
                  <p className="text-white text-base md:text-lg break-words">
                    {budgetOptions.find(opt => opt.value === formData.budget)?.label || formData.budget}
                  </p>
                </div>
              )}
              <div className="bg-neutral-800/60 rounded-xl p-4 md:p-5 border border-purple-500/20 overflow-hidden">
                <p className="text-xs md:text-sm text-purple-400 mb-1">Message</p>
                <p className="text-white text-base md:text-lg whitespace-pre-wrap break-words">{formData.message}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Navigation Buttons */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`navigation-${currentStep}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
            className="flex justify-between items-center pt-6 md:pt-8"
          >
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0 || isTyping || isSubmitting}
              variant="ghost"
              size="default"
              className="text-neutral-400 hover:text-white hover:bg-neutral-800/50 text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Back
            </Button>

            {currentStep < 7 && (
              <Button
                onClick={handleNext}
                disabled={
                  isTyping ||
                  isSubmitting ||
                  (currentStep === 0 && !formData.name.trim()) ||
                  (currentStep === 1 && !formData.email.trim()) ||
                  (currentStep === 2 && !formData.inquiryType) ||
                  (currentStep === 6 && !formData.message.trim())
                }
                size="default"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
              >
                Next
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
            )}

            {currentStep === 7 && (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                size="default"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </>
                )}
              </Button>
            )}
          </motion.div>
        </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}