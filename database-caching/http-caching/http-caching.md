# HTTP Caching

- a technique that `allows web servers to store copies of web pages` and serve them to clients without having to re-fetch them from the original source.
- help reduce the load on the server and improve the performance of the website.
- `Caching` is a way to store copies of web pages on the client's computer or on a proxy server so that they can be accessed more quickly.
- common caching mechanisms include `browser caching`, `proxy caching`, and `content delivery networks (CDNs)`.
- common web resources that are cached include `images`, `stylesheets`, `JavaScript files`, and `HTML pages`.

## How it works

- When a client requests a web page, the server sends back the page along with some additional information about how long the page should be cached.
- The client then stores a copy of the page in its cache and uses it to serve future requests for the same page.
- If the client requests the page again before the cache expires, the server can send back a `304 Not Modified` response, indicating that the client should use the cached copy of the page.
- If the cache has expired, the server sends back the updated page along with new caching instructions.

Client --------- ( Request ) --------> Server

Client <-------- ( Response ) -------- Server

## Benefits of HTTP Caching

- Improves the user experience
- Reduces the load on the server
- Improves the performance of the website
- Reduces the amount of data that needs to be transferred between the client and the server
- Reduces the amount of time it takes to load a web page

## Types of HTTP Caching

- **Browser Caching**: The browser stores copies of web pages on the client's computer so that they can be accessed more quickly.
- **Proxy Caching**: A proxy server stores copies of web pages on behalf of clients so that they can be accessed more quickly.
- **CDN Caching**: Content delivery networks (CDNs) store copies of web pages on servers located around the world so that they can be accessed more quickly.

## HTTP Caching Headers

| Header          | Description                                                                           | Example                                        |
| --------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `Cache-Control` | Specifies caching directives ( how and for how long ) for both requests and responses | `Cache-Control: max-age=3600`                  |
| `Expires`       | Specifies an expiration date and time for the cached content                          | `Expires: Thu, 01 Dec 1994`                    |
| `ETag`          | A unique identifier for a specific version of a resource                              | `ETag: "686897696a7c876b7e"`                   |
| `Last-Modified` | The date and time the resource was last modified                                      | `Last-Modified: Tue, 15 Nov 1994 12:45:26 GMT` |
