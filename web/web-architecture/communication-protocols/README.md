# Communication Protocols

| Protocol                 | How it works                                                                                                                                  | Use Case                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| HTTP                     | Request/Response protocol, stateless, text-based, synchronous                                                                                 | Web browsing, RESTful APIs                                 |
| WebSockets               | Full-duplex communication, bi-directional, low latency, real-time                                                                             | Chat applications, online gaming                           |
| Server-Sent Events (SSE) | Server-to-client communication, unidirectional, text-based, real-time                                                                         | Live updates, notifications                                |
| Webhooks                 | HTTP callbacks, event-driven, asynchronous, push-based                                                                                        | Integrating third-party services, automation               |
| HTTP/3 (QUIC)            | UDP-based, multiplexing, low latency, encrypted, HTTP/2 features, header compression, faster, improved performance, better network congestion | Streaming media, mobile applications, IoT, Virtual reality |
| HTTPS                    | Secure version of HTTP, encrypted, authentication, data integrity                                                                             | Online transactions, secure communication                  |
| TCP                      | Connection-oriented, reliable, ordered, congestion control                                                                                    | File transfer, email, web browsing                         |
| UDP                      | Connectionless, unreliable, unordered, low latency, multicast                                                                                 | Voice and video streaming, online gaming                   |
| SMTP                     | Email transfer, text-based, store-and-forward, port 25                                                                                        | Sending and receiving emails                               |
| FTP                      | File transfer, client-server architecture, two connections                                                                                    | Uploading files, managing remote servers                   |

<img src="./assets/communication-protocol.gif" alt="communicating gif">

1. HTTP (HyperText Transfer Protocol)
   HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol.

2. HTTP/3
   HTTP/3 is the next major revision of the HTTP. It runs on QUIC, a new transport protocol designed for mobile-heavy internet usage. It relies on UDP instead of TCP, which enables faster web page responsiveness. VR applications demand more bandwidth to render intricate details of a virtual scene and will likely benefit from migrating to HTTP/3 powered by QUIC.

3. HTTPS (HyperText Transfer Protocol Secure)
   HTTPS extends HTTP and uses encryption for secure communications.

4. WebSocket
   WebSocket is a protocol that provides full-duplex communications over TCP. Clients establish WebSockets to receive real-time updates from the back-end services. Unlike REST, which always “pulls” data, WebSocket enables data to be “pushed”. Applications, like online gaming, stock trading, and messaging apps leverage WebSocket for real-time communication.

5. TCP (Transmission Control Protocol)
   TCP is is designed to send packets across the internet and ensure the successful delivery of data and messages over networks. Many application-layer protocols build on top of TCP. `TCP guarantees that no packets are lost, and that they are delivered in the order they were sent.`

6. UDP (User Datagram Protocol)
   UDP sends packets directly to a target computer, without establishing a connection first. UDP is commonly used in time-sensitive communications where occasionally dropping packets is better than waiting. Voice and video traffic are often sent using this protocol.

7. SMTP (Simple Mail Transfer Protocol)
   SMTP is a standard protocol to transfer electronic mail from one user to another.

8. FTP (File Transfer Protocol)
   FTP is used to transfer computer files between client and server. It has separate connections for the control channel and data channel.

Communication Protocol Interview Questions

1. What is short polling, and how does it differ from other communication techniques like
   long polling and WebSockets?
2. Explain the basic workflow of short polling in web development.
3. What are the advantages and disadvantages of using short polling for real-time
   communication?
4. Describe the concept of long polling and how it addresses some of the limitations of
   short polling.
5. What scenarios are suitable for using long polling, and what are its potential drawbacks
6. Explain how long polling can be implemented on the client and server sides.
7. What is a WebSocket, and how does it enable full-duplex communication between
   clients and servers?
8. How does WebSocket handle bi-directional communication, and what are its key
   advantages for real-time applications?
9. Explain the WebSocket handshake process and the role of the "Upgrade" header.
10. What are Server-Sent Events (SSE), and how do they differ from other real-time
    communication techniques?
11. Describe the steps involved in implementing Server-Sent Events in a web application.
12. What types of applications benefit most from using SSE, and what are the potential
    limitations?
13. Define what a webhook is and how it facilitates communication between applications.
14. Compare webhooks with other real-time communication techniques in terms of use
    cases and implementation complexity.
15. When would you choose WebSockets over other communication techniques like short
    polling or long polling, and vice versa?
