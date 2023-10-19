# Table of Contents
1. [Vite.js](#vitejs)
2. [Why Vite?](#why-vite)
3. [Installation](#installation)

# [Vite.js](https://vitejs.dev/guide/)

- A `Faster Frontend Build tool`, provides a faster and leaner development experience for modern web projects.
    - A `dev server` that provides rich `feature enhancements` over native ES modules, for example extremely fast `Hot Module Replacement (HMR)`.
    - A `build command` that bundles your code with `Rollup`, pre-configured to output highly `optimized static assets` for `production`

`**Note:**  Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD.` [For More](https://rollupjs.org/introduction/)
 
 1. Tree-Shaking: In addition to `enabling the use of ES modules`, Rollup also `statically analyzes the code` you are importing, and will `exclude anything that isn't actually` used. This allows you to build on top of existing tools and modules without adding extra dependencies or bloating the size of your project.

#### [Table of contents](#table-of-contents)

## Why Vite?


1. Vite addresses `issues stemming` from traditional bundlers like webpack and Rollup. It `leverages native ES modules` in browsers and JavaScript tools written in compile-to-native languages for enhanced performance.

2. Problem: Slow Development Feedback
With large applications, `traditional bundlers take a while to start the dev server`, `impacting productivity`. Vite speeds this up by `categorizing modules as dependencies (pre-bundled with esbuild) or source code (served over native ESM)`, delivering faster server start and updates.

3. Problem: Sluggish Updates
Traditional bundlers often `rebuild entire bundles when a file is edited, causing slow updates`. Vite's Hot Module Replacement (HMR) over native ESM improves this by targeting precise module changes, maintaining speed as app size grows.

```bash
4. Vite's Advantages:

    - Dev server with fast HMR over native ESM
    - Improved page reloads using HTTP headers
    - Focus on development speed
    - Production bundling still important for optimal loading or build command for optimized production assets
    - Current plugin API favors Rollup over esbuild for now
    - Opinionated defaults with customization via Plugins and Config.
    - Browser support: native ES Modules, ESM dynamic import, import.meta.
    - Compatible presets for JavaScript and TypeScript templates.

```
#### [Table of contents](#table-of-contents)

## Installation

1. Install Node.js 14.18+. (latest version)

```bash

2. Create a Vite project:

    - Using NPM: npm create vite@latest
        - select framework: `React`
        - select a variant: `JavaScript + SWC` 
        - npm install
        - npm run dev

    - Using Yarn: yarn create vite
    - Using PNPM: pnpm create vite

```

`**Note:** SWC is a fast JavaScript compiler written in Rust like babel, transform our code to make it readable by browsers`

3. File Structure:

    - `index.html` is pivotal as entry point.
    - URLs auto-rebase, no %PUBLIC_URL%.
    - `<root>` serves files, supports multi-page apps.

4. CLI Usage:

    - Run using `npm scripts` or `npx vite`.
    - Available scripts: `dev`, `build`, `preview`.
    - Customize with CLI options like `--port`.

#### [Table of contents](#table-of-contents)

NPM Dependency Resolving and Pre-Bundling:

Vite pre-bundles modules to improve page loading speed and converts CommonJS/UMD modules to ESM.
Rewrites imports to valid URLs for proper browser import.
Example:

javascript
Copy code
import { someMethod } from 'my-dep'
Dependencies are Strongly Cached:

Vite caches dependency requests via HTTP headers.
Allows local editing/debugging of dependencies.
Hot Module Replacement (HMR):

Enables instant, precise updates without page reload.
Supported by Vue, React, and other frameworks.
Example:
When a module changes, the updated module is swapped in without a full page reload.

TypeScript Support:

Vite supports importing .ts files out of the box.
Transpilation is performed using esbuild for speed.
Example:

javascript
Copy code
import { someFunction } from './my-module.ts'
CSS Handling:

Vite handles CSS files, supporting imports and inlining.
Generates separate CSS files for async chunks.
Example:

javascript
Copy code
import './styles.css'
Web Workers Support:

Easily import web worker scripts using constructors or query suffixes.
Allows for inline or URL-based worker loading.
Example:

javascript
Copy code
import MyWorker from './worker.js?worker'
const worker = new MyWorker()
Build Optimizations:

Automatically optimizes CSS code splitting.
Generates preload directives and optimizes async chunk loading.
Example:
Helps reduce network roundtrips and improves application loading speed.


