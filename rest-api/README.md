## sending or posting data using rest.http

- need to send data as object as json file
- need to specify what type of data are we sending by sending HEADER - `Content-Type: application/json`

## HTTP (HyperText Transfer Protocol)

HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol.

- client sends request to the server and waits for the response from it.
  The request contains information about the method used, the URL of the resource, and the version of HTTP being used. The server responds with the status of the request and the requested resource.
- Request Methods : GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD

## What is REST API?

REST stands for Representational State Transfer. It is an architectural style for designing networked applications. REST is a lightweight alternative to mechanisms like RPC (Remote Procedure Calls) and Web Services (SOAP, WSDL, etc).

### Architectural Constraints

User ---- UI/Frontend ---- Server

1. 1-tier architecture (Monolithic)

User ----- [UI/Frontend + Server]

2. 2-tier architecture (Client-Server)

User ----- [UI/Frontend] <--- (REST API) ---> [Server/backend]

3. 3-tier architecture

User ----- [UI/Frontend] <--- (REST API) ---> [Server/backend] <--- (REST API) ---> [Database]

### REST API

REST API is a set of rules that developers follow when they create their API. One of the rules states that you should be able to get a piece of data (called a resource) when you link to a specific URL.

- A style of building web applications and APIs that focuses on interactivity and simplicity.
- REST APIs are stateless, meaning that calls can be made independently of one another, and each call contains all of the data needed to complete itself successfully.
- REST APIs are designed around resources, which are any kind of object, data, or service that can be accessed by the client.
- REST APIs use a uniform interface, which helps to decouple the client and the server.
- REST APIs are driven by hypermedia links that are contained in the representation. This means that the client interacts with the server by exchanging representations of resources.
- The main constraints for designing RESTful systems
  - Client-Server
  - Stateless
  - Cacheable
  - Layered System
  - Uniform Interface
  - Code on Demand (optional)

#### HTTP (Hypertext Transfer Protocol)

- REST APIs use HTTP methods to perform different operations. The most common operations are GET, POST, PUT, PATCH, and DELETE.

## Why REST API?

- easy to build and understand.
- REST API is stateless, meaning that calls can be made independently of one another, and each call contains all of the data needed to complete itself successfully.
- flexible: can be used with any programming language.
- Scalable: can be used with any type of application.
- flexibility with data: can be used with any type of data (json, xml, etc).
- Uniform interface: REST APIs use a uniform interface, which helps to decouple the client and the server. This means that clients don't need to know anything about the server, and servers don't need to know anything about the client.
- statelessness: each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. Session state is therefore kept entirely on the client.
- caching: responses must define themselves as cacheable or not to prevent clients from reusing stale or inappropriate data in response to further requests.
- separation of concerns: client and server are independent of each other, and can evolve separately without any dependency on each other.
- interoperability (language agnostic):
- security: REST APIs can be secured using HTTPS, which encrypts the data being sent between the client and the server.

## Building blocks of REST API

1. Request

<img src="./assets/request-https.png" alt="Request" />

2. Response

<img src="./assets/response.png" alt="Response" />

### URL (Uniform Resource Locator) parts

`https://www.example.com/forum/questions?tag=networking&order=newest#top`

- `https` - protocol, scheme
- `www.example.com` - domain name, hostname
  - `www` - subdomain
  - `example` - second-level domain
  - `com` - top-level domain (TLD)
- `/forum/questions` - path
  - `/forum` - directory
  - `/questions` - file
- `?tag=networking&order=newest` - query string
  - `tag=networking` - key-value pair (parameter)
  - `order=newest` - key-value pair (parameter)
- `#top` - fragment identifier

### HTTP Methods

### CRUD Operations

| Operation | Description                 | HTTP Method |
| --------- | --------------------------- | ----------- |
| Create    | Create a new resource       | POST        |
| Read      | Read a resource             | GET         |
| Update    | Update an existing resource | PUT/PATCH   |
| Delete    | Delete a resource           | DELETE      |
| HEAD      | Get metadata of a resource  | HEAD        |
| OPTIONS   | Get allowed methods         | OPTIONS     |
| CONNECT   | Connect to a server         | CONNECT     |
| TRACE     | Trace a request             | TRACE       |

**PUT/PATCH** - PUT is used to update the entire resource, while PATCH is used to update part of the resource.

### Headers

### Request

### Response

### Status Codes

## Postman

## HTTP 1/2/3

## Best Practices

## Advance Concepts
