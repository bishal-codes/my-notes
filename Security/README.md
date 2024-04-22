1. [Security Overview](#security-overview)
2. [Cross-site Scripting XSS](#cross-site-scripting-xss)
3. [iFrame Protection](#iframe-protection)
4. [Security Headers](#security-headers)
5. [Client Side Storage Security](#client-side-storage-security)
6. [Secure Communication HTTPS](#secure-communication-https)
7. [Dependency Security](#dependency-security)
8. [Compliance and Regulations](#compliance-and-regulations)
9. [Input Validation and Sanitization](#input-validation-and-sanitization)
10. [Server-Side Request Forgery](#server-side-request-forgery-ssrf)
11. [Permission Policy](#feature-policy)
12. [Subresource Integrity](#sub-resource-integrity)
13. [Cross Site Request Forgery](#cross-site-request-forgery-csrf)

# Security Concepts

- HTTPS
- Input/Output Sanitization
- Security Headers
- CORS
- Authorization, Authentication
- Web Storage
- XSS
- CSRF
- iFrame Protection
- SSRF
- SSJI
- SRI

## Security Overview

- XSS
  - Cross Site Scripting (attackers inject malicious scripts into web pages)
- CSRF
  - Cross Site Request Forgery (trick users into performing actions they did not intend on their website without knowing the victim's credentials.)
- Authentication/Authorization
- Input Validation/Sanitization
- HTTPS
- Security Headers
- iFrame Protection
- Dependency Injection
- Client Storage Security
- Compliance and Regulation
- Server Side Request forgery SSRF
- Server Side JavaScript Injection SSJI
- Feature Flag
- Sub-resource Integrity
- CORS

## Cross Site Scripting XSS

- If someone from another site (external) can injects some scripts into your website or web application and do something unintended.
  An attacker can exploit a vulnerability in an application to execute arbitrary code within the user's browser by inserting malicious script elements or URL parameters that are interpreted as part of a page.
  XSS is a type of security vulnerability where an attacker can insert malicious code into a web application's data stream in order to manipulate the behavior or presentation of the web page.

This can be done by exploiting one of several types of script injection attacks such as:

1. Stored XSS: The attacker inserts malicious code directly into the database
2. Reflected XSS: The attacker sends malicious code via URL parameters
3. DOM-based XSS: The attacker interacts with the webpage using client side techn
4. HTML5 Router XSS: The attacker uses the new HTML5 history API for navigation which leaves no trace on the server.

To prevent XSS attacks you should sanitize user input before rendering it onto your website.
You can use libraries like `xss` or `sanitize-html`. Additionally, make sure that any user submitted content is properly escaped when outputted back to the browser.

| Vulnerability                                       | Mitigation                                                                                                                                   |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| User Session Hijacking (session or cookie stealing) | List all the possible way to take user input                                                                                                 |
| Unauthorized activities                             | use textContent or innerText instead of innerHTML                                                                                            |
| Capturing KeyStrokes                                | Escaping                                                                                                                                     |
| Stealing critical info (hacking DOM)                | Using Library like React, DOMPurify(sanitize)                                                                                                |
| Phishing Attack                                     | CSP Headers (is set from the server which decide what kind of resource and from where the resource can be loaded and controls the execution) |
| -------                                             | Avoid using eval();                                                                                                                          |

### Content Security Policy Headers

- Allowed Resources: we can decide from where (same origin or cross origin) we can load the script, images, font and any resources
- Script Nonces: anything there as inline script, how to ensure that this inline script belongs to you.(put way to differentiate the script either belongs to you or injected by some external party )
- Report-only mode: if someone tries to breach or xss attack or try to load or inject script that loads unexpected,

## iFrame Protection

Suppose your site a.com is loading other site like b.com and c.com. But what if b.com and c.com access critical information of a.com like credentials.

What are the things we should consider if we want to host or run the other business site like google.com in our own site? (because google is one business and it won't allow to load its api.)

| Vulnerabilities           | Mitigation                          |
| ------------------------- | ----------------------------------- |
| Clickhijacking            | X-Frame-Options                     |
| Data theft via JavaScript | CSF: frame-ancestors 'self'/OPTIONS |
| Session and Cookie Theft  | sandbox iframe                      |

## Security Headers

Security headers are `directives browsers must follow that are passed along through the HTTP header response.`

An HTTP header is a response by a web server to a browser that is trying to access a web page.

1. X-Powered-By: tells us that application is built using what kind of server
2. Referrer-Policy: when sharing linkedin/youtube post from one platform to another, you can see `from which sources, the traffic are coming in the telemetry or matrices` and all this is tracked in the response Referrer-Policy https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
3. X-Content-Type-Options: Client request jpg image to server but someone tempered the request by setting or manipulating to HTML/JS. Now in response browser checks the content type. Browser used to do sniffing. in order to prevent it pass option 'nosniff' in OPTIONS
4. X-XXS-Protection: can be used to configure preventing the xxs attack by allowing the header on and blocking the xxs attacks
5. HSTS (Strict Transport Security Header):

## Client Side Storage Security

To ensure that the data in the client storage is secure, we need to:

1. how we store the sensitive information (credentials, session key, tokens) on the client storage (cookie, localStorage, indexedDB)

   - store these kind of data in the server rather than the client storage
   - encrypt the data

   ```js
   // encrypt sensitive data before storing IT
   const sensitiveData = "mySecretPassword";
   const encryptedData = encryptFunction(sensitiveData);
   localStorage.setItem("secret", encryptedData);
   ```

   - set the token expiry

   ```js
   // set the short expiration time for the token
   const token = generateToken();
   localStorage.setItem("token", token);
   setTimeout(() => {
     // token has expired, remove it
     localStorage.removeItem("token");
   }, tokenExpirationTime);
   ```

2. Authentication

- use JWT (JSON Web Token) or OAuth instead of cookies or sessions
- session token expiry
- Multi-factor Authentication

3. Data Integrity (consider we have to store information)

- include checksums with requests and responses

```js
// use checksums or digital signature ro validate data integrity
const dataToStore = "myData";
const checkSum = calculateCheckSum(dataToStore);
localStorage.setItem("data", `${dataToStore}`);
localStorage.setItem("checksum", checkSum);

// when retrieving data
const storedData = localStorage.getItem("data");
const storedCheckSum = localStorage.getItem("checksum");
if (calculateCheckSum(storedData) === storedCheckSum) {
  // data integrity is intact
} else {
  // data has been tampered with
}
```

4. Storage Limit

- 5-10 mb localStorage
- Use IndexedDB if you need more storage space (50-100 mb)
- SessionStorage (5-10 mb)
- Cookie (4kb-20kb)
  Note: Localstorage is not suitable for storing large amounts of data as the size limit is very
  small (usually around 5MB).
- Cache (~100mb)

```js
function hasEnoughSpaceForData() {
  if ("storage" in navigator && "estimate" in navigator.storage) {
    // the storageManager is available
    // you can proceed to check storage usage
    navigator.storage.estimate().then((estimate) => {
      console.log(
        "Usage: " + (estimate.usage / 1024 / 1024).toFixed(2) + " MB"
      ); // storage usage in megabytes
      console.log(
        "Quota: " + (estimate.quota / 1024 / 1024).toFixed(2) + " MB"
      ); // storage quota in megabytes
    });
  } else {
    console.log("This browser does not support the web storage API");
  }
}
```

5. Session Management

- sessionStorage persists only during the browsing session (closing the window or tab will remove it)
- whatever token or session we store should have httpOnly, secure options header

```js
// store session ID in a cookie with HTTP only flag
const sessionID = "adfghfd234ag4";
document.cookie = `session=${sessionID}; HttpOnly; Secure`;

// on server side, associate sessionID with user data
const sessionData = getSessionData(sessionID);
```

## Secure Communication HTTPS

- Data Encryption
  - `SSL/TLS protocols` provide end-to-end encryption (unreadable data) between client and server communication
- Authentication
  - Certificates are used for authentication of servers
  - Public Key Infrastructure (PKI): trusted third party CA issues digital certificates
  - Root certificate authority (CA) signs other CAs which sign individual certificates
  - Browser stores root CA public keys so that it knows who to trust
  - Server presents its digital certificate to the client
- Data Integrity
  - ensures there is no manipulation of data during communication using cryptography, checksums and MAC(Message Authentication Code)
  - HMAC (Hash based message authentication code)
- Protection against Phishing
- Data Privacy and confidentiality
- Compliance and Security Standards: HSTS
- Trust and Reputation
- Search Engine Ranking
- Protection against Browser Warnings
- Faster website loading
- Better User Experience

## Dependency Security

- Regular Audit of dependencies (`npm update`, `npm audit`)
- enforcing auditing (`npm set audit true`) for local
- long time not updated repo: dependabot

  ```bash
  name: Security Scan

  on:
      push:
          branches:
          - main

      jobs:
      security-scan:
          runs-on: ubuntu-latest
          steps:
          - name:Checkout code
          uses: actions/checkout@v2

          - name: set up node.js
          uses: actions/setup-node@v2
          with:
          node-version: '14'

          - name: Install Dependencies
          run: npm ci (--only=production)
          # Run a vulnerability scan using GitHub Code Scanning

          - name: Security Scan
          run: npm audit
  ```

- Code and Dependency Monitoring: CodeQL
- Dependency Locking: package-lock.json
- Security Penetration Testing using tools

## Compliance and Regulations

| Category                 | Compliance                                                        | Actions                                                                                           |
| ------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Data Protection          | GDPR (General Data Protection Regulation) - EU                    | protects the privacy and personal data of the EU citizens                                         |
| Healthcare               | HIPAA (Health Insurance Portability and Accountability Act) - USA | Protects the health information and ensures the confidentiality and integrity of the patient data |
| Financial Services       | PCI DSS (Payment Card Industry Data Security Standard) - Global   | Ensures the secure processing, transmission, storage of credit card information                   |
| Government               | FISMA (Federal Information Security Management ACT) - USA         | Establishes information security standards and guidelines for federal agencies                    |
| Cloud Services           | ISO/IEC 27001 - Global                                            | an international standard for information security management systems(ISMS)                       |
| Accessibility            | WCAG (Web Content Accessibility Guidelines) - Global              | Ensures the web content is accessible to people with disabilities                                 |
| Privacy                  | CCPA (California Consumer Privacy Act) - USA                      | Grants California residents rights concerning their personal information                          |
| Cybersecurity            | NIST Cybersecurity Framework - USA                                | Provides a framework for improving cybersecurity posture applicable across various industries     |
| Web Application Security | OWASP top ten - Global                                            | Highlights the most critical web application security risks.                                      |

### OWASP Top Ten

- Injection Attacks (e.g., SQL injection)
- Cross-Site Scripting XSS
- Authentication and Session Management
- Insecure Deserialization
- Security Misconfiguration
- Sensitive Data Exposure
- XML External Entity XXE
- Broken Access Control
- Security Headers Not Sent
- Cross-Site Request Forgery CSRF

## Input Validation and Sanitization

Input validation is the process of checking user input to ensure it meets certain criteria before processing it further

Things to consider while validating input:

- Use Framework Library (React)
- whitelist validation (what the user is trying to input and what the system is asking for or wants...)
- regular expression
- escape user input
- parameterized URLs
- validate the data types
- length and size of the data
- images and files
- add client side validation
- error handling
- security headers
- regular updates and patches
- security audits and testing
- education and training
- avoid third-party libraries

## Server-Side Request Forgery SSRF

A server-side request forgery (SSRF) vulnerability occurs when an application makes
requests on behalf of a user, without their knowledge or consent. This can be achieved by sending
a specially crafted HTTP request from an attacker's machine to your web server. The
vulnerable code should not trust any information sent in an HTTP header field that was set by
the client. Instead, it should only use information derived from the URL itself.
To protect against SSRF attacks, you need to ensure that none of the following are used
in your implementation:

1. `referer` header
2. `user-agent` header
3. Any other custom HTTP headers added by the client
4. Query parameters
5. Cookies
6. Session IDs
7. IP addresses
8. Hostnames
9. File paths

| Reasons for SSRF            | Mitigation |
| --------------------------- | ---------- |
| invalidate user input       | -------    |
| Lack of whitelisting        | ------     |
| insufficient access control | -------    |
| XML External Entity XXE     | -------    |

## Server Side JavaScript Injection SSJI

Server-side JavaScript injection (SSJI) is a type of security vulnerability where an
attacker injects malicious JavaScript code into a server-side script. If this code is
executed with the privileges of the server process, the attacker can gain full control over
the system. To prevent SSJI, implement proper sanitization techniques such as:

- Removing all non-alphanumeric characters except for hyphens, underscores
  (`[^\w\-]`), dots (`.`), and slashes (`/`).
- Checking if the input contains any HTML tags, which could indicate an XSS attempt.
- Using a library specifically designed for sanitizing user input, like Google’s
  Caja or Microsoft’s AntiXSS Library.

  | Reason                                 | Mitigation                            |
  | -------------------------------------- | ------------------------------------- |
  | User-supplied data                     | Sanitize                              |
  | Untrusted data                         | Remove/Filter                         |
  | Inadequate Input validation            | Implement                             |
  | Direct Execution of user supplied data | ---------                             |
  | using dangerous                        | ------------------------------------- |
  | Insecure deserialization               | ---------                             |

  ## Feature Policy

  - provides a mechanism to allow and deny the use of browser features in a document or within any <iframe> elements in the document.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy

Demo: https://permissions-policy-demo.glitch.me/demo/none-allowed

## Sub resource Integrity

- a security feature that enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match.

https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity

- Browser downloads the resource `integrity`
- generates the cryptographic hash
- compares it to the one integrity attr in the HTTP header

## CORS

Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers
to tell browsers to give a web application running at one origin, access to selected resources from a different

a.com ---------- (api: resources - images,js,css) -------> api.b.com

- SOP (Same Origin Policy): browser follows SOP
- Cross Origin Request (different - protocol, port, subdomain)
  Origin -------------------- Source

- CORS header
  - Access-Control-Allow-Methods: GET, POST, OPTIONS
  - Access-Control-Max-Age: 1728000
  - Content-Type: application/json; charset=utf-8
  - Access-Control-Allow-Credentials: true
  - Access-Control-Expose-Headers: X-Custom-Header
  - Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, X-Custom-Header
  - Access-Control-Allow-Origin: \*

Client ---------- (request) --------> Browser (cross-domain request check) -------- (preflight request with methods: OPTIONS) -------> Server
Server (if permitted) ---------- (preflight response header) -----------> Browser 
Browser ----------- (request) ----------------> Server ------- (response) -------------> Browser ---------- (response) --------> Client

## Cross Site Request Forgery CSRF

A malicious attacker tricks a victim into executing actions within an application in which the victim 
is authenticated by sending a request from the victim’s user agent to the web application in which 
the victim is authenticated, but the request appears to be originated from the application itself.

Reasons: 
- Statelessness of HTTP
- User Authentication

Mitigation:
- Use anti-CSRF tokens
   Website --------------- (formSubmit()) + payload({csrf token}: on first render of website, server will provide csrf token)  ---------> Server

- sameSite cookies
- Referer-based Validate
- Use Captcha
- CSP Header
 - no use get method for update information