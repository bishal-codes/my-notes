# Network Optimization

- critical rendering path
- minimize the number of http requests
- avoid redirects
- resource hinting
- fetch priorities
- http upgrade methods (http/2, http/3)
- compression: brotli, gzip
- http caching: cache-control, etag, last-modified
- caching using service workers
- early hints

## Critical Rendering Path

- sequence of steps the browser takes to render a webpage
- steps:

  - DOM construction
  - CSSOM construction
  - Render Tree construction
  - Layout
  - Paint
  - Composite Layers
  - display content on the screen

- `CSS is render blocking` - render tree construction is blocked until CSSOM is constructed.
- `JavaScript is parser blocking` - DOM construction is blocked until JavaScript is executed.
- first packet is 14kb

## Minimize HTTP Requests

- Challenges

  - connection time (DNS, TCP, SSL)
  - browser limits (6-8 connections per domain)
  - latency (RTT - round trip time)

- Solutions
  - inline CSS/JS
  - base64 for small images
  - svg for icons
  - combine CSS/JS files
  - use image sprites
  - use data URIs
  - use lazy loading
  - use resource hints
  - use prefetching
  - use server push
