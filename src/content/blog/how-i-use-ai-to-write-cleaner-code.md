---
title: "How I use Claude/ChatGPT to write cleaner code faster"
description: "AI assistants are revolutionizing developer workflows. Learn the exact prompt patterns and strategies to generate readable, optimized, and robust code in half the time."
pubDate: 2026-06-09
author: "Srijay Tuladhar"
image: "/images/code-claude.svg"
tags: ["AI", "Claude", "ChatGPT", "CleanCode", "Productivity"]
category: "AI & Productivity"
featured: true
---

Artificial Intelligence has shifted from a novelty to an essential part of the modern developer's toolkit. Tools like Claude 3.5 Sonnet and ChatGPT are no longer just answering simple trivia or writing boilerplate code; they are active pair programming partners. 

However, there is a stark difference between getting AI to write *any* code and getting it to write *high-quality, clean code*. Here is the exact system I use to code faster without sacrificing quality.

## The Three-Step Refactoring Prompt

One of the worst mistakes developers make is asking an LLM: *"Write a script that does X."* This often leads to monolithic, hard-to-maintain code blocks. Instead, I write the draft myself or ask for a basic block, and then apply this refactoring prompt:

> **Prompt:** "Act as a senior staff engineer. Review the following code for:
> 1. Time and Space complexity optimization (O(n) suggestions).
> 2. Clean Code principles (naming, function size, separation of concerns).
> 3. Potential edge cases (null safety, bounds checking).
> Suggest specific improvements with a brief rationale for each."

### Before vs. After Example

Consider this simple JavaScript function that retrieves unique user roles:

```javascript
// BEFORE AI REFACTORING
function getRoles(users) {
  let r = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].active) {
      if (r.indexOf(users[i].role) === -1) {
        r.push(users[i].role);
      }
    }
  }
  return r;
}
```

The refactored version suggested by AI:

```javascript
// AFTER AI REFACTORING
/**
 * Retrieves unique roles for all active users.
 * @param {Array<Object>} users - The list of user objects.
 * @returns {Array<string>} Unique roles.
 */
function getActiveUserRoles(users) {
  if (!Array.isArray(users)) return [];
  
  const activeRoles = users
    .filter(user => user?.active && user?.role)
    .map(user => user.role);
    
  return [...new Set(activeRoles)];
}
```

## How to Avoid AI Hallucinations

To ensure code correctness, I integrate these rules into my AI routine:
1. **Provide Context constraints:** Always specify target language versions (e.g., Node.js v20, ESNext).
2. **Require TypeScript definitions:** Even if writing JavaScript, asking for TS types forces the LLM to think structurally.
3. **Generate Unit Tests:** Immediately ask the AI: *"Write Jest unit tests covering positive, negative, and edge cases for this refactored function."*

> [!TIP]
> Treat AI output like code written by an eager junior developer: review it thoroughly, run it in a sandbox, and verify it with automated tests before committing.
