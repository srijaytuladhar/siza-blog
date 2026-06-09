---
title: "How to migrate a GitLab repo between organizations (step by step)"
description: "Need to move a repository from one GitLab namespace or organization to another without losing commits, branches, or tags? Follow this step-by-step guide."
pubDate: 2026-06-06
author: "Srijay Tuladhar"
image: "/images/gitlab-migrate.svg"
tags: ["GitLab", "Git", "DevOps", "Migration"]
category: "DevOps"
featured: false
---

Migrating git repositories is a common task in software engineering, whether due to company acquisitions, reorganizations, or shifting personal projects into professional organizations.

While GitLab has built-in UI import/export features, they can sometimes fail on large repositories or carry unwanted cache. The most reliable and clean method is doing it via the command line using a **bare clone**. 

Here is the foolproof step-by-step guide to migrating a GitLab repository between groups or organizations while preserving all commits, branches, and tags.

## Prerequisites

Make sure you have:
1. Owner or Maintainer access to both the source repository and the new destination group.
2. A personal access token (PAT) or SSH key configured for both namespaces.

---

## Step 1: Clone the Source Repository as Bare

A bare clone contains all git database history, branches, tags, and commits, but does not contain a working directory check-out of the files. This is perfect for migrations.

```bash
# Clone the repository using the --bare flag
git clone --bare git@gitlab.com:old-org/my-project.git
```

This creates a folder named `my-project.git`. Navigate into it:

```bash
cd my-project.git
```

## Step 2: Create the Target Project on GitLab

Go to the target organization on the GitLab Web UI and create a new project:
1. Click **New Project** -> **Create blank project**.
2. Give it the exact same name or a new name.
3. Keep it empty (**Do not check the option to initialize with a README**).
4. Copy the new repository SSH or HTTPS URL.

## Step 3: Push the Bare Repository to the New Target

Now, we push the local bare repository metadata directly to the new GitLab destination using the `--mirror` flag. This mirrors all branches and tags exactly.

```bash
# Push to the new organization repository
git push --mirror git@gitlab.com:new-org/my-project.git
```

## Step 4: Clean Up

Once the push is complete, you can safely delete the local temporary bare directory.

```bash
# Navigate out and clean up
cd ..
rm -rf my-project.git
```

---

> [!WARNING]
> Pushing with `--mirror` will overwrite any existing content in the target repository. Ensure the target repository is empty before running this command.

## Next Steps

After migrating, do not forget to:
*   Update remote URLs in local checkouts of all developers:
    `git remote set-url origin git@gitlab.com:new-org/my-project.git`
*   Reconfigure CI/CD variables and deploy tokens in the new repository settings.
*   Update package registry files or container registry dependencies pointing to the old organization namespace.
