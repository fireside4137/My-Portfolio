export const personalInfo = {
  name: "Swapnil",
  title: "Data Scientist & Full-Stack Developer",
  tagline: "Building production data science pipelines, AI biometrics, and multi-tenant cloud applications.",
  bio: "Passionate Data Scientist and Full-Stack Engineer with experience in statistical modeling (OLS, ANOVA), computer vision, deep voice biometrics, and scalable backend architecture (FastAPI, PostgreSQL RLS, Redis/Celery). Experienced in transforming complex multi-district healthcare data and enterprise LMS workflows into high-impact actionable insights.",
  location: "India",
  email: "swapnil.dev.analytics@gmail.com",
  github: "https://github.com/fireside4137",
  linkedin: "https://linkedin.com/in/swapnil",
  status: "Open for Data Science & Software Engineering Roles",
  stats: [
    { label: "District Indicators Modeled", value: "96+" },
    { label: "OLS Regression R² Variance", value: "58.3%" },
    { label: "Biometric Embeddings Dimension", value: "256-d" },
    { label: "Microservices Orchestrated", value: "6" }
  ]
};

export const skills = {
  dataScience: [
    "Python 3.12", "Pandas", "NumPy", "Statsmodels", "SciPy", 
    "Scikit-Learn", "OLS Regression", "Hypothesis Testing (t-test, ANOVA)", 
    "A/B Testing & EDA", "Matplotlib / Seaborn"
  ],
  aiBiometrics: [
    "Computer Vision (dlib)", "68-Landmark Detection", "ResNet Face Embeddings", 
    "Resemblyzer Deep Voice", "Librosa Audio Diarization", "Support Vector Machines (SVM)"
  ],
  backendDatabase: [
    "FastAPI", "PostgreSQL", "Row-Level Security (RLS)", "SQLAlchemy 2.x", 
    "Alembic", "Supabase Vector DB", "Redis", "Celery", "RESTful API Architecture"
  ],
  frontendDevOps: [
    "React 18", "Vite", "Tailwind CSS", "Chart.js", "Zustand", 
    "Docker", "Docker Compose", "Nginx", "Git / GitHub"
  ]
};

export const projects = [
  {
    id: "public-health-analytics",
    title: "India Public Health Analytics Pipeline",
    subtitle: "Statistical Modeling & OLS Regression for NFHS-4 Health Indicators",
    category: "Data Science",
    featured: true,
    tags: ["Python", "Pandas", "Statsmodels", "OLS Regression", "ANOVA", "T-Tests", "Seaborn"],
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
      problem: "Public health outcomes across India demonstrate substantial regional and socio-economic heterogeneity. The goal was to quantify structural drivers of maternal and child health using statistically rigorous hypothesis testing and econometric regression.",
      keyFindings: [
        "Multiple OLS linear regression (R² = 0.5831, F = 146.87, p < 0.0001) proved that antenatal care (ANC) visits (β = +0.34, p < 0.001) and female literacy (β = +0.28, p < 0.001) explain 58.3% of total variance in district institutional births.",
        "Two-Sample T-test confirmed high female literacy districts average an 84.2% institutional birth rate vs 58.7% in low literacy districts (t = 12.450, Cohen's d = 0.98).",
        "One-Way ANOVA (F = 18.320, p < 0.0001, η² = 0.14) revealed significant regional clusters with Central/Eastern states experiencing >62% child anaemia vs <48% in Southern states.",
        "Multicollinearity Audits conducted using Variance Inflation Factor (VIF) and Pearson Correlation Heatmaps across 94 numeric indicators."
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
    title: "MarkIt — Multimodal AI Biometric Attendance System",
    subtitle: "Dual-Biometric Face & Deep Voice Recognition System",
    category: "AI & Computer Vision",
    featured: true,
    tags: ["Python", "Streamlit", "dlib", "Resemblyzer", "Supabase", "Scikit-Learn", "Librosa"],
    shortDescription: "Automated classroom management platform powered by 128-d Computer Vision facial embeddings and 256-d Deep Voice Speaker Verification.",
    metrics: [
      { label: "Face Embedding", value: "128-d Vector" },
      { label: "Voice Embedding", value: "256-d d-vector" },
      { label: "Face Match Cutoff", value: "L2 Norm ≤ 0.6" },
      { label: "Voice Sim Threshold", value: "Cosine ≥ 0.65" }
    ],
    github: "https://github.com/fireside4137/Markit",
    demo: "https://markit-biometrics.vercel.app", // User can replace with actual URL
    details: {
      problem: "Traditional classroom attendance leads to proxy sign-ins, manual roll-call time loss, and administrative friction. MarkIt replaces manual check-ins with multi-modal AI biometric verification.",
      keyFindings: [
        "FaceID Pipeline: Extracts 128-d facial vectors using dlib 68-point landmark predictor and deep metric ResNet. Trains a dynamic Linear Support Vector Classifier (SVC) with L2 norm distance verification.",
        "Deep Voice Pipeline: Uses Resemblyzer d-vector neural network encoders to extract 256-d voiceprints. Applies Librosa silence splitting (top_db=30) to parse bulk classroom recordings into phrase utterances.",
        "Cosine Similarity Matching: Evaluates audio utterances against student voiceprints using vector dot-product similarity (threshold ≥ 0.65).",
        "Automated Share & Enrollment: Generates instant QR codes (segno) and URL query join handlers for rapid subject enrollment."
      ],
      architecture: [
        "Frontend UI built with Streamlit and custom Discord Blurple/Climate CSS styling.",
        "Supabase PostgreSQL Vector DB storing teacher auth, student profiles, and biometric vector embeddings.",
        "Passwordless student authentication flow using webcam stream and face vector classification.",
        "Teacher Management Portal with subject administration, QR share generator, and attendance analytics grids."
      ]
    }
  },
  {
    id: "telite-lms",
    title: "Telite LMS — Multi-Tenant Learning Platform",
    subtitle: "Full-Stack Learning Management System with PostgreSQL RLS & Celery",
    category: "Full-Stack & Data Engineering",
    featured: true,
    tags: ["FastAPI", "React", "PostgreSQL RLS", "SQLAlchemy", "Redis", "Celery", "Docker"],
    shortDescription: "Multi-tenant learning system featuring role-aware access, PostgreSQL Row-Level Security, asynchronous reporting queues, and automated workflows.",
    metrics: [
      { label: "Tenant Isolation", value: "PostgreSQL RLS" },
      { label: "Microservices", value: "6 Docker Containers" },
      { label: "API Endpoints", value: "15+ REST Modules" },
      { label: "Task Queue", value: "Redis + Celery" }
    ],
    github: "https://github.com/fireside4137/telite-lms",
    demo: null,
    details: {
      problem: "Enterprise training environments require strict tenant data separation, role-based governance across admins and learners, and reliable asynchronous reporting.",
      keyFindings: [
        "Engineered RESTful APIs with FastAPI and SQLAlchemy 2.x ORM, enforcing multi-tenant isolation via PostgreSQL Row-Level Security (RLS) policies.",
        "Integrated Celery task queues with Redis message broker for background PDF certificate generation (WeasyPrint) and email notifications.",
        "Built responsive UI using React 18, Zustand state management, and Tailwind CSS with role-based route protection guards.",
        "Configured 6-container Docker Compose orchestration for Nginx, FastAPI, PostgreSQL, Redis, Celery Worker, and Celery Beat."
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
    company: "Telite LMS Project",
    period: "Recent Internship",
    type: "Professional Experience",
    bullets: [
      "Automated background data processing and batch analytics pipelines using Python 3.12 (FastAPI), Pandas, and Celery/Redis, accelerating multi-tenant report generation and reducing manual data handling by 60%.",
      "Engineered 15+ RESTful data endpoints and optimized complex PostgreSQL queries incorporating Row-Level Security (RLS), guaranteeing strict multi-tenant data isolation and data integrity across 1,000+ user records.",
      "Orchestrated a 6-container microservices architecture using Docker Compose, Redis, and Nginx, establishing 100% reproducible data environments and seamless background task scheduling."
    ],
    skills: ["Python 3.12", "FastAPI", "PostgreSQL RLS", "Pandas", "Celery", "Redis", "Docker"]
  }
];

export const codeSnippets = {
  pythonDataScience: `# NFHS-4 OLS Regression Modeling Pipeline
import statsmodels.api as sm
import pandas as pd
from statsmodels.stats.outliers_influence import variance_inflation_factor

class RegressionAnalysis:
    def fit_ols(self, df: pd.DataFrame, target: str, predictors: list):
        X = sm.add_constant(df[predictors])
        y = df[target]
        model = sm.OLS(y, X).fit()
        
        # Calculate VIF for multicollinearity audit
        vif_data = pd.DataFrame({
            'predictor': predictors,
            'VIF': [variance_inflation_factor(X.values, i+1) for i in range(len(predictors))]
        })
        
        return {
            'r2': model.rsquared,
            'f_stat': model.fvalue,
            'p_values': model.pvalues.to_dict(),
            'vif': vif_data
        }
`,
  sqlRLS: `-- Multi-Tenant PostgreSQL Row-Level Security (RLS) Policy
ALTER TABLE attendance_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_policy ON attendance_logs
    FOR ALL
    TO authenticated_users
    USING (tenant_id = current_setting('app.current_tenant_id')::uuid);

-- Index optimization for tenant-scoped analytical queries
CREATE INDEX idx_attendance_tenant_timestamp 
ON attendance_logs (tenant_id, timestamp DESC);
`,
  biometrics: `# dlib Face Embedding & Linear SVM Classification
import dlib
import numpy as np
from sklearn.svm import SVC

class FacePipeline:
    def __init__(self, predictor_path, encoder_path):
        self.detector = dlib.get_frontal_face_detector()
        self.sp = dlib.shape_predictor(predictor_path)
        self.facerec = dlib.dlib_face_recognition_resnet_model_v1(encoder_path)

    def extract_128d_embedding(self, rgb_image, face_rect):
        shape = self.sp(rgb_image, face_rect)
        face_descriptor = self.facerec.compute_face_descriptor(rgb_image, shape)
        return np.array(face_descriptor)
`
};
