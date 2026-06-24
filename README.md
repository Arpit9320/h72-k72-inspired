# K72 Inspired Agency Website

A modern multi-page frontend recreation inspired by the visual identity and user experience of K72. This project was built to deepen my understanding of React architecture, component-driven development, responsive design systems, advanced GSAP animations, scroll-based interactions, and route transition effects.

## 🔗 Live Demo

**Live Website:** https://h72-k72-inspired.vercel.app/

**GitHub Repository:** https://github.com/Arpit9320/h72-k72-inspired

---

## 📖 Overview

This project recreates selected sections and interactions from the K72 website while implementing them using a modern React-based frontend architecture.

The objective was not to produce a pixel-perfect clone of the entire website, but to reverse-engineer complex UI patterns, build reusable components, implement responsive layouts, and recreate animation-driven user experiences using React and GSAP.

### Implemented Pages

* Home Page
* Projects Page
* Agence Page

---

## 🚀 Tech Stack

### Frontend

* React
* React Router DOM
* Tailwind CSS
* Vite

### Animations

* GSAP
* GSAP ScrollTrigger

### Deployment

* Vercel

### Development Tools

* Git
* GitHub
* VS Code

---

## ✨ Features

### Multi-Page Architecture

Implemented client-side routing using React Router DOM, allowing seamless navigation between multiple pages without full page reloads.

### Custom Stair Route Transition System

Built a custom stair-based page transition animation that enhances navigation and creates a smoother user experience.

#### Highlights

* React Router integration
* GSAP timeline sequencing
* Layered transition panels
* Animated page entry and exit effects
* Reusable transition architecture

---

### Video Hero Section

The homepage features a fullscreen video-driven hero experience.

#### Features

* Autoplay background video
* Layered content positioning
* Responsive scaling
* Mobile-friendly playback
* Optimized media rendering

---

### Scroll-Driven Project Showcase

The Projects page includes interactive project cards that react dynamically to scrolling.

#### Technical Implementation

* GSAP ScrollTrigger
* Dynamic height transformations
* Scroll progress tracking
* Smooth animation interpolation
* Responsive behavior

---

### Dynamic Image Transition System

The Agence page synchronizes visual content with scroll progression.

#### Implementation Details

* Scroll position monitoring
* Dynamic image switching
* Progress-based content synchronization
* ScrollTrigger-powered interactions

---

### Responsive Design System

The application was designed with responsiveness as a primary requirement.

#### Responsive Strategies

* Mobile-first development
* Tailwind utility-based workflow
* Viewport-based scaling
* Flexible layouts
* Responsive typography
* Adaptive spacing system

Supported across:

* Mobile Devices
* Tablets
* Laptops
* Desktop Displays

---

## 🏗️ Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── common/
│   ├── home/
│   └── projects/
│
├── pages/
│
├── routes/
│
├── context/
│
├── App.jsx
│
└── main.jsx
```

### Architectural Goals

* Component Reusability
* Separation of Concerns
* Maintainability
* Scalability
* Clean Folder Structure

---

## 🧠 Technical Challenges & Solutions

### 1. Route Transition Animations

**Challenge**

Creating smooth page transitions without disrupting React Router navigation.

**Solution**

Built a reusable stair-transition component using GSAP timelines and integrated it into the routing workflow.

---

### 2. Scroll-Based Project Card Expansion

**Challenge**

Creating project cards that visually react to scrolling while maintaining smooth performance.

**Solution**

Used ScrollTrigger to track viewport progress and dynamically update card dimensions based on scroll position.

---

### 3. Dynamic Image Synchronization

**Challenge**

Synchronizing visual assets with scroll progression.

**Solution**

Mapped scroll ranges to image indexes and updated displayed assets dynamically based on user interaction.

---

## 📈 Learning Outcomes

Through this project, I strengthened my understanding of:

* React Component Architecture
* React Router DOM
* GSAP Timelines
* GSAP ScrollTrigger
* Route Transition Systems
* Responsive Design Principles
* Dynamic UI Rendering
* State-Driven Interactions
* Frontend Project Organization
* Git & GitHub Workflows
* Vercel Deployment Pipeline

---

## 🔮 Future Improvements

Potential future enhancements include:

* Locomotive Scroll Integration
* Additional K72 Sections
* Enhanced Micro-Interactions
* Asset Optimization
* Lazy Loading Strategies
* Accessibility Improvements
* Performance Auditing
* Advanced Route Transition Variations

---

## 🌐 Deployment

The application is deployed using Vercel.

Production deployment is automatically triggered whenever changes are pushed to the GitHub repository.

---

## ⚠️ Disclaimer

This project is a personal educational frontend recreation inspired by the design and user experience of K72.

It was built solely for learning purposes to practice React, Tailwind CSS, React Router, GSAP, responsive design principles, component architecture, and frontend animation techniques.

All original design concepts, branding, content, and creative direction belong to K72.

Official Website: https://k72.ca

---

## 👨‍💻 Developer

**Hritik Srivastava**

Frontend Development • React • Tailwind CSS • GSAP • Vite • Vercel
