export const personalInfo = {
  name: "Swapnil Upadhyay",
  title: "Aspiring Data Scientist & AI-ML Engineer",
  tagline: "Building predictive models, AI biometrics, and multi-tenant data pipelines.",
  bio: "Computer Science graduate (B.Tech, CGPA 7.9, GATE 2026 Qualified). Proficient in predictive modeling, statistical analysis, and real-time dashboarding. Demonstrated success building end-to-end data applications processing unstructured vision and audio data, statistical OLS regressions, and multi-tenant cloud platforms.",
  location: "Uttarakhand, India",
  phone: "+91 8958688502",
  email: "swapnilupadhyay4137@gmail.com",
  github: "https://github.com/fireside4137",
  linkedin: "https://www.linkedin.com/in/upadhyay-swapnil/",
  resumeUrl: "/Resume.pdf",
  profilePicture: "/profile_picture.jpg",
  status: "Open for Data Science & Software Engineering Roles",
  stats: [
    { label: "GATE 2026 CS Score", value: "367" },
    { label: "12th Board Score", value: "96.6%" },
    { label: "10th Board Score", value: "96.8%" },
    { label: "OLS Regression R²", value: "0.5831" }
  ]
};

export const educationList = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "THDC Institute of Hydropower Engineering and Technology (THDC-IHET)",
    location: "Tehri Garhwal, Uttarakhand",
    period: "2022 – 2026",
    score: "7.9 CGPA",
    details: "Focus on Data Science, Machine Learning, Database Architecture, and Distributed Systems."
  },
  {
    degree: "Senior Secondary / Intermediate (12th Grade - PCM)",
    institution: "DAV Centenary Public School",
    location: "Haldwani, Uttarakhand",
    period: "Completed 2021",
    score: "96.6% (CBSE Board)",
    details: "Physics, Chemistry, Mathematics & Computer Science specialization."
  },
  {
    degree: "High School (10th Grade)",
    institution: "Sainik School Ghorakhal",
    location: "Nainital, Uttarakhand",
    period: "Completed 2019",
    score: "96.8% (CBSE Board)",
    details: "Premier residential military institution focusing on academic excellence, leadership, and discipline."
  }
];

export const achievements = [
  {
    title: "GATE-2026 (CS) Qualified",
    subtitle: "Graduate Aptitude Test in Engineering",
    detail: "Qualified the national GATE 2026 Computer Science exam with an overall score of 367.",
    badge: "National Exam"
  },
  {
    title: "Inter-Collegiate Football Tournament Runner-Up",
    subtitle: "University Sports Meet",
    detail: "Represented the varsity football team in the University sports meet and secured the runner-up trophy.",
    badge: "Sports Leadership"
  }
];

export const skills = {
  dataScience: [
    "Python", "SQL", "Pandas", "NumPy", "Statsmodels", "SciPy", 
    "Scikit-Learn", "OLS Regression", "Hypothesis Testing (t-test, ANOVA)", 
    "A/B Testing & EDA", "Matplotlib / Seaborn"
  ],
  aiBiometrics: [
    "Computer Vision (OpenCV)", "dlib 68-Landmark Predictor", "ResNet Face Embeddings", 
    "Resemblyzer Deep Voice", "Feature Vector Embedding", "Support Vector Machines (SVM)", "Euclidean L2 Norm"
  ],
  backendDatabase: [
    "FastAPI", "PostgreSQL", "Row-Level Security (RLS)", "SQLAlchemy", 
    "Supabase Vector DB", "bcrypt Security", "Redis", "Celery", "RESTful APIs"
  ],
  frontendDevOps: [
    "Streamlit", "React 18", "Tailwind CSS", "Chart.js font-mono", 
    "Docker", "Docker Compose", "Git / GitHub", "CMake", "Segno QR Code"
  ]
};

export const projects = [
  {
    id: "public-health-analytics",
    title: "India Public Health Analytics Pipeline",
    subtitle: "Statistical Modeling & OLS Regression for NFHS-4 Health Indicators",
    category: "Data Science",
    featured: true,
    tags: ["Python", "Pandas", "SciPy", "Statsmodels", "OLS Regression", "ANOVA", "T-Tests", "Seaborn"],
    shortDescription: "Production-grade statistical modeling pipeline analyzing 96 public health indicators across 637 Indian districts from the NFHS-4 dataset.",
    metrics: [
      { label: "OLS Model Fit", value: "R² = 0.5831" },
      { label: "Districts Analyzed", value: "637" },
      { label: "Statistical Tests", value: "t-test, ANOVA, χ²" },
      { label: "Literacy Impact", value: "+25.5% Birth Rate" }
    ],
    github: "https://github.com/fireside4137/India-public-health-analytics",
    demo: null,
    details: {
      problem: "Public health outcomes across India demonstrate substantial regional and socio-economic heterogeneity. The objective was to clean, validate, and run statistical hypothesis testing to evaluate key structural drivers of maternal and child health.",
      keyFindings: [
        "Multiple OLS linear regression (R² = 0.5831, p < 0.0001, VIF < 10) proved 4+ Antenatal Care visits (β = +0.34) and female literacy (β = +0.28) explain 58.3% of institutional birth rate variance.",
        "Independent T-Test (p < 0.001) confirmed districts in the upper female literacy tier achieve 84.2% institutional births vs 58.7% in low literacy districts.",
        "One-Way ANOVA (p < 0.001) revealed Central/Eastern state clusters suffer severe child anaemia (>62%) compared to Southern/Western clusters (<48%).",
        "Data cleaning pipeline with automated domain validation [0, 100%] across 94 numeric indicators."
      ],
      architecture: [
        "Modular class-based Python package (src/preprocessing, src/analysis, src/statistics, src/visualization).",
        "Centralized configuration management via config.py with zero hardcoded paths.",
        "Automated unit testing suite for data cleaning pipelines and statistical calculations.",
        "Exported high-resolution diagnostic charts (Predicted vs Actual fit, residual distribution)."
      ]
    }
  },
  {
    id: "markit-ai-biometrics",
    title: "MarkIt — AI Powered Biometric Attendance System",
    subtitle: "Dual-Biometric FaceID & Deep Voice Speaker Recognition System",
    category: "AI & Computer Vision",
    featured: true,
    tags: ["Python", "Streamlit", "dlib", "Resemblyzer", "Supabase", "Scikit-Learn", "OpenCV", "bcrypt"],
    shortDescription: "Automated classroom management platform powered by 128-d Computer Vision facial embeddings and 256-d Deep Voice Speaker Verification.",
    metrics: [
      { label: "Face Embedding", value: "128-d Vector" },
      { label: "Voice Embedding", value: "256-d d-vector" },
      { label: "Face Match Cutoff", value: "L2 Norm ≤ 0.6" },
      { label: "Voice Sim Threshold", value: "Cosine ≥ 0.65" }
    ],
    github: null,
    githubPrivateNote: "Private Repository",
    demo: "https://markit-landing-page.vercel.app",
    details: {
      problem: "Traditional classroom attendance leads to proxy sign-ins, manual roll-call time loss, and administrative friction. MarkIt replaces manual check-ins with multi-modal AI biometric verification.",
      keyFindings: [
        "FaceID Pipeline: Extracts 128-d facial vectors using dlib 68-point landmark predictor and deep metric ResNet. Trains a dynamic Linear Support Vector Classifier (SVC) with L2 norm distance verification.",
        "Deep Voice Pipeline: Uses Resemblyzer d-vector neural network encoders to extract 256-d voiceprints. Applies Librosa silence splitting (top_db=30) to parse bulk classroom recordings into phrase utterances.",
        "Cosine Similarity Matching: Evaluates audio utterances against student voiceprints using vector dot-product similarity (threshold ≥ 0.65).",
        "Performance Optimization: Implemented Streamlit's @st.cache_resource memory caching for model loading and SVM fitting, preventing redundant calculations during multi-photo scans."
      ],
      architecture: [
        "Frontend UI built with Streamlit and custom Discord Blurple/Climate CSS styling.",
        "Supabase PostgreSQL Vector DB storing teacher auth, student profiles, and biometric vector embeddings.",
        "Passwordless student authentication flow using webcam stream and face vector classification.",
        "Teacher Management Portal with subject administration, QR share generator (segno), and attendance analytics grids."
      ]
    }
  },
  {
    id: "telite-lms",
    title: "Telite LMS — Multi-Tenant Learning Platform",
    subtitle: "Enterprise Learning System with PostgreSQL RLS & Celery",
    category: "Full-Stack & Data Architecture",
    featured: true,
    tags: ["Python 3.12", "FastAPI", "PostgreSQL RLS", "SQLAlchemy", "Pandas", "Redis", "Celery", "Docker"],
    shortDescription: "Multi-tenant learning system featuring role-aware access, PostgreSQL Row-Level Security, asynchronous reporting queues, and automated workflows.",
    metrics: [
      { label: "Tenant Isolation", value: "PostgreSQL RLS" },
      { label: "Microservices", value: "6 Docker Containers" },
      { label: "API Endpoints", value: "15+ REST Modules" },
      { label: "Batch Runtime", value: "-60% Latency" }
    ],
    github: null,
    githubPrivateNote: "Proprietary Industry Project (Telite Systems Pvt. Ltd.)",
    demo: null,
    details: {
      problem: "Enterprise training environments require strict tenant data separation, role-based governance across admins and learners, and reliable asynchronous reporting.",
      keyFindings: [
        "Engineered RESTful APIs with FastAPI and SQLAlchemy for an enterprise Learning Management System (LMS) at Telite Systems Pvt. Ltd.",
        "Leveraged Pandas, openpyxl, Celery, and Redis to automate background batch data aggregation, feature reporting, and scheduled user analytics, reducing manual data handling by 60%.",
        "Designed structured relational database schemas utilizing PostgreSQL Row-Level Security (RLS) policies for multi-tenant data isolation.",
        "Orchestrated 6-container Docker Compose microservices for Nginx, FastAPI, PostgreSQL, Redis, Celery Worker, and Celery Beat."
      ],
      architecture: [
        "Backend: FastAPI app with domain context resolution, PyJWT authentication, and HttpOnly cookie security.",
        "Database: PostgreSQL with Alembic migrations and SQLite fallback for local development.",
        "Frontend: React SPA served via Nginx reverse proxy with dynamic Vite API proxying.",
        "Analytics & Reports: Automated Pandas rollups and Redis-backed rate limiting."
      ]
    }
  }
];

export const experiences = [
  {
    role: "Software Development Intern",
    company: "Telite Systems Pvt. Ltd.",
    location: "Tehri Garhwal, Uttarakhand",
    period: "02/2026 – 07/2026",
    type: "Industry Internship",
    bullets: [
      "Data Processing & Backend Pipelines: Engineered backend REST APIs and asynchronous data ingestion pipelines for an enterprise Learning Management System (LMS) using Python 3.12 (FastAPI), SQLAlchemy, and PostgreSQL.",
      "Automated Analytics & Reporting: Leveraged Pandas, openpyxl, Celery, and Redis to automate background batch data aggregation, feature reporting, and scheduled metric generation for user analytics, reducing manual reporting latency by 60%.",
      "Data Architecture & Infrastructure: Designed structured relational schemas utilizing PostgreSQL Row-Level Security (RLS) for multi-tenant data isolation and containerized services using Docker Compose for reproducible data environments."
    ],
    skills: ["Python 3.12", "FastAPI", "PostgreSQL RLS", "Pandas", "Celery", "Redis", "Docker"]
  }
];
