---
name: Takshasheela School of Civil Services Website
slug: takshasheela-scs
description: The Takshasheela School of Civil Services Website is a modern, responsive website built using Astro and Tailwind CSS. It provides information about the school, its programs, and faculty. It's built mainly focusing in SEO optimization and lead collection.
associated: Takshasheela School of Civil Services
type: web-site
image: ""
images:
  - "/projects/takshashila/img_1.png"
  - "/projects/takshashila/img.png"
  - "/projects/takshashila/img_2.png"
  - "/projects/takshashila/img_3.png"
  - "/projects/takshashila/img_4.png"
  - "/projects/takshashila/img_5.png"

link: https://www.takshashilascs.com
github: "private"
bgColor: bg-violet-500
tags:
  [
    "Supabase",
    "Astro",
    "Vue Components",
    "Tailwind CSS",
    "Cloudflare R2",
    "Google Analytics",
    "Bing Web Master",
    "AI SEO",
    "Search Engine Optimization",
    "Lead Collection"
  ]
status: completed
order: 1
---

# Takshashila School of Civil Services

### Modern, SEO-Optimized Website & Lead Generation Platform

**Role:** Full-Stack Developer (Contractual)
**Duration:** 2026
**Website:** https://takshasheelascs.com

---

## Overview

Takshasheela School of Civil Services is one of Assam's leading coaching institutes for UPSC, APSC, and ADRE examinations. The organization wanted a modern website that could improve search visibility, present its courses professionally, and generate qualified student enquiries without changing the editorial workflow already familiar to the team.

Instead of relying solely on a traditional WordPress website, I built a high-performance Astro-based frontend that uses WordPress as a headless CMS while introducing a structured lead collection system and modern SEO practices.

---

## The Challenge

The previous website had several limitations:

* Limited performance and Core Web Vitals
* Weak SEO foundation for competitive education keywords
* No structured system for collecting and tracking prospective student enquiries
* Difficulty maintaining a modern user experience while continuing to use WordPress for content publishing
* Lack of insight into which pages or courses generated student interest

The goal was to modernize the website without disrupting the institute's existing content workflow.

---

## My Responsibilities

I was responsible for designing and developing the complete frontend architecture, integrating the content management system, implementing lead generation workflows, and optimizing the website for performance and search engines.

My work included:

* Building the complete website using Astro
* Integrating WordPress as a headless CMS
* Designing reusable UI components
* Developing the lead collection system
* Implementing SEO infrastructure
* Connecting Supabase for lead management
* Integrating analytics and bot protection
* Deploying the application on Vercel

---

## Solution

### Modern Headless Architecture

I adopted a headless architecture where WordPress remains responsible for content management while Astro serves the public-facing website.

This approach allowed the institute's staff to continue publishing articles exactly as before while visitors receive a significantly faster and more optimized experience.

---

### Course Experience

I developed dedicated course pages for UPSC, APSC, and ADRE with:

* Dynamic course information
* Online and offline pricing
* Markdown-driven course content
* Interactive tab navigation
* Sticky enrollment sidebar
* Responsive layouts

Course information is stored as Markdown content, making updates simple while keeping the presentation consistent across the website.

---

### Content Platform

The website automatically imports content from WordPress, including:

* Blog articles
* Monthly magazines
* Featured images
* SEO metadata
* Social sharing information

Additional improvements include:

* Automatic table of contents generation
* SEO-friendly URLs
* Optimized image delivery
* Static page generation for improved loading speed

This enables the marketing team to continue using WordPress without learning a new CMS.

---

### Lead Generation System

One of the primary objectives was increasing student enquiries.

I implemented a multi-point lead capture system consisting of:

* A global "Free Demo" popup
* Course-specific callback forms
* A secure backend API for submissions

Every enquiry is validated, protected against bots using Cloudflare Turnstile, and stored in Supabase.

Each lead also records its acquisition source, allowing the admissions team to identify which pages and courses generate the highest interest.

---

### Performance & SEO

Performance and discoverability were major priorities throughout development.

Key improvements include:

* Server-side rendering where appropriate
* Static generation for content pages
* Schema.org structured data
* XML sitemap generation
* Canonical URLs
* Open Graph metadata
* Twitter Cards
* Optimized image loading
* Modern font loading strategy
* Third-party script optimization using Partytown

The result is a website built with search engines and Core Web Vitals in mind from day one.

---

## Technical Highlights

### Frontend

* Astro 7
* React 19
* Vue 3
* Tailwind CSS v4

### Backend & Services

* Supabase
* PostgreSQL
* WordPress REST API
* Cloudflare Turnstile

### Deployment & Analytics

* Vercel
* Google Tag Manager

---

## Key Technical Decisions

### Headless CMS

Keeping WordPress while replacing only the frontend allowed the institute to retain its existing publishing workflow while benefiting from modern web performance.

### Hybrid Rendering

Astro's hybrid rendering model enabled static generation for marketing pages while keeping server-rendered endpoints available for secure lead submission.

### Component-Based Architecture

Reusable layouts and shared UI components simplified maintenance and ensured design consistency throughout the website.

---

## Business Impact

The project transformed the institute's digital presence by introducing:

* A faster and more professional website experience
* Improved SEO infrastructure for long-term organic growth
* Structured lead collection instead of generic contact forms
* Real-time enquiry notifications for quicker follow-up
* Better visibility into which courses generate prospective students
* A scalable content platform that requires minimal developer involvement for ongoing publishing

The admissions team can now respond to new enquiries almost immediately while continuing to manage content through WordPress as they always have.

---

## What I Learned

This project strengthened my experience in:

* Building production-ready Astro applications
* Designing headless CMS architectures
* Creating SEO-focused marketing websites
* Developing secure lead generation workflows
* Balancing developer experience with non-technical editorial workflows
* Optimizing performance without sacrificing functionality
