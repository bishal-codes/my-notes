# Buns

-  all-in-one toolkit for JavaScript and TypeScript apps.
- designed as a drop-in replacement for Node.js.

1. installation

```bash
bun run start                 # run the `start` script
bun install <pkg>​             # install a package
bun build ./index.tsx         # bundle a project for browsers
bun test                      # run tests
bunx cowsay "Hello, world!"   # execute a package
```

2. JavaScript Runtimes: Engines and Beyond

JavaScript, or ECMAScript, is a language specification executed by engines like V8 and JavaScriptCore. These engines are open source and form the core of JavaScript execution.

3. Role of Runtimes:

Runtimes extend JavaScript's capabilities by implementing additional APIs. In browsers, runtimes offer web-specific APIs like DOM manipulation and network requests. Node.js, a server-side runtime, provides its own set of global objects and modules.

4. Bun: A Modern JavaScript Runtime:

Bun is designed for `speed`, `TypeScript/JSX support`, `ESM/CommonJS compatibility`, and `web-standard APIs`. It aims for Node.js compatibility while offering a comprehensive toolkit for app development.

