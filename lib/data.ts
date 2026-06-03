import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Settings2,
  Sparkles
} from "lucide-react";

export const profile = {
  name: "Anirudh Kumar R",
  location: "Trichy, Tamil Nadu, India",
  email: "anirudhkumar0904@gmail.com",
  phone: "+91 8667239631",
  github: "https://github.com/anirudhkumar0904",
  linkedin: "https://www.linkedin.com/in/anirudh-kumar0904/",
  resume: "/resume.pdf",
  headline: "Building intelligent systems that automate, reason, and scale."
};

export const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Awards", id: "achievements" },
  { label: "Contact", id: "contact" }
];

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail }
];

export const subtitles = [
  "Agentic AI Engineer",
  "RAG Systems Builder",
  "AWS ML Architect",
  "Automation Engineer"
];

export const stats = [
  { value: 98, suffix: "%+", label: "Deepfake Detection Accuracy" },
  { value: 96, suffix: "%", label: "API Call Reduction (AWS Pipeline)" },
  { value: 0.0014, prefix: "₹", suffix: "", label: "Cost Per Review (FashionSense AI)", decimals: 4 },
  { value: 15, prefix: "Top ", suffix: "", label: "Amazon AI Hackathon Finalist" }
];

export const experience = [
  {
    role: "Agentic AI Engineering Intern",
    company: "Glacis",
    duration: "March 2025 - Present",
    points: [
      "Built and automated GTM workflows using n8n for inbound and outbound marketing operations.",
      "Developed AI-driven pipelines for lead capture, enrichment, segmentation, and outreach.",
      "Integrated APIs, webhooks, CRM tools, and external platforms to automate campaign execution and customer engagement."
    ]
  },
  {
    role: "Oracle APEX Developer Intern",
    company: "Virran Tech Solutions Pvt Ltd.",
    duration: "June 2025 - July 2025",
    points: [
      "Built a 12-module Leave Management System covering auth, dashboards, workflows, and reports in 4 weeks.",
      "Automated leave balance calculations and approval flows using PL/SQL.",
      "Implemented RBAC and interactive dashboards for real-time, secure HR visibility."
    ]
  }
];

export const projects = [
  {
    title: "HalluciNet",
    tagline: "RAG Pipeline with Hallucination Detection",
    icon: "🔬",
    size: "large",
    bullets: [
      "Built dual-LLM hallucination detection over user-uploaded PDFs using ChromaDB vector search and Groq API.",
      "Atomic claim verification: a secondary LLM independently fact-checks each generated claim against retrieved source chunks.",
      "Delivers per-claim verdicts and a quantified Trust Score; deployed end-to-end on Render."
    ],
    stack: ["Python", "ChromaDB", "Groq API", "Sentence-Transformers", "Flask", "Streamlit", "PyPDF"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/anirudhkumar0904/hallucination-proof-rag",
        icon: Github
      }
    ],
    caseStudy: {
      problem: "RAG answers often sound authoritative even when the retrieved source does not support them.",
      system: "The pipeline decomposes answers into claims, retrieves evidence, and assigns verdicts before the user trusts the response.",
      proof: "Recruiters see a full-stack AI system with retrieval, verification, scoring, and deployment discipline."
    }
  },
  {
    title: "FashionSense AI",
    tagline: "Multilingual Review Intelligence Platform",
    icon: "👗",
    size: "standard",
    bullets: [
      "Multilingual AWS pipeline processing fashion reviews in 5 Indian languages with 96% API call reduction via batching.",
      "5-dimension SKU scoring plus return risk prediction for D2C fashion brands.",
      "Cost efficiency: ₹0.0014 per review, enabling scalable product intelligence."
    ],
    stack: ["AWS S3", "Translate", "Comprehend", "Bedrock Nova", "FastAPI", "EC2"],
    links: [
      {
        label: "Live Demo",
        href: "https://fashionsense1.vercel.app/",
        icon: ExternalLink
      }
    ],
    caseStudy: {
      problem: "D2C brands get thousands of reviews but cannot tell whether low ratings come from fit, fabric, price, or return intent.",
      system: "AWS services normalize multilingual reviews, batch sentiment extraction, and generate executive SKU recommendations.",
      proof: "A hackathon build that feels like an internal analytics product: fast, measurable, and cost-aware."
    }
  },
  {
    title: "DFCA-Net",
    tagline: "Dual-Stream Deepfake Detection Network",
    icon: "🎭",
    size: "standard",
    bullets: [
      "Designed dual-stream CNN: MobileNetV2 visual branch plus DCT frequency branch with bidirectional cross-attention.",
      "Trained on 140K real and fake faces using 3-phase progressive learning on NVIDIA DGX A100 GPUs.",
      "Surpassed SOTA baselines with 99%+ accuracy and near-perfect AUC on a 5,000-image unseen test set."
    ],
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
    links: [
      {
        label: "Research Brief",
        href: "https://docs.google.com/document/d/1e-V180o1g6tSFsOT4IlrLFHpujiFalAB7FkHVCTT_kE/edit?usp=sharing",
        icon: ExternalLink
      }
    ],
    caseStudy: {
      problem: "Deepfake detectors fail when they overfit visual artifacts and miss frequency-domain manipulation traces.",
      system: "DFCA-Net combines spatial and frequency evidence, then lets attention exchange signals across both streams.",
      proof: "The result signals research depth: architecture design, large-scale training, GPU discipline, and metric rigor."
    }
  },
  {
    title: "AI Food Ordering Bot",
    tagline: "WhatsApp-Native AI Ordering Assistant",
    icon: "🍕",
    size: "large",
    bullets: [
      "Event-driven WhatsApp automation using n8n webhooks and Groq LLM for real-time AI intent detection.",
      "Live menu plus FAQ from Google Sheets with zero hardcoded decision trees.",
      "Supports concurrent conversations with instant responses via AI-driven workflow orchestration."
    ],
    stack: ["n8n", "WhatsApp Business API", "Groq LLM", "Google Sheets API"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/anirudhkumar0904/whatsapp-food-ordering-bot_",
        icon: Github
      }
    ],
    caseStudy: {
      problem: "Small restaurants lose orders when manual replies cannot keep up with repeated questions and unpredictable messages.",
      system: "n8n receives WhatsApp events, Groq classifies intent, and Sheets keeps menus and FAQ answers live.",
      proof: "A practical automation system that shows API thinking, workflow design, and customer-facing AI execution."
    }
  },
  {
    title: "College Bus Tracking System",
    tagline: "Real-Time IoT Fleet Monitoring System",
    icon: "🚌",
    size: "large",
    bullets: [
      "Engineered end-to-end IoT tracking using ESP32 + Neo-6M GPS, syncing real-time coordinates to a MERN stack backend for live fleet monitoring.",
      "Architected RESTful APIs ingesting high-frequency GPS streams with sub-2 second latency for dynamic ETA calculations and live bus movement on React dashboard.",
      "Optimized MongoDB schemas for time-series location data, route history, and driver logs ensuring high-speed retrieval at scale."
    ],
    stack: ["ESP32", "Neo-6M GPS", "Node.js", "Express.js", "MongoDB", "React.js"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/madhumi2607/sastrabus",
        icon: Github
      }
    ],
    caseStudy: {
      problem: "College transport needs live visibility, fast ETAs, and reliable route history without manual coordination.",
      system: "ESP32 GPS devices stream coordinates into REST APIs, MongoDB stores location timelines, and React visualizes live fleet movement.",
      proof: "Shows full-stack IoT execution across hardware, APIs, real-time UX, and scalable time-series data modeling."
    }
  },
  {
    title: "Next-Item Recommendation (TLSAN)",
    tagline: "Sequential Deep Learning Recommendation Engine",
    icon: "🧠",
    size: "standard",
    bullets: [
      "Engineered a TLSAN-based recommendation engine in PyTorch, outperforming baseline models in predictive accuracy.",
      "Architected sequential attention models with temporal embeddings to capture multi-scale user behavior transitions.",
      "Validated using ROC-AUC and Precision-Recall metrics with Matplotlib-driven visual analysis."
    ],
    stack: ["Python", "PyTorch", "Pandas", "Scikit-learn", "Matplotlib"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/anirudhkumar0904/TLSAN-Recommendation-System",
        icon: Github
      }
    ],
    caseStudy: {
      problem: "Recommendation engines need to understand what users are likely to choose next, not just what they liked before.",
      system: "TLSAN models sequential behavior with attention and temporal embeddings, then validates ranking quality with ROC-AUC and PR curves.",
      proof: "Demonstrates deep learning fluency, evaluation discipline, and production-relevant personalization thinking."
    }
  }
];

export const skillGroups = [
  {
    title: "AI & Automation",
    icon: BrainCircuit,
    skills: [
      "n8n",
      "Groq API",
      "RAG Pipelines",
      "AI Agents",
      "ChromaDB",
      "Ollama",
      "Sentence-Transformers",
      "LangChain patterns",
      "Workflow Orchestration",
      "Webhooks",
      "API Integrations"
    ]
  },
  {
    title: "Cloud & AWS",
    icon: Cloud,
    skills: ["AWS S3", "EC2", "Bedrock", "Translate", "Comprehend", "Render", "Firebase"]
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "C", "C++", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PL/SQL", "ChromaDB", "Firebase"]
  },
  {
    title: "Frameworks & Tools",
    icon: Settings2,
    skills: ["FastAPI", "Flask", "Streamlit", "Git", "GitHub", "Postman", "Figma", "Oracle APEX", "TensorFlow", "Keras", "OpenCV"]
  }
];

export const exploring = ["LangGraph", "CrewAI", "Claude APIs", "TypeScript"];

export const achievements = [
  {
    icon: "🥇",
    title: "Top 15 Finalist",
    issuer: "Amazon AI Hackathon",
    tone: "gold"
  },
  {
    icon: "🏅",
    title: "OCI AI Foundations Associate",
    issuer: "Oracle Certified",
    tone: "platinum"
  },
  {
    icon: "🎓",
    title: "Generative & Responsible AI",
    issuer: "Google Certified",
    tone: "silver"
  }
];

export const commandItems = [
  { label: "View projects", id: "projects", icon: Sparkles },
  { label: "Read experience", id: "experience", icon: BrainCircuit },
  { label: "Inspect skills", id: "skills", icon: Settings2 },
  { label: "Contact Anirudh", id: "contact", icon: Mail }
];

export type Project = (typeof projects)[number];
