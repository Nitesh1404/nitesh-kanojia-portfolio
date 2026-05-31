// ============================================================
//  ✏️  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
//  Every section is driven from this single data file.
// ============================================================

import { PortfolioData } from '../models/portfolio.model';

export const PORTFOLIO_DATA: PortfolioData = {

  // ── HERO ──────────────────────────────────────────────────
  name: 'NITESH',
  nameLine2: 'KANOJIA',
  tagline: 'Software Developer — Java & Spring Boot',
  summary: `Backend engineer building payment systems at scale. Handling
    <strong style="color:var(--cyan)">5,000 TPS</strong> in production,
    optimizing latency, and shipping reliable microservices that don't break at 3AM.`,
  location: 'Mumbai, India',

  stats: [
    { value: 5000, label: 'Max TPS' },
    { value: 30,   label: '% Latency Cut' },
    { value: 99,   label: '% Delivery Rate' },
    { value: 892,  decimal: '8.92', label: 'CGPA' }
  ],

  heroDeco: [
    '<backend_developer />',
    '<upi_payments />',
    '<5000_tps />',
    '<spring_boot />',
    '<kubernetes />'
  ],

  // ── SKILLS ────────────────────────────────────────────────
  skills: [
    {
      icon: '⚙️',
      name: 'Languages',
      tags: [
        { label: 'Java',       hot: true },
        { label: 'SQL',        hot: true },
        { label: 'JavaScript', hot: false }
      ]
    },
    {
      icon: '🚀',
      name: 'Frameworks',
      tags: [
        { label: 'Spring Boot',    hot: true },
        { label: 'Spring WebFlux', hot: true },
        { label: 'Spring MVC',     hot: false }
      ]
    },
    {
      icon: '🗄️',
      name: 'Databases',
      tags: [
        { label: 'Oracle',      hot: true },
        { label: 'MongoDB',     hot: false },
        { label: 'YugabyteDB',  hot: false },
        { label: 'PostgreSQL',  hot: false }
      ]
    },
    {
      icon: '🛠️',
      name: 'Tools & Infra',
      tags: [
        { label: 'Kubernetes', hot: true },
        { label: 'Git',        hot: false },
        { label: 'Maven',      hot: false },
        { label: 'JMeter',     hot: false },
        { label: 'Postman',    hot: false },
        { label: 'Dynatrace',  hot: false }
      ]
    }
  ],

  // ── EXPERIENCE ────────────────────────────────────────────
  experience: [
    {
      company: 'Mindgate Solutions',
      product: 'UPI Product – PSP Switch',
      date: 'May 2025 – Present',
      role: 'Software Developer – Java',
      bullets: [
        `Built and maintained backend APIs for UPI payment processing handling up to
         <span class="tps-badge">5,000 TPS</span>
         with consistent low-latency responses in a live production environment.`,
        `<span class="exp-highlight">Diagnosed and resolved a DB connection pool exhaustion bug</span>
         using JMeter load tests — tuned HikariCP configuration which cut
         <strong style="color:var(--orange)">P99 latency by 30%</strong>.`,
        `Deployed and managed microservices on <span class="exp-highlight">Kubernetes</span>,
         ensuring horizontal scalability and fault-tolerant service architecture.`,
        `Analyzed end-to-end UPI transaction lifecycle, implementing fixes for edge-case
         failure scenarios and ensuring secure, accurate payment processing.`,
        `Implemented <span class="exp-highlight">reactive programming using Spring WebFlux</span>
         for non-blocking API handling, improving throughput under high concurrency.`
      ]
    }
    // ➕ Add more jobs here in the same format
  ],

  // ── PROJECTS ──────────────────────────────────────────────
  projects: [
    {
      num: '01',
      icon: '💼',
      name: 'Recruitment Portal',
      stack: ['Java Spring Boot', 'Oracle', 'REST APIs', 'Angular'],
      description: `Full hiring management system with job postings, candidate tracking, and status
        updates. Role-based access for admin, recruiter, and candidate with separate permissions.`,
      metrics: [
        'Query time 800ms → 120ms',
        '3 role types',
        'Google Meet integration',
        'Concurrent-safe locking'
      ]
    },
    {
      num: '02',
      icon: '📬',
      name: 'Notification Orchestration',
      stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Outbox Pattern'],
      description: `Backend system to route notifications across SMS and Email from a single unified
        API — fully decoupled from business services, extensible for WhatsApp and Push channels.`,
      metrics: [
        '99%+ delivery rate',
        'Exponential backoff retries',
        'Channel-agnostic API',
        'Outbox pattern'
      ]
    }
    // ➕ Add more projects here
  ],

  // ── ABOUT ─────────────────────────────────────────────────
  bio: `I'm a backend developer who genuinely enjoys <strong>solving hard problems under
    pressure</strong>. Whether it's a live production incident or an architectural decision,
    I take full ownership from debugging to deployment.
    <br><br>
    I've built systems that handle real financial transactions for real users — the kind of
    code where bugs cost money. That accountability shapes how I write, test, and ship software.
    <br><br>
    Looking to join a product team where I can contribute to the
    <strong>core backend architecture</strong> and grow into system design decisions.`,

  education: {
    degree: 'B.E. Computer Engineering',
    school: 'Lokmanya Tilak College of Engineering · May 2025',
    cgpa: '8.92'
  },

  values: [
    {
      title: 'Performance Obsessed',
      description: `Found and fixed a HikariCP misconfiguration using load tests that was silently
        bottlenecking production traffic. P99 dropped by 30%.`
    },
    {
      title: 'Reactive & Non-Blocking',
      description: `Comfortable with Spring WebFlux and reactive paradigms for building services
        that stay responsive under serious concurrency.`
    },
    {
      title: 'Ownership Mindset',
      description: `I don't stop at writing the code. I trace full transaction flows, deploy to
        Kubernetes, monitor with Dynatrace, and fix what's broken.`
    }
  ],

  // ── CONTACT ───────────────────────────────────────────────
  contactTagline: 'Open to backend engineering roles, product teams, and conversations about payment infrastructure or distributed systems.',

  contactLinks: [
    { icon: '✉️', label: 'niteshkanojia1010@gmail.com', href: 'mailto:niteshkanojia1010@gmail.com' },
    { icon: '📱', label: '+91 9137683154',              href: 'tel:+919137683154' },
    { icon: '🐙', label: 'GitHub',                      href: 'https://github.com' },
    { icon: '💼', label: 'LinkedIn',                    href: 'https://linkedin.com' },
    { icon: '⚡', label: 'LeetCode',                    href: 'https://leetcode.com' }
  ]
};
