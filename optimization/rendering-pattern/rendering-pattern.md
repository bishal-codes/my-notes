# Rendering Pattern

## Client-Side Rendering (CSR)

- how it works
  - the browser downloads the HTML file
  - the browser downloads the JavaScript file
  - the JavaScript file executes and fetches the data from the server
  - the JavaScript file renders the data on the page
- pros
  - fast initial load time
  - easy to implement
- cons
  - slow subsequent load time
  - bad for SEO
  - bad for performance
  - bad for accessibility
  - bad for user experience
- when to use
  - when the app is small
  - when the app is not SEO-critical
  - when the app is not performance-critical
  - when the app is not accessibility-critical
  - when the app is not user experience-critical

## Server-Side Rendering (SSR)

- how it works
  - the server fetches the data from the server
  - the server renders the data on the page
  - the server sends the HTML file to the browser
  - the browser renders the HTML file
- pros
  - fast initial load time
  - fast subsequent load time
  - good for SEO
  - good for performance
  - good for accessibility
  - good for user experience
- cons
  - hard to implement
- when to use
  - when the app is large
  - when the app is SEO-critical
  - when the app is performance-critical
  - when the app is accessibility-critical
  - when the app is user experience-critical

### Dynamic SSR

### Static Site Generation (SSG)

- how it works
  - the server fetches the data from the server
  - the server renders the data on the page
  - the server saves the HTML file to the disk
  - the server sends the HTML file to the browser
  - the browser renders the HTML file
- pros
  - fast initial load time
  - fast subsequent load time
  - good for SEO
  - good for performance
  - good for accessibility
  - good for user experience
  - easy to implement
- cons
  - hard to implement
- when to use
  - when the app is large
  - when the app is SEO-critical
  - when the app is performance-critical
  - when the app is accessibility-critical
  - when the app is user experience-critical

## React Server Components (RSC)

- benefits
  - data fetching
  - security
  - caching
  - bundling
  - initial load time
  - streaming
  - seo

| #                    | Client-Side Rendering (CSR) | Server-Side Rendering (SSR) | Static Site Generation (SSG) | React Server Components (RSC) |
| -------------------- | --------------------------- | --------------------------- | ---------------------------- | ----------------------------- |
| render time          | slow                        | fast                        | fast                         | fast                          |
| initial load time    | fast                        | fast                        | fast                         | fast                          |
| subsequent load time | slow                        | fast                        | fast                         | fast                          |
| SEO                  | bad                         | good                        | good                         | good                          |
| performance          | bad                         | good                        | good                         | good                          |
| accessibility        | bad                         | good                        | good                         | good                          |
| user experience      | bad                         | good                        | good                         | good                          |
| implementation       | easy                        | hard                        | hard                         | easy                          |
| when to use          | small app                   | large app                   | large app                    | large app                     |
