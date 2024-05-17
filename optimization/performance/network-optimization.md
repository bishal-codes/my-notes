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

## Avoid Redirects

- redirects increase the number of http requests
- use relative URLs
- avoid http to https redirects (use HSTS: HTTP Strict Transport Security - basically a header that tells the browser to always use https for the domain even if the user types http)

## Resource Hinting

- resource hints are used to tell the browser to fetch resources before they are needed
- types of resource hints:

  - `dns-prefetch`: resolve domain names before they are needed
  - `preconnect`: setup connections before they are needed, connect to specific cross-origin domains or servers in advance
  - `prefetch`: fetch resources that will be needed in the future
  - `preload`: fetch resources that will be needed soon
  - `prerender`: render pages before they are needed

- [Resource Hints](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)
- [web page test](https://learn-performance-resource-hints.glitch.me/1)

## Fetch Priorities (Resource Hint Prioritization)

- if the fetch priorities are not set, the browser will fetch resources based on the order they are encountered in the HTML

```html
<link rel="stylesheet" href="styles.css" rel="preload" as="style" />
<link
  rel="stylesheet"
  href="styles.css"
  rel="preload"
  as="style"
  importance="high"
/>
```

- preload css without blocking the rendering of the page

```html
<link
  rel="preload"
  href="styles.css"
  as="style"
  onload="this.rel='stylesheet'"
/>
```

- `importance` attribute - `auto`: default value - `high`: fetch the resource with high priority - `low`: fetch the resource with low priority

the `fetchPriority` attribute is not supported in all browsers

### Early Hints

- `Early Hints` is a feature that allows the server to send a response header to the browser before the actual response is sent to the browser
- the browser can start fetching resources before the actual response is received
- `Link` header is used to send early hints

```http
Link: </styles.css>; rel=preload; as=style
```

- [mdn Early Hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103)
- [chrome Early Hints](https://developer.chrome.com/docs/web-platform/early-hints)

## HTTP Upgrade Methods (HTTP/2, HTTP/3)

| #                          | HTTP/1.0 | HTTP/1.1                      | HTTP/2                      | HTTP/3                      |
| -------------------------- | -------- | ----------------------------- | --------------------------- | --------------------------- |
| Security                   | None     | None                          | TLS 1.2                     | TLS 1.3                     |
| TLS                        | No       | Optional                      | Optional                    | Required                    |
| IP Connections per request | 1        | 1                             | Multiplexed                 | Multiplexed                 |
| multiplexing               | No       | No                            | Yes                         | Yes                         |
| Header Compression         | None     | None                          | HPACK                       | QPACK                       |
| Port                       | 80       | 80                            | 443                         | 443                         |
| Transport                  | TCP      | TCP                           | TCP                         | UDP with QUIC               |
| Semantics                  | None     | HTTP/1.1 Semantics (RFC 7230) | HTTP/2 Semantics (RFC 7540) | HTTP/3 Semantics (RFC 7540) |
| Methods                    | None     | GET, POST, HEAD               | GET, POST, HEAD             | GET, POST, HEAD             |
| Response                   | None     | Multiplexed                   | Multiplexed                 | Multiplexed                 |
| Flow Control               | None     | None                          | Yes                         | Yes                         |
| Server Push                | None     | None                          | Yes                         | Yes                         |
| Prioritization             | None     | None                          | Yes                         | Yes                         |
| Browsers                   | All      | All                           | Chrome, Firefox, Safari     | Chrome, Firefox             |
| Streaming                  | No       | No                            | Yes                         | Yes                         |

## Compression

- [`Web dev Brotli`](https://web.dev/articles/codelab-text-compression-brotli) - developed by Google, better compression than gzip

## HTTP Caching

- `Cache-Control` header - `max-age`, `no-cache`, `no-store`, `public`, `private`, `must-revalidate`, `proxy-revalidate`
- `ETag` header - entity tag, unique identifier for the resource
- `Last-Modified` header - last modified date of the resource
- `Expires` header - expiration date of the resource
- `Vary` header - tells the server to cache different versions of the resource based on the request headers

## Caching Using Service Workers

- service workers are scripts that run in the background and can intercept network requests
- service workers can cache resources and serve them from the cache
- service workers can be used to create offline experiences
