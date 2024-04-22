# Frontend System Design Components

- Architectural Patterns: Micro-Frontend/Microservices, Serverless, Monolithic

  - Micro Frontend:
    - Iframe,
    - Web Components,
    - Module Federation,
    - Micro Apps/Route based

- Communication Protocols:

  - Long polling (HTTP),
  - Websockets (real-time),
  - Server-Sent Events (SSE: one way communication like notifications and updates),

- Availability:

  - (offline support): service workers, local storage, indexDB, cache storage, cookies, session storage
  - Load balancing & CDN for static

- Accessibility:

  - keyboard accessibility, screen reader, color contrast, focus management, semantic HTML, ARIA roles, alt text for images, skip links, form labels, error handling, focus indicators, etc.

- Consistency:

  - depends on browsers
    - cross-browser compatibility
    - responsive design: css properties, polyfills

- Credibility and Trustworthiness (SEO):

  - meta tags, title tags, alt tags, structured data, sitemap, robots.txt, canonical tags, etc.
  - on-page optimization: keyword research, content optimization, internal linking, title, description, meta, content, performance.
  - off-page optimization: backlinks, social signals, etc.

- Logging and Monitoring:

  - error tracking,
  - performance monitoring,
  - user behavior tracking (analytics),
  - feature usage,
  - infra/capacity monitoring,
  - tools: Sentry, New Relic, Datadog, LogRocket, etc.

- Databases/Caching:

  - HTTP caching
  - in memory caching
  - apollo cache
  - state management: redux, mobx, context api, recoil, etc.
  - local storage, session storage, indexDB, cookies, cache storage, etc.

- Security:

  - DDOS
  - authentication/authorization: JWT, OAuth, SAML, etc.
  - Content Security Policy (CSP),
  - Cross-Site Scripting (XSS),
  - CORS
  - man-in-the-middle attacks

- Performance and Optimization:

  - assets optimization: images, fonts, css, js, etc.
  - delivery options: sse, websockets, long polling, etc.
  - build assets: minification, compression, etc.
  - ssr: server-side rendering, static site generation, etc.
  - service workers: offline support, push notifications, etc.
  - lazy loading, code splitting, etc.
  - perceived performance: skeleton screens, loading spinners, etc.
  - tools: web vitals, lighthouse, etc.

- Testing:
  - unit testing: jest, enzyme, mocha, etc.
  - integration testing: cypress, selenium, etc.
  - end-to-end testing: cypress, puppeteer, etc.
