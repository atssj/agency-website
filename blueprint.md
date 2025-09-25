
# Project Blueprint

## Overview

This project is a static-first web application for a fictional creative agency, built with Astro.js. It's designed to be a fast, performant, and content-focused website that showcases the agency's work, team, and services.

## Project Outline

### Style and Design

*   **Layout:** A single-column layout with a header, main content area, and footer.
*   **Styling:** Minimal styling is in place, with some basic CSS for the hero section, grids, and cards.

### Features

*   **Content Collections:** The project uses Astro's content collections to manage blog posts, team members, and services.
*   **Dynamic Routing:** Dynamic routes are set up for individual blog posts, team members, and services.
*   **Pages:**
    *   `src/pages/index.astro`: The homepage, featuring a hero section.
    *   `src/pages/about.astro`: The "About Us" page, displaying team members.
    *   `src/pages/services/index.astro`: The "Services" page, listing the agency's offerings.
    *   `src/pages/blog/index.astro`: The blog listing page.
    *   `src/pages/portfolio.astro`: A static "Portfolio" page.
    *   `src/pages/contact.astro`: A static "Contact" page.
*   **Components:**
    *   `src/layouts/Layout.astro`: The main layout component, including the header and footer.
    *   `src/components/Header.astro`: The site header with navigation.
    *   `src/components/Footer.astro`: The site footer.
    *   `src/components/Card.astro`: A reusable card component for displaying content previews.
*   **Content:**
    *   `src/content/config.ts`: The content collection configuration file.
    *   `src/content/blog/`: Contains markdown files for blog posts.
    *   `src/content/team/`: Contains markdown files for team members.
    *   `src/content/services/`: Contains markdown files for services.
*   **Deployment:**
    *   A GitHub Action is configured in `.github/workflows/deploy.yml` to automatically build and deploy the application to GitHub Pages on every push to the `main` branch.

## Current Plan

### GitHub Actions for Deployment

*   **Goal:** To automate the build and deployment process of the Astro.js application to GitHub Pages.
*   **Implementation:**
    *   Created a new GitHub Action workflow file at `.github/workflows/deploy.yml`.
    *   The workflow is triggered on every `push` to the `main` branch.
    *   It consists of two jobs:
        1.  `build`: This job checks out the repository, installs Node.js, and builds the Astro application using the `withastro/action`.
        2.  `deploy`: This job depends on the successful completion of the `build` job and deploys the built site to GitHub Pages using the `actions/deploy-pages` action.
*   **Required Configuration:** The user must configure the GitHub repository settings to use GitHub Actions for deployment under the "Pages" section.
