
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
    *   A GitHub Action is configured in `.github/workflows/deploy.yml` to automatically build the application and push the output to the `gh-pages` branch on every push to the `main` branch.

## Current Plan

### GitHub Pages Deployment via `gh-pages` Branch

*   **Goal:** To automate the build and deployment process of the Astro.js application to GitHub Pages by pushing the built assets to a `gh-pages` branch.
*   **Implementation:**
    *   **Astro Configuration:** Updated `astro.config.mjs` to include the `site` and `base` properties. This is necessary for Astro to generate correct asset paths for a project hosted in a subdirectory (e.g., `https://username.github.io/repo-name/`).
    *   **GitHub Action Workflow:** Modified the `.github/workflows/deploy.yml` file.
        *   The workflow is triggered on a `push` to the `main` branch.
        *   It uses the `withastro/action@v2` to check out the repository and build the project.
        *   It then uses the `peaceiris/actions-gh-pages@v3` action to take the built site from the `./dist` directory and push it to the `gh-pages` branch.
*   **Required Configuration:** The user must configure their GitHub repository's **Settings > Pages** to:
    *   Set the **Source** to **Deploy from a branch**.
    *   Set the **Branch** to `gh-pages` with the folder as `/ (root)`.
