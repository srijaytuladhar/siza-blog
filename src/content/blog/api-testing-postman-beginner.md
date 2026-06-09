---
title: "API testing with Postman — beginner to intermediate"
description: "Master API testing using Postman. Learn how to group requests into collections, write test assertions, and automate workflows with environment variables."
pubDate: 2026-06-01
author: "Srijay Tuladhar"
image: "/images/postman-testing.svg"
tags: ["API", "Postman", "Testing", "QA"]
category: "API Testing"
featured: false
---

Testing APIs is a core responsibility for backend developers. While tools like cURL are great for quick one-off checks, they fall short when verifying complex workflows, parameter states, or automated test cases.

**Postman** is the industry-standard GUI application that bridges this gap. This guide moves you from basic request dispatch to advanced automated test scripts.

---

## 1. Organizing with Collections & Environments

Never leave requests floating in your Postman history. 

### Collections
Group requests by project or service. A **Collection** acts as a folder containing all related API endpoints (e.g. Authentication, User Profile, Payments).

### Environments
Never hardcode domain names (e.g., `http://localhost:3000`) in your requests. Instead, use environment variables. 
Create two environments: `Local Dev` and `Production`, and define a variable called `baseUrl`.

In your requests, refer to the variable using double curly braces: `{{baseUrl}}/api/v1/users`.

---

## 2. Writing Automated Assertions (Intermediate)

Under the **Tests** tab of any request in Postman, you can write JavaScript code that executes immediately after a response is received. Postman uses a Chai assertion library style.

Here are three essential test scripts you should add to your APIs:

### Verify Status Code is 200 OK
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

### Validate Response JSON Values
If you are testing a login endpoint and want to verify that an access token is returned:

```javascript
pm.test("Response contains access token", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("accessToken");
    pm.expect(jsonData.accessToken).to.be.a("string");
});
```

### Dynamically Store Auth Tokens
If you verify credentials, you can programmatically capture the token and store it as an environment variable for subsequent API requests to use:

```javascript
pm.test("Set environment auth token", function () {
    const jsonData = pm.response.json();
    pm.environment.set("token", jsonData.accessToken);
});
```

---

> [!NOTE]
> By storing variables dynamically, you can daisy-chain requests: running a login request automatically updates the token variable, so your subsequent "fetch profile" request remains authenticated without manual copy-pasting.
