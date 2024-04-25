# Automation Testing

- Testing a software application using automation tools
- find bugs, regressions, and other issues

- E2E Testing: testing the entire application from start to finish (e.g., user registration)
- Tools: Puppeteer, Cypress, Selenium

## Puppeteer

- Node.js library that provides a high-level API to control Chrome or Chromium over the DevTools Protocol. It can generate HTML reports for test results.

Core Features:

- Generate screenshots and PDFs of pages
- Crawl a SPA and generate pre-rendered content (i.e., "SSR")
- Automate form submission, UI testing, keyboard input, etc.
- Create an up-to-date, automated testing environment (e.g., run your tests directly in the latest version of Chrome)

- uses IIFE (Immediately Invoked Function Expression) to run the code immediately after it is defined. WHY?
  - It allows us to encapsulate our code within a function. This means that any variables or functions declared inside this function are not accessible from outside the function.

To avoid polluting the global scope. This is especially important when working with libraries or frameworks that may have their own variables and functions.

### Configuration

1. Install Puppeteer

```bash
npm i puppeteer
```

2. Create a test file

```javascript
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
```

3. Run the test

```bash
node test.js
```
