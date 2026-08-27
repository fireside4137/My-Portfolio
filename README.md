# 🚀 Swapnil Upadhyay — Personal Portfolio & Data Science Showcase

[![React 18](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite 5](https://img.shields.io/badge/Vite-5.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Python 3.12](https://img.shields.io/badge/Python-3.12-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14.0-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> A modern, high-performance, responsive personal portfolio website built to showcase flagship **Data Science pipelines**, **AI Computer Vision / Deep Voice Biometrics**, and **Multi-Tenant Full-Stack Engineering projects**.

---

## 👨‍💻 About Me

I am a **Computer Science Graduate (B.Tech, CGPA 7.9, GATE 2026 CS Qualified - Score 367)** from **THDC Institute of Hydropower Engineering and Technology (THDC-IHET)** and an alumnus of **Sainik School Ghorakhal (10th: 96.8%)** and **DAV Centenary Public School (12th: 96.6%)**.

My core technical focus lies at the intersection of:
1. **Data Analytics & Econometric Modeling:** OLS regression, hypothesis testing ($t$-tests, ANOVA, $\chi^2$), data cleaning pipelines, and domain validation.
2. **AI & Biometrics:** Computer vision facial recognition (dlib 128-d embeddings + Linear SVM) and deep audio speaker verification (Resemblyzer 256-d d-vectors + Librosa DSP).
3. **Backend & Cloud Architecture:** Multi-tenant database design using **PostgreSQL Row-Level Security (RLS)**, RESTful API design (**FastAPI**), async background task queues (**Redis + Celery**), and containerization (**Docker Compose**).

---

## 🌟 Featured Projects Highlighted in Portfolio

### 📊 1. India Public Health Analytics Pipeline
* **Domain:** Data Science & Econometrics
* **Stack:** Python 3.10+, Pandas, SciPy, Statsmodels, Seaborn
* **Key Achievements:**
  * Cleaned & validated **96 public health indicators across 637 Indian districts** from the NFHS-4 dataset.
  * Fitted a multiple OLS linear regression model ($R^2 = 0.5831, p < 0.0001, \text{VIF} < 10$), proving 4+ Antenatal Care visits ($\beta = +0.34$) and female literacy ($\beta = +0.28$) drive 58.3% of institutional birth rate variance.
  * Executed independent $t$-tests ($t = 12.450, p < 0.0001, \text{Cohen's } d = 0.98$) proving high-literacy districts achieve a **+25.5% higher hospital delivery rate** (84.2% vs 58.7%).
* 🔗 **GitHub Repository:** [India-public-health-analytics](https://github.com/fireside4137/India-public-health-analytics)

### 🎯 2. MarkIt — AI Powered Biometric Attendance System
* **Domain:** AI, Computer Vision & Deep Voice Biometrics
* **Stack:** Python, Streamlit, dlib, Resemblyzer, Supabase Vector DB, Scikit-Learn, OpenCV, bcrypt
* **Key Achievements:**
  * **FaceID Pipeline:** Extracted 128-d facial feature vectors using dlib's 68-point landmark predictor and ResNet deep metric model, training an on-the-fly Linear SVM classifier with $L_2$ norm distance verification ($\text{threshold} \le 0.6$).
  * **Deep Voice Pipeline:** Utilized Resemblyzer d-vector neural network encoders to extract 256-d speaker voiceprints, matching utterance samples against enrolled templates via cosine similarity ($\text{threshold} \ge 0.65$).
* 🚀 **Live Demo Web Application:** [markit-landing-page.vercel.app](https://markit-landing-page.vercel.app)

### 🏢 3. Telite LMS — Multi-Tenant Learning Platform
* **Domain:** Full-Stack & Data Architecture (Software Engineering Internship @ Telite Systems Pvt. Ltd.)
* **Stack:** Python 3.12, FastAPI, PostgreSQL RLS, SQLAlchemy, Pandas, Redis, Celery, Docker Compose
* **Key Achievements:**
  * Engineered backend REST APIs and asynchronous data ingestion pipelines for an enterprise Learning Management System (LMS).
  * Reduced batch report generation latency by **60%** using Celery task queues and Redis caching.
  * Implemented PostgreSQL Row-Level Security (RLS) policies for multi-tenant data isolation across 1,000+ records.

---

## 🛠️ Portfolio Website Tech Stack & Architecture

This portfolio website was designed from scratch as a **standalone engineering project** emphasizing performance, clean UI/UX, and responsiveness.

* **Core Framework:** React 18 (Vite 5)
* **Styling:** Tailwind CSS 3.4 (Custom dark slate palette, glassmorphism, responsive breakpoints)
* **Icons & Visuals:** Lucide React Icons
* **Data Visualization:** Chart.js & `react-chartjs-2`
* **Form & Mail Handling:** FormSubmit API (Direct AJAX delivery to Gmail)
* **Performance Metrics:**
  * **Production Bundle Size:** **~56 KB** (gzipped)
  * **Build Time:** < 2.5 seconds (Vite ESBuild)
  * **Lighthouse Performance Score:** **98 / 100**

### 📐 Project Folder Layout
```
portfolio-website/
├── public/                     # Static assets (Resume.pdf, profile_picture.jpg, football photos)
├── src/
│   ├── main.jsx                # React DOM entrypoint
│   ├── App.jsx                 # Main application layout & state wrapper
│   ├── index.css               # Tailwind directives & glassmorphic utilities
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for resume info, skills & projects
│   └── components/
│       ├── Navbar.jsx          # Responsive header with scroll blur
│       ├── Hero.jsx            # Headline, bio, avatar, and CTA buttons
│       ├── Projects.jsx        # Project showcase cards with metrics & case studies
│       ├── ProjectModal.jsx    # Deep-dive case study drawer modal
│       ├── Skills.jsx          # Categorized technical skills matrix
│       ├── Experience.jsx      # Work experience, education, & achievements timeline
│       ├── FootballPhotosModal.jsx # Fixed-aspect image lightbox carousel
│       ├── ResumeModal.jsx     # Inline PDF resume viewer popup
│       ├── Contact.jsx         # Direct FormSubmit email submission form
│       └── Footer.jsx          # Copyright & quick links footer
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ⚡ Local Setup & Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/fireside4137/portfolio-website.git
   cd portfolio-website
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Local Development Server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:3000` in your browser.

4. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.

---
**Created by Swapnil Upadhyay** • [LinkedIn](https://www.linkedin.com/in/upadhyay-swapnil/) • [GitHub](https://github.com/fireside4137) • [Email](mailto:swapnilupadhyay4137@gmail.com)
