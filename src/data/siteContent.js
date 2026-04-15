export const siteContent = {
  seo: {
    title: 'Dev Varshney | Portfolio',
    description: 'Portfolio of Dev Varshney, AI/ML Engineer, Backend & DevOps Engineer, and scalable systems builder.',
  },
  hero: {
    greeting: 'Portfolio / 2026',
    name: 'Dev Varshney',
    role: 'AI/ML Engineer | Backend & DevOps Engineer | Scalable Systems Builder',
    summary:
      'I build production-oriented AI systems, backend services, and cloud-backed infrastructure with a focus on scalability, deployment quality, and real-world problem solving.',
    featuredTitle: 'Building AI systems with backend and DevOps depth.',
    featuredSummary:
      'From crowd intelligence platforms to RAG-based assistants and deployment pipelines, I work across ML, APIs, infra, and product-grade execution.',
    primaryCta: {
      label: 'View Projects',
      href: '#projects',
    },
    secondaryCta: {
      label: 'Contact Me',
      href: '#contact',
    },
    badges: ['Final Year CSE Student', 'AI + Backend + DevOps', 'Production-minded Builder'],
    stats: [
      { value: '6+', label: 'Core Projects' },
      { value: '3', label: 'Key Certificates' },
      { value: '2026', label: 'Graduation Year' },
    ],
  },
  about: {
    title: 'About',
    text:
      'Final-year Computer Science Engineering student with strong hands-on experience in Artificial Intelligence, Machine Learning, and backend system design. Proven ability to build end-to-end AI applications, including computer vision systems, NLP pipelines, and production-ready APIs. Experienced in developing and deploying solutions across ML modeling, RAG-based systems, and cloud-backed architectures, with a focus on scalability and real-world impact. Currently building systems like AI-powered crowd intelligence platforms and hyperlocal commerce infrastructure, combining AI, cloud, and DevOps to solve large-scale operational problems. Driven by a builder mindset, with a long-term vision to create globally scalable, tech-first products.',
    highlights: [
      { label: 'Based In', value: 'Ghaziabad, India' },
      { label: 'Primary Stack', value: 'Python / FastAPI / ML' },
      { label: 'Best At', value: 'AI Systems + Backend' },
      { label: 'Goal', value: 'Scalable Global Products' },
    ],
  },
  services: {
    title: 'What I Focus On',
    items: [
      {
        index: '01',
        title: 'AI/ML Systems',
        description: 'Computer vision, classical ML, document intelligence, RAG pipelines, and applied AI systems built for real use cases.',
      },
      {
        index: '02',
        title: 'Backend Engineering',
        description: 'API-first architecture, modular backend design, secure data handling, and scalable system foundations.',
      },
      {
        index: '03',
        title: 'DevOps & Deployment',
        description: 'Dockerized apps, CI/CD workflows, cloud deployment, and infrastructure patterns that move projects toward production.',
      },
    ],
  },
  skills: {
    title: 'Skills',
    items: [
      'Python',
      'SQL',
      'OOPs',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'YOLOv8',
      'OpenCV',
      'Crowd Density Analysis',
      'TF-IDF',
      'Cosine Similarity',
      'LangChain',
      'FAISS',
      'ChromaDB',
      'RAG Pipelines',
      'Mistral',
      'Ollama',
      'FastAPI',
      'Flask',
      'REST APIs',
      'Docker',
      'Jenkins',
      'GitHub Actions',
      'Streamlit',
      'AWS',
      'GCP',
      'Firebase',
      'Git',
      'GitHub',
    ],
  },
  achievements: {
    title: 'Achievements & Certificates',
    items: [
      {
        label: 'Certificate',
        title: 'Google DeepMind — Train a Small Language Model',
        description: 'Completed focused learning around small language model concepts and practical GenAI foundations.',
      },
      {
        label: 'Program',
        title: 'Gen AI Academy 2.0 — Google Cloud (Hack2Skill)',
        description: 'Participated in structured learning around generative AI systems, tools, and cloud-oriented workflows.',
      },
      {
        label: 'Participation',
        title: 'Google Cloud Arcade Program Participant',
        description: 'Worked through cloud learning and hands-on platform exposure within the Google Cloud ecosystem.',
      },
    ],
  },
  projects: {
    title: 'Selected Projects',
    items: [
      {
        tag: 'AI Platform',
        name: 'CrowdShield AI (CivicSentry Core)',
        description: 'AI-powered crowd risk intelligence system for real-time crowd monitoring and risk prediction using computer vision and advisory workflows.',
        highlights: [
          'YOLOv8-based crowd density detection.',
          'RAG-based AI advisory system.',
          'Real-time dashboard for monitoring and alerts.',
        ],
        tech: ['Python', 'YOLOv8', 'OpenCV', 'LangChain', 'FAISS', 'FastAPI', 'Streamlit', 'Docker'],
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        tag: 'RAG Assistant',
        name: 'CourseMate AI',
        description: 'AI-powered educational assistant that queries documents using LLM workflows and vector search.',
        highlights: [
          'PDF to embedding to retrieval pipeline.',
          'Context-aware AI responses.',
          'Retrieval-backed educational assistance.',
        ],
        tech: ['Python', 'LangChain', 'ChromaDB', 'Mistral AI'],
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        tag: 'Backend System',
        name: 'Finance Backend System',
        description: 'Scalable backend architecture for managing financial workflows and API-driven services.',
        highlights: [
          'Designed REST APIs for financial operations.',
          'Structured database models with secure handling.',
          'Modular and scalable backend design.',
        ],
        tech: ['FastAPI', 'SQLAlchemy', 'PostgreSQL/MySQL'],
        liveUrl: '#',
        repoUrl: 'https://github.com/dev200413y/Zorvyn_backend-fianace',
      },
      {
        tag: 'DevOps Project',
        name: 'Two-Tier Flask App',
        description: 'Production-ready deployment of a Flask and MySQL application with automated CI/CD workflows.',
        highlights: [
          'Dockerized multi-container setup.',
          'CI/CD pipeline using Jenkins and GitHub Actions.',
          'Automated deployment on AWS.',
        ],
        tech: ['Flask', 'MySQL', 'Docker', 'Jenkins', 'AWS'],
        liveUrl: '#',
        repoUrl: 'https://github.com/dev200413y/DevOps-Project-Two-Tier-Flask-App',
      },
      {
        tag: 'Recommendation Engine',
        name: 'Movie Recommendation System',
        description: 'Content-based recommendation engine using NLP similarity scoring for personalized suggestions.',
        highlights: [
          'TF-IDF and cosine similarity.',
          '5000+ dataset processing pipeline.',
          'API and frontend integration.',
        ],
        tech: ['Python', 'Pandas', 'NumPy', 'FastAPI', 'Streamlit'],
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        tag: 'ML App',
        name: 'Heart Disease Prediction App',
        description: 'Machine learning-based healthcare prediction system for heart disease risk assessment.',
        highlights: [
          'KNN model with tuning.',
          'Full EDA and preprocessing pipeline.',
          'Real-time prediction interface.',
        ],
        tech: ['Python', 'Scikit-learn', 'Streamlit'],
        liveUrl: '#',
        repoUrl: '#',
      },
    ],
  },
  experience: {
    title: 'Experience & Education',
    items: [
      {
        period: 'July 2025',
        title: 'Vocational Trainee | Harduaganj Thermal Power Station, UPRVUNL',
        detail: 'Exposure to enterprise IT systems and SAP workflows with understanding of large-scale data operations.',
      },
      {
        period: '2022 - 2026',
        title: 'B.Tech — Computer Science Engineering | Raj Kumar Goel Institute of Technology, Ghaziabad',
        detail: 'Final-year Computer Science Engineering student focused on AI, backend systems, DevOps, and production-oriented software building.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    summary:
      'Use the form or connect through my professional links. I am open to internships, full-time roles, and meaningful product-building opportunities.',
    responseNote: 'Replies go directly to my inbox through the contact form.',
    location: 'Ghaziabad, India',
    formAction: 'https://formsubmit.co/varshney.dev.013@gmail.com',
    formSubject: 'New portfolio message for Dev Varshney',
    successRedirect: 'https://your-domain.com/?submitted=1#contact',
    successMessage: 'Message sent successfully. I will get back to you soon.',
    links: [
      { label: 'GitHub', href: 'https://github.com/dev200413y' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/varshney-dev-200413y' },
      { label: 'Resume', href: '#' },
    ],
  },
  footer: {
    copy: 'Dev Varshney | AI/ML Engineer, Backend & DevOps Engineer, Scalable Systems Builder.',
  },
};
