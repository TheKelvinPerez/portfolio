import { FaqAccordion } from "@/components/ui/faq-chat-accordion";
import SectionHeading from "@/components/SectionHeading";

const defaultData = [
  {
    answer: "I'm an AI-powered full-stack engineer with 8+ years of experience. I specialize in TypeScript, Python, React, Next.js, and AI integration. I focus on building intelligent applications using LLMs, RAG systems, and AI agents, combined with modern UI/UX design.",
    icon: "🤖",
    iconPosition: "left" as const,
    id: 1,
    question: "What's your AI and technical expertise?",
  },
  {
    answer: "Absolutely! I help startups and companies integrate AI into their products, build TypeScript/Python applications, design AI-powered user experiences, and architect scalable AI systems. I also mentor on startup strategy and building in public.",
    icon: "💡",
    iconPosition: "right" as const,
    id: 2,
    question: "Do you offer AI consulting and startup guidance?",
  },
  {
    answer: "My core stack is TypeScript, Python, React, Next.js 14, and AI APIs (OpenAI, Anthropic, etc.). I work with RAG systems, vector databases, AI agents, modern deployment platforms, and design tools like Figma for AI-powered workflows.",
    id: 3,
    question: "What's your current AI and development stack?",
  },
  {
    answer: "I've built AI-powered applications, intelligent chatbots, RAG systems, Chrome extensions, NFT projects ($28M+ generated), and modern SaaS products. I live stream building AI startups and share my journey building in public.",
    icon: "🚀",
    iconPosition: "left" as const,
    id: 4,
    question: "What AI projects and startups have you built?",
  },
  {
    answer: "Yes! I'm actively looking for opportunities to build AI-powered products, join AI-focused startups, or help companies integrate intelligent features. I'm especially excited about projects involving LLMs, automation, and human-AI collaboration.",
    icon: "🤝",
    iconPosition: "right" as const,
    id: 5,
    question: "Are you available for AI and startup projects?",
  },
  {
    answer: "Definitely! I've launched multiple successful startups including a $20K MRR Chrome extension and NFT projects generating $28M+. I understand rapid prototyping, MVP development, AI-first product strategy, and scaling with modern tech stacks.",
    id: 6,
    question: "Do you have proven startup and entrepreneurship experience?",
  },
  {
    answer: "I live stream weekly on YouTube building AI startups from scratch, teach TypeScript/Python development, AI integration techniques, and startup methodology. I believe in building in public and sharing the entire journey.",
    icon: "📺",
    iconPosition: "left" as const,
    id: 7,
    question: "What do you teach about AI and startups?",
  },
  {
    answer: "I follow AI-first development principles with clean TypeScript/Python code, proper type safety, intelligent testing with AI assistance, and modern deployment practices. I focus on building scalable AI systems that enhance user experience.",
    id: 8,
    question: "What's your approach to AI-powered development?",
  },
  {
    answer: "I've worked extensively with OpenAI GPT models, Anthropic Claude, LangChain, vector databases (Pinecone, Weaviate), and building custom AI agents. I specialize in RAG systems, prompt engineering, and integrating AI into production applications.",
    icon: "🧠",
    iconPosition: "right" as const,
    id: 9,
    question: "What specific AI technologies do you work with?",
  },
  {
    answer: "I help startups identify AI opportunities, prototype AI-powered features, build MVPs with intelligent capabilities, and scale AI systems. I focus on practical AI implementation that drives real business value and user engagement.",
    icon: "⚡",
    iconPosition: "left" as const,
    id: 10,
    question: "How do you help startups leverage AI?",
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <SectionHeading
        heading="FAQs"
        subheading="Common questions about my AI expertise, startup experience, and approach to building intelligent applications"
      />
      <FaqAccordion
        data={defaultData}
        className="max-w-[700px]"
        questionClassName="bg-gray-800/50 hover:bg-gray-700/60 border border-gray-700/30"
        answerClassName="bg-gray-700/70 text-gray-100 border border-gray-600/40"
      />
    </div>
  );
}

