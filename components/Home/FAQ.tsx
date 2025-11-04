import { FaqAccordion } from "@/components/ui/faq-chat-accordion";
import SectionHeading from "@/components/SectionHeading";

const defaultData = [
  {
    answer: "I'm a full-stack developer with 8+ years of experience specializing in WordPress, PHP, Laravel, and modern web development. My core stack includes PHP, Laravel, WordPress, MySQL, JavaScript/TypeScript, React, and Next.js. I work extensively with WooCommerce, custom themes/plugins, REST APIs, and can integrate AI capabilities when needed.",
    icon: "🚀",
    iconPosition: "left" as const,
    id: 1,
    question: "What's your technical expertise and stack?",
  },
  {
    answer: "I've built custom WordPress themes and plugins, enterprise Laravel applications, WooCommerce e-commerce solutions, membership platforms, headless CMS implementations, and Chrome extensions. Notable achievements include a $20K MRR Chrome extension and NFT projects generating $28M+ in sales.",
    icon: "🏗️",
    iconPosition: "right" as const,
    id: 2,
    question: "What types of projects have you built?",
  },
  {
    answer: "Yes! I'm actively seeking full-time or contract opportunities in WordPress development, Laravel applications, PHP projects, and full-stack web development. I'm especially interested in roles that involve building scalable solutions and working with modern web technologies.",
    icon: "🤝",
    iconPosition: "left" as const,
    id: 3,
    question: "Are you available for hire?",
  },
  {
    answer: "I'm currently seeking remote opportunities only. I have extensive experience collaborating with distributed teams and am adaptable to different time zones and work schedules. I prioritize clear communication and meeting deadlines consistently in remote work environments.",
    icon: "🌍",
    iconPosition: "right" as const,
    id: 4,
    question: "What's your work preference and availability?",
  },
  {
    answer: "I prioritize writing clean, maintainable code following industry best practices and coding standards. I emphasize security, performance optimization, comprehensive documentation, and thorough testing. My code is designed to be easily scalable and maintainable by other developers.",
    icon: "📚",
    iconPosition: "left" as const,
    id: 5,
    question: "How do you ensure code quality?",
  },
  {
    answer: "I have proven entrepreneurial experience launching successful products including a $20K MRR Chrome extension and NFT projects generating $28M+. I understand product development from ideation to launch, rapid prototyping, MVP creation, and building solutions that solve real business problems.",
    icon: "💡",
    iconPosition: "right" as const,
    id: 6,
    question: "Do you have startup or product experience?",
  },
  {
    answer: "I excel at problem-solving, self-directed learning, and adapting to new technologies quickly. I'm comfortable working independently or as part of a team, and I bring strong communication skills to technical discussions. I'm proactive about identifying issues and proposing solutions.",
    icon: "⚡",
    iconPosition: "left" as const,
    id: 7,
    question: "What soft skills do you bring to a team?",
  },
  {
    answer: "I have extensive experience with Git version control, CI/CD pipelines, Docker, modern deployment platforms (Vercel, Netlify), database management, and API integration. I'm comfortable with Agile methodologies and familiar with project management tools like Jira and Linear.",
    icon: "⚙️",
    iconPosition: "right" as const,
    id: 8,
    question: "What's your experience with development workflows?",
  },
  {
    answer: "I stay current through continuous learning, exploring new technologies, and applying them to real projects. I'm experienced with modern frameworks, AI integration (OpenAI, Anthropic APIs), and I'm always eager to learn new tools and technologies that improve development efficiency.",
    icon: "📈",
    iconPosition: "left" as const,
    id: 9,
    question: "How do you stay current with technology?",
  },
  {
    answer: "I'm motivated by building solutions that solve real problems and create value for users. I enjoy the challenge of optimizing performance, architecting scalable systems, and seeing projects through from concept to completion. I take pride in writing quality code and delivering results.",
    icon: "🎯",
    iconPosition: "right" as const,
    id: 10,
    question: "What motivates you as a developer?",
  },
];

export default function FAQ() {
  return (
    <div id="faq" className="flex flex-col justify-center items-center gap-4">
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

