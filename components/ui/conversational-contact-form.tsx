"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import useWeb3Forms from "@web3forms/react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  Send,
} from "lucide-react";
import KelvinPerezPFP from "@/public/images/jpeg/TKP-PFP.jpeg";

interface FormData {
  name: string;
  email: string;
  inquiryType: string;
  company: string;
  message: string;
}

type FieldKey = keyof FormData;

interface ChatStep {
  key: FieldKey;
  label: string;
  prompt: string;
  placeholder: string;
  input: "text" | "email" | "textarea" | "select";
  optional?: boolean;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  inquiryType: "",
  company: "",
  message: "",
};

const inquiryOptions = [
  { value: "full-time-laravel", label: "Full time Laravel role" },
  { value: "contract-laravel", label: "Contract Laravel work" },
  { value: "php-backend", label: "PHP backend work" },
  { value: "react-typescript", label: "React and TypeScript UI" },
  { value: "wordpress-shopify", label: "WordPress or Shopify support" },
  { value: "other", label: "Something else" },
];

const chatSteps: ChatStep[] = [
  {
    key: "name",
    label: "Name",
    prompt: "What name should I use in my reply?",
    placeholder: "First name",
    input: "text",
  },
  {
    key: "email",
    label: "Email",
    prompt: "Where should I send the reply?",
    placeholder: "you@company.com",
    input: "email",
  },
  {
    key: "inquiryType",
    label: "Opportunity",
    prompt: "What kind of opportunity are you reaching out about?",
    placeholder: "Choose the closest option",
    input: "select",
  },
  {
    key: "company",
    label: "Company",
    prompt: "Which company or team is this for?",
    placeholder: "Company or team name",
    input: "text",
    optional: true,
  },
  {
    key: "message",
    label: "Context",
    prompt: "Add the role, team, stack, timeline, or project context that would help me reply well.",
    placeholder: "Paste a role link or add notes about the team, stack, timeline, and next step.",
    input: "textarea",
  },
];

const proofSteps = [
  { number: "01", label: "Role details" },
  { number: "02", label: "Stack fit" },
  { number: "03", label: "Next step" },
];

const meta = [
  {
    label: "Best fit",
    text: "Full stack Laravel teams",
  },
  {
    label: "Response time",
    text: "Same or next business day",
  },
];

function getInquiryLabel(value: string) {
  return (
    inquiryOptions.find((option) => option.value === value)?.label || value
  );
}

function getDisplayValue(step: ChatStep, formData: FormData) {
  const value = formData[step.key];

  if (!value && step.optional) {
    return "Skip for now";
  }

  if (step.key === "inquiryType") {
    return getInquiryLabel(value);
  }

  return value;
}

function getTypingDelay(prompt: string) {
  return Math.min(1150, Math.max(650, prompt.length * 11));
}

export default function ConversationalContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-18% 0px -18% 0px",
  });
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [fieldError, setFieldError] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
  const currentStep = chatSteps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / chatSteps.length) * 100;
  const completedSteps = useMemo(
    () => chatSteps.slice(0, currentStepIndex),
    [currentStepIndex],
  );

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, []);

  const clearTypingTimer = () => {
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
      typingTimerRef.current = null;
    }
  };

  const { submit: submitToWeb3Forms } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Kelvin Perez Portfolio",
      subject: "New portfolio contact",
    },
    onSuccess: (msg) => {
      setSubmitMessage(msg || "Message sent. I will get back to you soon.");
      setSubmitError(false);
      setHasSubmitted(true);
      setIsSubmitting(false);
      setCurrentStepIndex(chatSteps.length - 1);
      setFieldError("");
    },
    onError: (msg) => {
      setSubmitMessage(msg || "Something went wrong. Please try again.");
      setSubmitError(true);
      setHasSubmitted(true);
      setIsSubmitting(false);
    },
  });

  const validateStep = (step: ChatStep) => {
    const value = formData[step.key].trim();

    if (step.optional && !value) {
      setFieldError("");
      return true;
    }

    if (!value) {
      setFieldError(`${step.label} is required`);
      return false;
    }

    if (step.key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setFieldError("Enter a valid email");
      return false;
    }

    if (step.key === "message" && value.length < 20) {
      setFieldError("Add a little more context");
      return false;
    }

    setFieldError("");
    return true;
  };

  const validateForm = () => chatSteps.every((step) => validateStep(step));

  const updateField = (field: FieldKey, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (fieldError) {
      setFieldError("");
    }
  };

  const submitForm = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setHasSubmitted(false);

    try {
      await submitToWeb3Forms({
        name: formData.name,
        email: formData.email,
        inquiryType: getInquiryLabel(formData.inquiryType),
        company: formData.company || undefined,
        message: formData.message,
        botcheck: false,
      });
    } catch {
      setSubmitMessage("Failed to send message. Please try again.");
      setSubmitError(true);
      setHasSubmitted(true);
      setIsSubmitting(false);
    }
  };

  const handleAdvance = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isTyping) {
      return;
    }

    if (!validateStep(currentStep)) {
      return;
    }

    if (currentStepIndex < chatSteps.length - 1) {
      const nextStep = chatSteps[currentStepIndex + 1];

      setIsTyping(true);
      clearTypingTimer();

      typingTimerRef.current = setTimeout(() => {
        setCurrentStepIndex((current) => current + 1);
        setIsTyping(false);
        typingTimerRef.current = null;
      }, getTypingDelay(nextStep.prompt));

      return;
    }

    await submitForm();
  };

  const handleBack = () => {
    clearTypingTimer();
    setIsTyping(false);
    setFieldError("");
    setCurrentStepIndex((current) => Math.max(0, current - 1));
  };

  const resetConversation = () => {
    clearTypingTimer();
    setFormData(initialFormData);
    setCurrentStepIndex(0);
    setFieldError("");
    setIsTyping(false);
    setHasSubmitted(false);
    setSubmitMessage("");
    setSubmitError(false);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 34, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const renderCurrentInput = () => {
    const baseClass =
      "min-h-12 w-full rounded-xl border border-purple-300/25 bg-purple-950/45 px-4 text-sm text-white outline-none transition placeholder:text-purple-100/45 focus:border-purple-200 focus:bg-purple-950/65 disabled:cursor-not-allowed disabled:opacity-60";

    if (currentStep.input === "textarea") {
      return (
        <textarea
          value={formData[currentStep.key]}
          disabled={isTyping || isSubmitting}
          onChange={(event) =>
            updateField(currentStep.key, event.target.value)
          }
          placeholder={currentStep.placeholder}
          rows={4}
          className={`${baseClass} min-h-28 resize-none py-3 leading-6`}
        />
      );
    }

    if (currentStep.input === "select") {
      return (
        <div className="grid gap-2 sm:grid-cols-2">
          {inquiryOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              disabled={isTyping || isSubmitting}
              onClick={() => updateField(currentStep.key, option.value)}
              className={`min-h-12 rounded-xl border px-4 text-left text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
                formData[currentStep.key] === option.value
                  ? "border-purple-100 bg-white text-purple-950"
                  : "border-purple-300/25 bg-purple-950/45 text-purple-100 hover:border-purple-200/60 hover:bg-purple-950/65 disabled:hover:border-purple-300/25 disabled:hover:bg-purple-950/45"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      );
    }

    return (
      <input
        type={currentStep.input}
        autoComplete={currentStep.key === "email" ? "email" : "name"}
        disabled={isTyping || isSubmitting}
        value={formData[currentStep.key]}
        onChange={(event) => updateField(currentStep.key, event.target.value)}
        placeholder={currentStep.placeholder}
        className={baseClass}
      />
    );
  };

  return (
    <motion.section
      id="contact-me"
      ref={sectionRef}
      className="mx-auto w-full max-w-7xl px-4 py-24 text-white"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-purple-300/20 bg-[linear-gradient(135deg,rgba(28,12,62,0.96),rgba(70,24,125,0.78),rgba(31,19,70,0.96))] p-5 shadow-[0_34px_120px_rgba(88,28,135,0.32)] backdrop-blur-2xl md:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
          <motion.div
            className="flex flex-col justify-between gap-10 p-1 md:p-4"
            variants={itemVariants}
          >
            <div>
              <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-purple-200">
                <span className="h-px w-8 bg-purple-200/80" />
                Contact
              </p>
              <h2 className="max-w-xl text-4xl font-semibold leading-none text-white md:text-6xl">
                Send the role or project details.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-purple-100/80 md:text-lg">
                If you are reaching out about a Laravel role, contract project,
                or technical conversation, send the details here. I will reply
                with the context that matters most.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {proofSteps.map((item) => (
                <div
                  key={item.number}
                  className="flex min-h-16 items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] px-4 text-sm text-white/80"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-purple-300/20 text-xs font-semibold text-purple-100">
                    {item.number}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {meta.map((item) => (
                <div key={item.label}>
                  <p className="mb-2 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">
                    <span className="h-px w-7 bg-purple-200/70" />
                    {item.label}
                  </p>
                  <p className="text-xl font-semibold text-white">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex min-h-[620px] flex-col rounded-[1.5rem] border border-white/20 bg-white/[0.085] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-5 md:px-7">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={KelvinPerezPFP}
                    alt="Kelvin Perez"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-purple-900 bg-lime-300" />
                </div>
                <div>
                  <p className="text-base font-semibold text-white">Kelvin</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-purple-100/60">
                    Portfolio contact
                  </p>
                </div>
              </div>

              <div className="hidden min-w-44 items-center gap-1.5 sm:flex">
                {chatSteps.map((step, index) => (
                  <span
                    key={step.key}
                    className={`h-1.5 flex-1 rounded-full ${
                      index <= currentStepIndex ? "bg-purple-200" : "bg-white/15"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-hidden px-5 py-6 md:px-7">
              <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-white/10 sm:hidden">
                <div
                  className="h-full rounded-full bg-purple-200 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex h-full flex-col justify-end gap-4">
                {completedSteps.map((step) => (
                  <div key={step.key} className="grid gap-3">
                    <ChatBubble>{step.prompt}</ChatBubble>
                    <ChatBubble from="user">
                      {getDisplayValue(step, formData)}
                    </ChatBubble>
                  </div>
                ))}

                {!hasSubmitted && !isTyping && (
                  <ChatBubble>{currentStep.prompt}</ChatBubble>
                )}

                {!hasSubmitted && isTyping && (
                  <div className="grid gap-3">
                    <ChatBubble>{currentStep.prompt}</ChatBubble>
                    <ChatBubble from="user">
                      {getDisplayValue(currentStep, formData)}
                    </ChatBubble>
                    <TypingBubble />
                  </div>
                )}

                {hasSubmitted && (
                  <div
                    className={`flex items-start gap-3 rounded-2xl border p-4 text-sm ${
                      submitError
                        ? "border-red-300/40 bg-red-500/10 text-red-100"
                        : "border-emerald-300/40 bg-emerald-500/10 text-emerald-100"
                    }`}
                  >
                    {submitError ? (
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    ) : (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    )}
                    <p>{submitMessage}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-white/10 px-5 py-5 md:px-7">
              {hasSubmitted && !submitError ? (
                <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <button
                    type="button"
                    onClick={resetConversation}
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-purple-200/25 bg-white/[0.08] px-5 text-sm font-semibold text-purple-100 transition hover:bg-white/[0.12]"
                  >
                    Send another message
                  </button>
                  <Link
                    href="/projects/light-code-labs-dashboard"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-purple-950 transition hover:bg-purple-100"
                  >
                    View dashboard
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleAdvance} className="grid gap-3">
                  {renderCurrentInput()}

                  {fieldError && (
                    <p className="text-sm font-medium text-red-200">{fieldError}</p>
                  )}

                  <div className="grid gap-3 sm:grid-cols-[auto_1fr]">
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={currentStepIndex === 0 || isSubmitting || isTyping}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-purple-200/25 bg-white/[0.08] px-4 text-sm font-semibold text-purple-100 transition hover:bg-white/[0.12] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || isTyping}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-purple-950 shadow-[0_20px_52px_rgba(168,85,247,0.25)] transition hover:bg-purple-100 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting
                        ? "Sending"
                        : isTyping
                          ? "One moment"
                        : currentStepIndex === chatSteps.length - 1
                          ? "Send message"
                          : currentStep.optional && !formData[currentStep.key]
                            ? "Skip"
                            : "Continue"}
                      {isSubmitting || isTyping ? (
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-purple-950/25 border-t-purple-950" />
                      ) : currentStepIndex === chatSteps.length - 1 ? (
                        <Send className="h-4 w-4" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-5 flex flex-col gap-2 text-xs text-purple-100/60 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" />
                  Private contact form
                </span>
                <span>Progress {Math.round(progress)}%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function ChatBubble({
  children,
  from = "assistant",
}: {
  children: string;
  from?: "assistant" | "user";
}) {
  const isUser = from === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 md:max-w-[76%] ${
          isUser
            ? "rounded-br-md bg-white text-purple-950"
            : "rounded-bl-md bg-white/[0.11] text-purple-50"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div
      className="flex justify-start"
      aria-live="polite"
      aria-label="Kelvin is typing"
    >
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white/[0.11] px-4 py-4 text-purple-50">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className="h-2 w-2 animate-bounce rounded-full bg-purple-100/80"
            style={{ animationDelay: `${index * 140}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
