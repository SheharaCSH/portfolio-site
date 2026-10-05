// ============================================================
// SITE CONTENT
// This is the ONE file you need to edit to make this portfolio
// yours. Every page pulls its text from here instead of having
// copy hard-coded inline, so updates stay in one place.
// ============================================================

export const profile = {
  legalName: "Chamudi Shehara Hennayaka",
  initials: "CH", // used in the logo mark
  tagline: "Software Engineering Technology (AI) Co-op Student, based in Toronto",
  missionStatement:
    "I build full-stack and AI-powered applications, and enjoy turning " +
    "ambiguous problems into clean, working software through thoughtful " +
    "requirements engineering and Agile collaboration.",
  aboutParagraph:
    "I'm a Software Engineering Technology (AI) Co-op student at Centennial " +
    "College with applied project experience in full-stack and AI-powered " +
    "development. I enjoy building with React, Node.js, and the Gemini API, " +
    "and I have hands-on experience in object-oriented programming, database " +
    "design, requirements engineering, and Git/GitHub version control. " +
    "Outside the classroom, I stay active on campus as an Event Ambassador " +
    "and student volunteer at Centennial College.",
  headshotSrc: "/headshot.jpg",
  resumeSrc: "/resume.pdf",
  email: "chennaya@my.centennialcollege.ca",
  phone: "(416) 836-1778",
  location: "Scarborough, ON",
  socials: [
    { label: "GitHub", href: "https://github.com/SheharaCSH" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/chamudi-hennayaka/" },
  ],
};

export const projects = [
  {
    id: "echo-fridge",
    title: "Echo Fridge — AI Kitchen Copilot",
    role: "Hackathon Project",
    description:
      "Built an AI-powered web app that identifies grocery items from " +
      "user-submitted photos using the Gemini multimodal vision API, and " +
      "classifies each item as Fresh, Use Soon, Use Today, or Expired. " +
      "Designed a \"Rescue My Food\" workflow that generates recipes from " +
      "ingredients nearing expiry to help reduce household food waste, and " +
      "implemented a human-in-the-loop review step with Zod schema " +
      "validation to verify AI output before saving inventory data.",
    tags: ["React", "Node.js", "Gemini API", "JSON", "Zod Validation"],
    imageSrc: "/projects/echo-fridge.svg",
    link: "https://github.com/varothayan8/echo-fridge",
  },
  {
    id: "ai-study-buddy",
    title: "AI Study Buddy — AI Quiz Generator",
    role: "Solo project",
    description:
      "Developed a quiz generator that creates practice questions from any " +
      "user-entered topic and difficulty level using the Gemini API. Built " +
      "an interactive Streamlit interface so users can generate, review, " +
      "and practise quizzes in a single session, with structured prompts " +
      "and parsing logic to keep question/answer sets consistently formatted.",
    tags: ["Python", "Streamlit", "Gemini API"],
    imageSrc: "/projects/ai-study-buddy.svg",
    link: "https://github.com/SheharaCSH/AI-Study-Buddy",
  },
  {
    id: "planpilot",
    title: "PlanPilot — Software Requirements Specification",
    role: "Group Project, Co-author",
    description:
      "Co-authored a full IEEE-standard SRS document for an AI-powered " +
      "scheduling assistant as part of a student development team. Defined " +
      "functional and non-functional requirements, use cases, and UML " +
      "diagrams, and collaborated with teammates to map system workflows, " +
      "constraints, and scheduling optimization logic.",
    tags: ["UML", "Requirements Engineering", "Technical Documentation"],
    imageSrc: "/projects/planpilot.svg",
    link: null, // group project, not hosted on GitHub
    linkNote: "Group project — no public repository.", // shown instead of a link button
  },
];

export const education = [
  {
    id: "edu-centennial",
    institution: "Centennial College, Toronto, ON",
    credential: "Software Engineering Technology – Artificial Intelligence (Co-op), Advanced Diploma",
    dates: "Jan. 2026 – Expected April 2029",
    details:
      "GPA: 4.2/4.5. Courses: C# Programming, Software Engineering " +
      "Fundamentals, Web Interface Design, Database Concepts, Java " +
      "Programming, Software Requirements Engineering, Unix/Linux " +
      "Operating Systems, Web Application Development, Introduction to " +
      "Artificial Intelligence, Artificial Intelligence Systems Design.",
  },
  {
    id: "edu-acbt",
    institution: "Australian College of Business & Technology (ACBT), Kandy, Sri Lanka",
    credential: "Foundation in Science (Computing / IT)",
    dates: "Feb. 2024 – Oct. 2024",
    details: "",
  },
  {
    id: "edu-esoft",
    institution: "ESOFT Metro College, Ampara, Sri Lanka",
    credential: "Diploma in English",
    dates: "Sept. 2023 – Feb. 2024",
    details: "",
  },
];

export const services = [
  {
    id: "service-fullstack",
    title: "Full-Stack Web Development",
    description:
      "Building responsive, functional web applications end-to-end with " +
      "React, Node.js, and SQL/Oracle-backed databases.",
  },
  {
    id: "service-ai",
    title: "AI Application Development",
    description:
      "Integrating AI into real products — prompt design, multimodal " +
      "vision input, and schema-validated AI output, using tools like the " +
      "Gemini API.",
  },
  {
    id: "service-requirements",
    title: "Requirements Engineering & Documentation",
    description:
      "Writing clear software requirements specifications, use cases, " +
      "and UML diagrams to turn ambiguous project ideas into actionable " +
      "development plans.",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Education", to: "/education" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];
