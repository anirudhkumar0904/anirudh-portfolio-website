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
  "GraphRAG Systems Builder",
  "AWS ML Architect",
  "Automation Engineer"
];

export const stats = [
  { value: 91, prefix: "", suffix: "+", decimals: 0, label: "n8n Workflow Nodes Shipped" },
  { value: 30, prefix: "", suffix: "+", decimals: 0, label: "Normalized GTM Event Types" },
  { value: 96, prefix: "", suffix: "%", decimals: 0, label: "AWS API Cost Reduction" },
  { value: 98, prefix: "", suffix: "%+", decimals: 0, label: "Deepfake Detection Accuracy" }
];

export const experience = [
  {
    role: "Agentic AI Engineering Intern",
    company: "Glacis",
    duration: "April 2026 - June 2026",
    points: [
      "Built a 91-node n8n automation platform with 5 event triggers, integrating HubSpot, Slack, Calendly, Dripify, Instantly, and DocSend for end-to-end GTM and CRM workflows.",
      "Designed a JavaScript event normalization pipeline using REST APIs and webhooks to standardize 7 webhook formats into 30+ event types for scalable orchestration and analytics.",
      "Developed an AI-powered lead qualification engine with Google Gemini, CRM synchronization, lead enrichment, campaign attribution, and human-in-the-loop Slack automation."
    ]
  },
  {
    role: "Oracle APEX Developer Intern",
    company: "Virran Tech Solutions Pvt Ltd.",
    duration: "June 2025 - July 2025",
    points: [
      "Built a 12-module Leave Management System covering authentication, dashboards, workflows, and reports in 4 weeks.",
      "Automated leave balance calculations and approvals using PL/SQL, reducing manual effort, processing time, and human error.",
      "Implemented RBAC and interactive dashboards for secure, real-time visibility of employee leave data."
    ]
  }
];

export const projects = [
  {
    title: "Truth Lens AI (HalluciNet)",
    tagline: "Hallucination-Proof RAG & Atomic Fact-Checking Pipeline",
    icon: "🛡️",
    size: "featured",
    bullets: [
      "Built HalluciNet, an autonomous RAG pipeline with dual-LLM hallucination detection over document corpora using ChromaDB vector search and Groq API.",
      "Implemented atomic claim verification where a secondary auditor LLM independently fact-checks every generated claim against retrieved source chunks.",
      "Delivered granular per-claim factual verdicts and a quantified real-time Trust Score, deployed end-to-end with Streamlit and Sentence-Transformers."
    ],
    stack: [
      "Python",
      "ChromaDB",
      "Groq API",
      "Sentence-Transformers",
      "Streamlit",
      "PyPDF",
      "Dual-LLM Architecture"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/anirudhkumar0904",
        icon: Github
      }
    ],
    caseStudy: {
      problem:
        "Standard RAG engines generate plausible-sounding hallucinations when retrieval models return partial, contradictory, or noisy source chunks.",
      system:
        "Truth Lens implements a dual-LLM architecture: a primary generator answers queries while an independent auditor LLM decomposes outputs into atomic claims and cross-verifies each against retrieved ChromaDB vectors.",
      proof:
        "Delivers per-claim factual audit trails and a dynamic real-time Trust Score, eliminating silent hallucinations in high-stakes research workflows."
    }
  },
  {
    title: "BioGraphRAG",
    tagline: "GraphRAG-Based Biomedical Discovery System",
    icon: "🧬",
    size: "large",
    bullets: [
      "Built a hybrid GraphRAG platform combining NetworkX knowledge graphs with ChromaDB vector search for multi-hop biomedical reasoning and drug-repurposing retrieval.",
      "Developed a FastAPI backend using Llama 3.3 via Groq for evidence-grounded answers and automated fact-checking against PubMed citations.",
      "Delivered sub-second response latency with resilient fallback generation and an interactive Vis.js knowledge-graph interface."
    ],
    stack: ["FastAPI", "NetworkX", "ChromaDB", "Hugging Face", "Llama 3.3", "Groq", "JavaScript", "Vis.js"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/anirudhkumar0904/BioPharma-GraphRAG",
        icon: Github
      },
      {
        label: "Live Demo",
        href: "https://biopharma-graphrag-platform.onrender.com/",
        icon: ExternalLink
      }
    ],
    caseStudy: {
      problem: "Biomedical discovery requires reasoning across connected entities while keeping every generated conclusion grounded in credible evidence.",
      system: "BioGraphRAG combines graph traversal, semantic retrieval, Llama 3.3 generation, and PubMed citation checks in one FastAPI pipeline.",
      proof: "The deployed system demonstrates multi-hop GraphRAG architecture, evidence-aware generation, interactive visualization, and sub-second retrieval."
    }
  },
  {
    title: "FashionSense AI",
    tagline: "Multilingual Review Intelligence Platform",
    icon: "👗",
    size: "standard",
    bullets: [
      "Built a multilingual NLP pipeline supporting 9 Indian languages for aspect-based sentiment analysis, SKU-level return-risk prediction, and customer insight extraction.",
      "Engineered an AWS inference pipeline using Translate, Comprehend, and Bedrock Nova, reducing API costs by 96%.",
      "Generated LLM-powered review summaries and supplier recommendations through a FastAPI service deployed with AWS infrastructure."
    ],
    stack: ["AWS S3", "Translate", "Comprehend", "Bedrock Nova", "FastAPI", "EC2"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/anirudhkumar0904/fashionsense1",
        icon: Github
      },
      {
        label: "Live Demo",
        href: "https://fashionsense1.vercel.app/",
        icon: ExternalLink
      }
    ],
    caseStudy: {
      problem: "Fashion brands need to understand multilingual reviews at SKU level without making inference costs scale linearly with volume.",
      system: "AWS services translate, classify, summarize, and convert customer feedback into aspect scores, return-risk signals, and supplier actions.",
      proof: "The pipeline supports 9 Indian languages while reducing API costs by 96%, making review intelligence viable at production scale."
    }
  },
  {
    title: "DFCA-Net",
    tagline: "Dual-Stream Deepfake Detection Network",
    icon: "🎭",
    size: "standard",
    bullets: [
      "Designed a dual-stream model combining MobileNetV2 visual features, DCT-based frequency features, and cross-attention for robust deepfake face detection.",
      "Trained and optimized on 140K real and fake face images using mixed-precision training on NVIDIA DGX A100 GPUs.",
      "Achieved 98%+ accuracy and near-perfect AUC through progressive learning and rigorous unseen-data evaluation."
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
      problem: "Deepfake detectors can overfit visible artifacts while missing manipulation traces that appear in the frequency domain.",
      system: "DFCA-Net combines spatial and DCT evidence, then exchanges signals between both branches through cross-attention.",
      proof: "Training on 140K images produced 98%+ accuracy and near-perfect AUC, demonstrating research depth and large-scale GPU discipline."
    }
  },
  {
    title: "College Bus Tracking System",
    tagline: "Real-Time IoT Fleet Monitoring System",
    icon: "🚌",
    size: "large",
    bullets: [
      "Built an IoT fleet-tracking system using ESP32 and Neo-6M GPS with a MERN backend for live vehicle monitoring.",
      "Designed RESTful APIs for high-frequency GPS ingestion, sub-2 second location updates, and dynamic ETA prediction.",
      "Optimized MongoDB schemas for route history, driver logs, and efficient time-series coordinate retrieval through an interactive dashboard."
    ],
    stack: ["ESP32", "Neo-6M GPS", "Node.js", "Express.js", "MongoDB", "React.js"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/anirudhkumar0904/Real-Time-Bus-Monitoring",
        icon: Github
      },
      {
        label: "Live Demo",
        href: "https://real-time-bus-monitoring.vercel.app/login",
        icon: ExternalLink
      }
    ],
    caseStudy: {
      problem: "College transport needs accurate live positions, useful ETAs, and route history without relying on manual coordination.",
      system: "GPS hardware streams coordinates into REST APIs, MongoDB stores location timelines, and React presents fleet movement and ETA updates.",
      proof: "The system demonstrates end-to-end IoT execution across hardware, APIs, time-series data modeling, and a deployed monitoring interface."
    }
  },
  {
    title: "AI Food Ordering Bot",
    tagline: "WhatsApp-Native AI Ordering Assistant",
    icon: "🍕",
    size: "large",
    bullets: [
      "Built event-driven WhatsApp automation using n8n webhooks and Groq for real-time intent detection.",
      "Connected a live menu and FAQ through Google Sheets with no hardcoded decision trees.",
      "Supported concurrent customer conversations through AI-driven workflow orchestration."
    ],
    stack: ["n8n", "WhatsApp Business API", "Groq", "Google Sheets API"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/anirudhkumar0904/whatsapp-food-ordering-bot_",
        icon: Github
      }
    ],
    caseStudy: {
      problem: "Small restaurants lose orders when manual replies cannot keep up with repeated questions and unpredictable messages.",
      system: "n8n receives WhatsApp events, Groq classifies intent, and Google Sheets keeps menu and FAQ answers current.",
      proof: "The project shows practical API integration, conversational automation, and customer-facing workflow design."
    }
  },
  {
    title: "Next-Item Recommendation (TLSAN)",
    tagline: "Sequential Deep Learning Recommendation Engine",
    icon: "🧠",
    size: "standard",
    bullets: [
      "Engineered a TLSAN-based recommendation engine in PyTorch, outperforming baseline models in predictive accuracy.",
      "Built sequential attention models with temporal embeddings to capture multi-scale user behavior transitions.",
      "Validated performance using ROC-AUC and precision-recall metrics with Matplotlib-driven analysis."
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
      problem: "Recommendation engines need to predict what a user will choose next, not only what they preferred historically.",
      system: "TLSAN models sequential behavior with attention and temporal embeddings, then evaluates ranking quality with ROC-AUC and precision-recall curves.",
      proof: "The project demonstrates deep-learning implementation, evaluation discipline, and production-relevant personalization thinking."
    }
  }
];

export const skillGroups = [
  {
    title: "AI & Automation",
    icon: BrainCircuit,
    skills: [
      "n8n",
      "AI Agents",
      "Agentic AI",
      "LLMs",
      "RAG",
      "GraphRAG",
      "Prompt Engineering",
      "LangChain",
      "LlamaIndex",
      "MCP",
      "Vector Databases"
    ]
  },
  {
    title: "Cloud & AWS",
    icon: Cloud,
    skills: ["AWS S3", "Bedrock", "Translate", "Comprehend", "EC2", "Render"]
  },
  {
    title: "Languages & Web",
    icon: Code2,
    skills: ["Python", "C", "C++", "JavaScript", "HTML", "CSS", "React.js", "FastAPI", "RESTful APIs"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "ChromaDB", "PL/SQL"]
  },
  {
    title: "Frameworks & Tools",
    icon: Settings2,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "PyTorch",
      "TensorFlow/Keras",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Hugging Face",
      "OpenCV",
      "Postman",
      "Oracle APEX"
    ]
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
