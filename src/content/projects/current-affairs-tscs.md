---
name: Current Affairs Publishing Platform - Takshasheela School of Civil Services
slug: current-affairs-tscs
description: A role-based editorial platform built for TSCS where teachers can write daily current affairs articles, administrators review and approve submissions, and students can access published content. The platform includes rich text editing, secure authentication, image management, and an editorial approval workflow.
associated: Takshasheela School of Civil Services
type: web-application
images:
  - "/projects/current-affairs/img_1.png"
  - "/projects/current-affairs/img_2.png"
link: "https://currentaffairs.takshashilascs.com/"
github: "private"
bgColor: bg-blue-600
tags:
  [
    "Next.js",
    "React",
    "NextAuth",
    "Next.js API Routes",
    "Role Based Access Control",
    "WYSIWYG Editor",
    "Cloudflare Images",
    "Editorial Workflow",
    "Content Management System",
    "Education Technology"
  ]
status: completed
order: 2
---
# Current Affairs Publishing Platform

### Editorial Platform for Daily Current Affairs & Educational Content

**Role:** Full-Stack Developer
**Duration:** 2026

---

## Overview

To support daily current affairs preparation for competitive examination students, I developed a content publishing platform that enables teachers to write and submit articles while maintaining editorial quality through an approval workflow.

The platform streamlines content creation, review, and publishing, allowing educators to focus on producing high-quality educational content while administrators retain complete control over what is published.

---

## The Challenge

The institute required a centralized system where:

* Teachers could create rich, formatted current affairs articles.
* Administrators could review and approve content before publication.
* Students could access approved articles in a clean, responsive reading experience.
* Images could be uploaded efficiently without increasing server storage costs.

The system also needed role-based access control to ensure that only authorized users could publish content.

---

## My Responsibilities

I was responsible for designing and developing the complete application, including:

* Authentication and authorization
* Blog editor integration
* Editorial approval workflow
* Image upload infrastructure
* Content management APIs
* Public article pages

---

## Solution

### Editorial Workflow

I implemented a role-based publishing workflow consisting of three stages:

1. Teachers create and submit articles.
2. Administrators review the submitted content.
3. Approved articles become publicly available for students.

This ensures that published content meets the institute's quality standards while allowing multiple teachers to contribute independently.

---

### Rich Text Editor

Teachers write articles using a modern WYSIWYG editor, allowing them to create richly formatted content without requiring any HTML or Markdown knowledge.

The editor supports:

* Rich text formatting
* Headings
* Lists
* Embedded images
* Hyperlinks

This provides a familiar writing experience similar to modern blogging platforms.

---

### Image Management

Images are uploaded directly to Cloudflare, reducing storage requirements on the application server while providing fast global delivery through Cloudflare's CDN.

This approach improves:

* Page loading speed
* Scalability
* Storage efficiency
* Image delivery performance

---

### Authentication & Authorization

Authentication is handled using NextAuth, with role-based permissions controlling access to different parts of the application.

Permissions include:

* Teachers can create and edit their own articles.
* Administrators can review, approve, or reject submissions.
* Public users can only access approved articles.

---

## Technical Highlights

### Frontend

* Next.js
* React

### Backend

* Next.js API Routes

### Authentication

* NextAuth

### Editor

* WYSIWYG Rich Text Editor

### Storage

* Cloudflare Image Storage & CDN

---

## Key Technical Decisions

### Approval Workflow

Rather than allowing direct publishing, every article passes through an approval process. This keeps educational content accurate and consistent while enabling collaboration between multiple teachers.

### Serverless API Architecture

Using Next.js API Routes keeps the backend closely integrated with the frontend, simplifying deployment and reducing infrastructure complexity.

### External Image Storage

Storing images on Cloudflare instead of the application server reduces bandwidth usage and improves global performance through CDN caching.

---

## Outcome

The platform provides a streamlined publishing workflow for educators while ensuring that only approved educational content reaches students.

It enables:

* Faster content creation
* Centralized editorial review
* Secure role-based publishing
* Efficient image management
* A scalable foundation for daily current affairs publishing

---

## Technologies Used

* Next.js
* React
* NextAuth
* Next.js API Routes
* WYSIWYG Rich Text Editor
* Cloudflare Images / CDN
