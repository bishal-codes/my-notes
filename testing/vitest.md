# [Setting Up Testing with React Testing Library and vitest in Vite Project](https://testing-library.com/docs/svelte-testing-library/setup/)

1. Introduction:
Vite facilitates rapid project creation, but it lacks built-in support for React Testing Library (RTL). This guide demonstrates setting up RTL in a Vite React project using vitest, aiming to become a Jest alternative for Vite.


2. Create Vite React Project:

```bash
npm create vite@latest my-vite-app --template react
```

3. Install React Testing Library, vitest, and other dependencies:

```bash
npm i -D @testing-library/jest-dom @testing-library/react @testing-library/react-hooks @testing-library/user-event jsdom vitest
```

4. Setup vitest: Create a setupTests.js file at the root with:

```javascript
import "@testing-library/jest-dom";
```

5. Create a test-utils.js file at the root:

```javascript
import { render } from "@testing-library/react";

const customRender = (ui, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
```

6. In vite.config.js, add:

```javascript
export default defineConfig({
  // ...
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
  },
});
```

7. In package.json, add test scripts:

```json
"scripts": {
    // ...
    "test": "vitest",
    "coverage": "vitest run --coverage"
},
```

8. Write Tests: Create tests in your component files, for instance, App.test.jsx.

```jsx
import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen, userEvent } from "../test-utils";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<App />);
    const welcomeText = screen.getByText(/Hello Vite \+ React!/i);
    screen.debug(welcomeText);
    expect(welcomeText).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(<App />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/count is: 1/i)).toBeInTheDOM();
  });
});
```

9. Run Tests: Execute tests with:

```bash
npm run test
```