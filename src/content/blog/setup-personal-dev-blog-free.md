---
title: "How to set up a personal dev blog for free in 30 minutes"
description: "Publishing developer guides is a great way to boost your career. Learn how to launch a fast, modern personal blog using Astro and deploy it for free."
pubDate: 2026-06-04
author: "Srijay Tuladhar"
image: "/images/dev-blog.svg"
tags: ["Astro", "GitHubPages", "Netlify", "WebDev"]
category: "Web Development"
featured: false
---

Writing a personal developer blog is one of the best career investments you can make. It builds your personal brand, documents your coding learnings, and can even generate side income. 

Today, you do not need to pay for WordPress hosting or write complex database systems. Using **Astro** (a modern web framework) and free hosting platforms like Netlify or GitHub Pages, you can deploy a blazing-fast, static blog for exactly $0.

Here is how to set it up step by step in under 30 minutes.

---

## Step 1: Initialize Your Astro Blog

Astro is the premier framework for content-heavy sites because it outputs zero client-side JavaScript by default, resulting in instant load times.

Open your terminal and run the Astro creation script:

```bash
# Initialize Astro project in non-interactive mode
npm create astro@latest my-dev-blog -- --template blog
```

Navigate into your folder and start the dev server:

```bash
cd my-dev-blog
npm run dev
```

Open `http://localhost:4321` in your browser to verify the blog template is running.

## Step 2: Customize Your Content

In Astro, blog posts are written in Markdown and stored in the `src/content/blog/` directory. 
*   Open one of the `.md` files in VS Code.
*   Edit the frontmatter (the metadata block at the top of the file enclosed in `---` lines) to update the title, author, description, and tags.
*   Write your article body in standard Markdown format below the frontmatter.

## Step 3: Deploy to Netlify (Or GitHub Pages)

### Using Netlify (Recommended for Speed)
1. Commit and push your code to a new GitHub repository.
2. Sign up for a free account at [Netlify.com](https://netlify.com).
3. Click **Add new site** -> **Import an existing project**.
4. Select GitHub, authorize Netlify, and select your repository.
5. Leave the build commands as default (`npm run build` and `dist` publish directory) and click **Deploy Site**.

Netlify will build and deploy your blog instantly, assigning a free `.netlify.app` subdomain. You can easily connect a custom domain for free in the settings later.

---

> [!NOTE]
> Netlify automatically sets up SSL certificates for your custom domain for free, and rebuilds your site automatically whenever you push new markdown files to your GitHub repository.
