browser -----> https://(domain name) ---(req)---> router -----> ISP -----> DNS LOOKUP
DNS LOOKUP ---(domain: IP address)--> Router --> Internet --> Server
Server ---(resp)---> Internet --> Browser

1. Do request from browsers always go to server?

- Even the request for ip address doesn't reach to dns server, it checks on local `browser` storage if there is already ip available or `cached`.

browser ---- (req cached in storage) ----> browser

- Normal browser cache: browser stores the data in clients memory for certain time. It helps in reducing the time to reach to server.
- Service workers: https://service-worker-worker.glitch.me/

- operating system

browser ---- (req cached) ----> system ----> domain and ip

- Router: caches the information of domain

browser ---- (req cached) ----> router ----> domain and ip

Router caches the information of domain name and ip address. It helps in reducing the time to reach to server.

- ISP

browser ---- (req cached) ----> ISP ----> domain and ip, smart data

Domains:

- Root Domain: `.` (dot)
- Top Level Domain: `com`, `org`, `net`, `gov`, `edu`, `int`, `mil`
- Second Level Domain: `google`, `facebook`, `youtube`, `twitter`
- Sub Domain or Third level domain: `www`, `blog`, `mail`, `ftp`, `api`, `cdn`

ICANN: Internet Corporation for Assigned Names and Numbers (ICANN) is a non-profit organization responsible for coordinating the maintenance and procedures of several databases related to the namespaces and numerical spaces of the Internet, ensuring the network's stable and secure operation.

WHOIS Privacy Protection Service, Inc.: WHOIS Privacy Protection Service, Inc. is a company that provides privacy services for domain owners. It is a service that hides the domain owner's personal information from the public WHOIS database.

ISP: Internet Service Provider

Peering by Google/Netflix:

- User experience
- request/response time is reduced

User ------ (local ISP) ------ Google/Netflix Server ------ (local ISP) ------ Regional ISP (encrypts data and sends to user) ---- Global ISP ----- Regional ISP ------ Local ISP ------ User

ISP ----- Server (TCP handshake: how data is sent and received )
client ------- (SYN: seq no) -------> server
client <------ (SYN+ACK: seq no, ack no) ------ server
client ------- (ACK: ack no) -------> server

User ------ > Server
Browser <------- (dns lookup) -------> Router -------> ISP -------> DNS LOOKUP
Browser <------ (`tcp handshake: how data is sent and received`) -------> Server
Browser <------ (`ssl handshake: in https, secure connection: get certificates/key and encrypt data and send `) ---------> Server
Browser ------ (http get req: communication between client and server) -------> Server
Browser <------ (http response: 14KB) ------ Server (server sends the data in chunks: `first pack of data comes in 14KB, 1st load of data or parcel that is user experience and enough for critical rendering`)
Browser ------ (ACK) ------> Server
Browser <------ (http response: 28KB) ------ Server
Browser ------ (ACK) ------> Server
Browser <------ (http response: 56KB) ------ Server
Browser ------ (ACK) ------> Server

| Loading                                         | Scripting                                                  | Rendering                                     | Painting                                                                                                            | Compositing                                  |
| ----------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------- |
| Req page --- (parsing) ---> Build DOM           | DOM ---- (style calculation) ----> Parse CSS & build CSSOM | execute JS                                    | merge DOM & CSSOM into Render tree (layout)                                                                         | Build and paint the render tree              | turn the layers information into pixels on the screen |
| req page ---> load html --- response <----- DOM | response --- (render and parser blocking) --- GET CSS & JS | RESPONSE --- (render blocking) --- EXECUTE JS | PIXELS --- (trigger reflow) --- RENDER TREE and pixels --- (trigger repaint: change any visible elements) --- PAINT | RESPONSE --- (render blocking) --- COMPOSITE |

Javascript Execution:

load script > parse script (blocks the rendering) > AST (Abstract Syntax Tree) Internalization > Compile > Bytecode Finalization > Execution

1. How web works: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works
   <image src="./assets/how web works.png" alt="How Web Works"/>

2. CSS and CSSOM: https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model
   <image src="./assets/css and cssom.png" alt="CSS and CSSOM"/>

3. Parsing HTML: https://developer.mozilla.org/en-US/docs/Web/HTML/Parser
   <image src="./assets/parse-html.png" alt="Parsing HTML"/>

4. Fetch external resources (CSS, JS): https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
   <image src="./assets/fetch-css-js.png" alt="Fetch External Resources"/>

5. Parse the CSS and Build the CSSOM: https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model
   <image src="./assets/css-parse-and-build-cssom.png" alt="Parse CSS and Build CSSOM"/>

6. Execute JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
   <image src="./assets/execute-js.png" alt="Execute JS"/>

7. Merge DOM and CSSOM into Render Tree: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
   <image src="./assets/merge-dom-cssom-render-tree.png" alt="Merge DOM and CSSOM into Render Tree"/>

8. Build and Paint the Render Tree: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
   <image src="./assets/calculate-layout-paint.png" alt="Build and Paint the Render Tree"/>
