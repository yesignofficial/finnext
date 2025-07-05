import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Program data structure
interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  curriculum: string[];
  targetAudience: string[];
  outcomes: string[];
  tools?: string[];
  careerBenefits?: string[];
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  category: string;
  icon: string;
}

// Default program to ensure we always have a valid program
const defaultProgram: Program = {
  id: "hr-associate",
  title: "HR Associate Programme",
  subtitle: "With Ultimate HR Software",
  description:
    "Unlock the power of HR with our comprehensive HR Associate Programme, featuring the industry-leading Ultimate HR Software. This programme is designed to equip you with the skills and knowledge needed to excel in HR roles—from recruitment and talent management to employee engagement and benefits administration.",
  image: "/images/home/program/hr.jpg",
  icon: "💻",
  highlights: [
    "In-depth training on Ultimate HR Software",
    "Practical experience in HR processes and best practices",
    "Expert instruction from seasoned HR professionals",
    "Real-world case studies and applications",
    "Focus on strategic HR management and business partnering",
  ],
  curriculum: [
    "HR fundamentals: recruitment, talent management, employee engagement, and benefits",
    "Ultimate HR Software functionality and implementation",
    "HR metrics and analytics",
    "Compliance with employment laws and regulations",
    "Strategic HR management and business partnering",
  ],
  targetAudience: [
    "Anyone interested in pursuing an HR career",
    "Current HR students looking for practical experience",
  ],
  outcomes: [
    "Effectively manage HR functions",
    "Drive measurable business outcomes",
    "Support organizational success",
  ],
  duration: "6 Months",
  level: "Intermediate",
  category: "Human Resources",
};

const programs: Program[] = [
  defaultProgram,
  {
    id: "healthcare-accounting",
    title: "Healthcare Accounting Associate",
    subtitle: "With Ultimate Hospital Software",
    description:
      "Master the art of healthcare accounting with our comprehensive course, powered by the industry-leading Ultimate Hospital Software. Gain hands-on experience in managing hospital finances, billing, and revenue cycle management. This course is ideal for accounting professionals, healthcare administrators, and financial managers seeking to excel in the healthcare sector.",
    image: "/images/home/program/health.jpg",
    icon: "🏥",
    highlights: [
      "In-depth training on Ultimate Hospital Software",
      "Practical experience in healthcare accounting and financial management",
      "Instruction from industry professionals",
      "Real-world case studies and applications",
      "Focus on revenue cycle management, billing, and compliance",
    ],
    curriculum: [
      "Healthcare accounting principles and practices",
      "Ultimate Hospital Software functionality and implementation",
      "Financial statement analysis and reporting",
      "Revenue cycle management and billing processes",
      "Compliance with healthcare regulations and standards",
    ],
    targetAudience: [
      "Accounting professionals in the healthcare sector",
      "Healthcare administrators and financial managers",
      "Hospital and healthcare organization staff",
      "Healthcare finance and accounting students",
    ],
    outcomes: [
      "Manage healthcare finances efficiently",
      "Optimize revenue cycle performance",
      "Ensure compliance with regulatory standards",
    ],
    duration: "6 Months",
    level: "Intermediate",
    category: "Healthcare Accounting",
  },
  {
    id: "business-analyst",
    title: "Business Analyst Training Programme",
    subtitle: "Data-Driven Insights with Power BI, Tableau, and Excel",
    description:
      "Unlock the power of data analysis and visualization with our comprehensive Business Analyst Training Programme. This course equips you with the skills to leverage Power BI, Tableau, and Excel to drive business growth and informed decision-making.",
    image: "/images/home/program/business.jpg",
    icon: "🔍",
    highlights: [
      "Instructors with industry experience in business analysis & data tools",
      "Hands-on training with real-world examples & case studies",
      "Interactive learning with Q&A sessions and personalized feedback",
      "Certification upon successful completion",
    ],
    curriculum: [
      "Business analysis fundamentals and methodologies",
      "Data analysis & visualization using Power BI, Tableau, and Excel",
      "Data modeling, data mining, and data storytelling",
      "Creating interactive dashboards and reports",
      "Advanced techniques: forecasting and trend analysis",
      "Integrating data insights into business decisions",
    ],
    tools: [
      "Power BI – Data visualization, reporting, business intelligence",
      "Tableau – Interactive dashboards, visual storytelling",
      "Excel – Data modeling, formulas, pivot tables, charts",
    ],
    targetAudience: [
      "Business analysts & aspiring analysts",
      "Data analysts & data scientists",
      "Business intelligence professionals",
      "Anyone aiming to leverage data for business growth",
    ],
    careerBenefits: [
      "Enhanced job opportunities in business analysis & data science",
      "Strengthened skills in data storytelling and visualization",
      "Confidence in presenting data-driven insights",
      "Ability to drive real business improvement through analytics",
    ],
    outcomes: [
      "Master Power BI, Tableau, and Excel for business analysis",
      "Create compelling data visualizations and dashboards",
      "Make data-driven business recommendations",
    ],
    duration: "8 Months",
    level: "Advanced",
    category: "Business Analysis",
  },
  {
    id: "tally-certified",
    title: "Tally Certified Accountant Programme",
    subtitle: "Work-Integrated Accountant Training Programme",
    description:
      "Take your accounting skills to the next level with our immersive, work-integrated training programme. Using real-world company accounts, you'll gain hands-on experience in financial analysis, reporting, and decision-making. This comprehensive programme is designed to equip you with the practical skills and knowledge needed to excel as a professional accountant.",
    image: "/images/home/program/accounts.jpg",
    icon: "📊",
    highlights: [
      "Hands-on training with original company accounts",
      "Practical experience in financial analysis, reporting, and decision-making",
      "Expert instruction from industry professionals",
      "Real-world case studies and applications",
      "Personalized feedback and mentorship",
    ],
    curriculum: [
      "Financial statement analysis and interpretation",
      "Accounting standards and regulatory compliance",
      "Financial reporting and presentation",
      "Budgeting and forecasting",
      "Financial planning and decision-making",
    ],
    targetAudience: [
      "Aspiring accountants and finance professionals",
      "Current accounting students seeking practical experience",
      "Professionals looking to upskill or reskill in accounting",
    ],
    outcomes: [
      "Apply accounting principles confidently in real-world scenarios",
      "Strengthen your financial decision-making skills",
      "Become a valuable asset to any organization's finance team",
    ],
    duration: "4 Months",
    level: "Beginner",
    category: "Accounting",
  },
  {
    id: "expert-30",
    title: "Expert 30",
    subtitle: "Senior-Level Accounting Programme with Live Internship",
    description:
      "Unleash Your Potential as a Senior Accountant. Gain hands-on experience in Accounts & Finance with our advanced-level programme featuring a Live Internship designed to elevate your accounting career.",
    image: "/images/home/program/expert.jpg",
    icon: "🏆",
    highlights: [
      "Advanced-level accounting programme",
      "Live internship experience",
      "Senior-level practical training",
      "Industry expert mentorship",
      "Real company project work",
    ],
    curriculum: [
      "Handling Accounts & Bank Reconciliation",
      "Managing Accounts Payables & Receivables",
      "Preparing Profit & Loss Statements",
      "Filing GST & TDS Returns",
      "PF, ESI, Salary Processing & Statutory Compliance",
      "Debtor & Creditor Reconciliation",
      "Creating Balance Sheets & BRS",
      "Conducting Financial Analysis & Fund Flow Management",
      "Office Automation & HR Basics",
      "Financial Statement Analysis & Modeling",
    ],
    targetAudience: [
      "Senior accounting professionals",
      "Experienced finance professionals seeking advancement",
      "CA/CMA students and graduates",
      "Finance managers and senior analysts",
    ],
    outcomes: [
      "Master senior-level accounting practices",
      "Lead financial analysis and reporting teams",
      "Drive strategic financial decision-making",
    ],
    duration: "12 Months",
    level: "Expert",
    category: "Advanced Accounting",
  },
];

const ProgramDetailPage: React.FC = () => {
  const [selectedProgram, setSelectedProgram] =
    useState<Program>(defaultProgram);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const getLevelColor = (level: Program["level"]): string => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-200";
      case "Intermediate":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Advanced":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "Expert":
        return "bg-orange-100 text-orange-700 border-orange-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "curriculum", label: "Curriculum", icon: "📚" },
    { id: "details", label: "Details", icon: "ℹ️" },
    { id: "enrollment", label: "Enrollment", icon: "✍️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Mobile-First Program Selection Header */}
      <div className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4">
          {/* Mobile Menu Button */}
          <div className="flex items-center justify-between md:hidden">
            <div className="flex items-center gap-2">
              <span className="text-lg">{selectedProgram.icon}</span>
              <span className="truncate text-sm font-medium text-gray-900">
                {selectedProgram.title}
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Program Selection */}
          <motion.div
            className="hidden flex-wrap gap-2 md:flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => {
                  setSelectedProgram(program);
                  setActiveTab("overview");
                }}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 lg:px-4 ${
                  selectedProgram.id === program.id
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-1">{program.icon}</span>
                <span className="hidden lg:inline">{program.title}</span>
                <span className="lg:hidden">{program.title.split(" ")[0]}</span>
              </button>
            ))}
          </motion.div>

          {/* Mobile Program Selection Dropdown */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 space-y-2 md:hidden"
            >
              {programs.map((program) => (
                <button
                  key={program.id}
                  onClick={() => {
                    setSelectedProgram(program);
                    setActiveTab("overview");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition-all duration-300 ${
                    selectedProgram.id === program.id
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-lg">{program.icon}</span>
                  <div>
                    <div className="font-medium">{program.title}</div>
                    <div className="text-xs opacity-75">{program.category}</div>
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Hero Section - Mobile Optimized */}
      <motion.section
        className="relative overflow-hidden py-8 sm:py-12 lg:py-16 xl:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Elements - Smaller on mobile */}
        <div className="absolute inset-0">
          <div className="absolute left-[10%] top-10 text-base text-indigo-300 opacity-30 sm:left-[15%] sm:top-20 sm:text-xl md:text-xl">
            {selectedProgram.icon}
          </div>
          <div className="absolute right-[15%] top-16 text-lg text-blue-300 opacity-40 sm:right-[20%] sm:top-32 sm:text-2xl">
            📚
          </div>
          <div className="absolute bottom-1/3 left-[8%] text-sm text-indigo-300 opacity-25 sm:left-[10%] sm:text-lg">
            💼
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Content */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 sm:px-4 sm:py-2"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 sm:h-2 sm:w-2"></div>
                <span className="text-xs font-medium text-indigo-700 sm:text-sm">
                  {selectedProgram.category}
                </span>
              </motion.div>

              {/* Title - Responsive text sizes */}
              <motion.h1
                className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
              >
                {selectedProgram.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                className="text-lg font-semibold text-indigo-600 sm:text-xl lg:text-2xl"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
              >
                {selectedProgram.subtitle}
              </motion.h2>

              {/* Description - Better mobile readability */}
              <motion.p
                className="text-base leading-relaxed text-gray-600 sm:text-lg"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
              >
                {selectedProgram.description}
              </motion.p>

              {/* Quick Info - Stack on mobile */}
              <motion.div
                className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1.0 }}
              >
                <div
                  className={`w-fit rounded-full border px-3 py-1 text-sm font-medium ${getLevelColor(selectedProgram.level)}`}
                >
                  {selectedProgram.level}
                </div>
                {/* <div className="w-fit rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                  📅 {selectedProgram.duration}
                </div> */}
              </motion.div>

              {/* CTA Button - Full width on mobile */}
              <motion.div
                className="pt-2 sm:pt-4"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
              >
                <Link href={"/contact"}>
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-indigo-700 sm:w-auto sm:px-8 sm:py-4">
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    Enroll Now
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Image - Responsive aspect ratio */}
            <motion.div
              className="relative order-first lg:order-last"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="group relative overflow-hidden rounded-xl shadow-xl sm:rounded-2xl">
                <div className="aspect-[16/10] overflow-hidden sm:aspect-[4/3]">
                  <Image
                    src={selectedProgram.image}
                    alt={selectedProgram.title}
                    width={2000}
                    height={2000}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-1551818255-e6e10975cd54?auto=format&fit=crop&w=800&q=80`;
                    }}
                  />

                  {/* Gallery-style overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  {/* Gallery-style badges - Responsive sizing */}
                  <div className="absolute left-3 top-3 rounded-full bg-emerald-500 px-2 py-1 text-xs font-medium text-white shadow-sm sm:left-4 sm:top-4 sm:px-3 sm:text-sm">
                    {selectedProgram.category}
                  </div>

                  <div className="absolute right-3 top-3 rounded-full bg-indigo-600 px-2 py-1 text-xs font-medium text-white shadow-sm sm:right-4 sm:top-4 sm:px-3 sm:text-sm">
                    {selectedProgram.level}
                  </div>

                  {/* Gallery-style title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full transform p-3 transition-transform duration-300 group-hover:translate-y-0 sm:p-4">
                    <div className="rounded-lg bg-white/95 p-2 backdrop-blur-sm sm:p-3">
                      <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                        {selectedProgram.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                        Duration: {selectedProgram.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mobile-Optimized Tab Navigation */}
      <div className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            className="scrollbar-hide flex overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex min-w-0 flex-shrink-0 items-center gap-1.5 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors sm:gap-2 sm:px-6 sm:py-4 ${
                  activeTab === tab.id
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-base sm:text-lg">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile-Optimized Tab Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === "overview" && (
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Highlights */}
              <motion.div
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                  🌟 Key Highlights
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {selectedProgram.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:shadow-lg sm:rounded-xl sm:p-4"
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 sm:h-6 sm:w-6">
                          <svg
                            className="h-2.5 w-2.5 text-white sm:h-3 sm:w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700 sm:text-base">
                          {highlight}
                        </span>
                      </div>

                      {/* Gallery-style overlay */}
                      <div className="absolute inset-0 bg-green-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Target Audience & Outcomes */}
              <motion.div
                className="space-y-6 sm:space-y-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                {/* Target Audience */}
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:rounded-2xl sm:p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">
                    👥 Who Should Enroll
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {selectedProgram.targetAudience.map((audience, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <span className="mt-0.5 flex-shrink-0 text-blue-500">
                          🎯
                        </span>
                        <span className="text-sm text-gray-700 sm:text-base">
                          {audience}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="rounded-xl bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:rounded-2xl sm:p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">
                    🎓 Programme Outcomes
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {selectedProgram.outcomes.map((outcome, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <span className="mt-0.5 flex-shrink-0 text-orange-500">
                          🏆
                        </span>
                        <span className="text-sm text-gray-700 sm:text-base">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === "curriculum" && (
            <motion.div
              className="mx-auto max-w-4xl"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 sm:mb-8 sm:text-3xl">
                📚 What You'll Learn
              </h3>

              <div className="grid gap-3 sm:gap-4">
                {selectedProgram.curriculum.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg sm:rounded-xl sm:p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-xs font-bold text-white sm:h-8 sm:w-8 sm:text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-700 sm:text-base">
                          {item}
                        </span>
                      </div>
                    </div>

                    {/* Gallery-style overlay */}
                    <div className="absolute inset-0 bg-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </motion.div>
                ))}
              </div>

              {/* Tools Section (if available) */}
              {selectedProgram.tools && (
                <div className="mt-8 sm:mt-12">
                  <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900 sm:mb-6 sm:text-2xl">
                    🛠️ Tools and Technologies
                  </h4>
                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {selectedProgram.tools.map((tool, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-4 shadow-md transition-all duration-300 hover:shadow-lg sm:rounded-xl sm:p-6"
                      >
                        <span className="text-sm font-medium text-gray-700 sm:text-base">
                          {tool}
                        </span>
                        <div className="absolute inset-0 bg-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Career Benefits Section (if available) */}
              {selectedProgram.careerBenefits && (
                <div className="mt-8 sm:mt-12">
                  <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900 sm:mb-6 sm:text-2xl">
                    🚀 Career Benefits
                  </h4>
                  <div className="grid gap-3 sm:gap-4">
                    {selectedProgram.careerBenefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-3 shadow-md transition-all duration-300 hover:shadow-lg sm:rounded-xl sm:p-4"
                      >
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="mt-0.5 flex-shrink-0 text-green-500">
                            📈
                          </span>
                          <span className="text-sm text-gray-700 sm:text-base">
                            {benefit}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-green-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "details" && (
            <motion.div
              className="mx-auto grid max-w-4xl gap-6 sm:gap-8 md:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Program Info */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Program Information
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="rounded-lg bg-white p-4 shadow-md sm:rounded-xl sm:p-6">
                    <h4 className="mb-2 font-semibold text-gray-900">
                      Duration
                    </h4>
                    <p className="text-sm text-gray-600 sm:text-base">
                      {selectedProgram.duration}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-md sm:rounded-xl sm:p-6">
                    <h4 className="mb-2 font-semibold text-gray-900">Level</h4>
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${getLevelColor(selectedProgram.level)}`}
                    >
                      {selectedProgram.level}
                    </span>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-md sm:rounded-xl sm:p-6">
                    <h4 className="mb-2 font-semibold text-gray-900">
                      Category
                    </h4>
                    <p className="text-sm text-gray-600 sm:text-base">
                      {selectedProgram.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  What's Included
                </h3>
                <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 p-4 sm:rounded-xl sm:p-6">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700 sm:text-base">
                        Expert instruction
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700 sm:text-base">
                        Hands-on projects
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700 sm:text-base">
                        Industry certification
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700 sm:text-base">
                        Career support
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700 sm:text-base">
                        Lifetime access
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "enrollment" && (
            <motion.div
              className="mx-auto max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 text-center sm:mb-8">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-base text-gray-600 sm:text-lg">
                  Join thousands of students who have transformed their careers
                  with our programs.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg sm:rounded-2xl sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    <div>
                      <div className="mb-2 block text-sm font-medium text-gray-700">
                        First Name
                      </div>
                      <div className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-500 sm:px-4 sm:py-3">
                        Enter your first name
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 block text-sm font-medium text-gray-700">
                        Last Name
                      </div>
                      <div className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-500 sm:px-4 sm:py-3">
                        Enter your last name
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 block text-sm font-medium text-gray-700">
                      Email Address
                    </div>
                    <div className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-500 sm:px-4 sm:py-3">
                      Enter your email
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 block text-sm font-medium text-gray-700">
                      Phone Number
                    </div>
                    <div className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-500 sm:px-4 sm:py-3">
                      Enter your phone number
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 block text-sm font-medium text-gray-700">
                      Experience Level
                    </div>
                    <div className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-500 sm:px-4 sm:py-3">
                      Select your experience level
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 block text-sm font-medium text-gray-700">
                      Additional Message
                    </div>
                    <div className="flex h-20 w-full items-start rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-500 sm:h-24 sm:px-4 sm:py-3">
                      Tell us about your goals and expectations...
                    </div>
                  </div>

                  <button className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-indigo-700 sm:px-6 sm:py-4">
                    Submit Enrollment Application
                  </button>
                </div>
              </div>

              <div className="mt-6 text-center sm:mt-8">
                <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base">
                  Have questions? We're here to help!
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                  <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 sm:px-6 sm:py-3">
                    📞 Call Us
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 sm:px-6 sm:py-3">
                    💬 Live Chat
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProgramDetailPage;
