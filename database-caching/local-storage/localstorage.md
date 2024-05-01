# LocalStorage

- a `web storage API` that allows you to store data in the browser.
- a `key-value store` that `persists data across browser sessions and tab closures`.
- `synchronous`, meaning that it blocks the main thread when reading or writing data.
- `limited to 5MB` of data per domain.

### Usage

```js
// set item
localStorage.setItem("key", "value");
// get item
localStorage.getItem("key");
// remove item
localStorage.removeItem("key");
// clear all items
localStorage.clear();
```

Note: The values stored must be `strings`. If you want to store an object, you need to `stringify` it first.

```js
const obj = { key: "value" };
localStorage.setItem("key", JSON.stringify(obj));
const storedObj = JSON.parse(localStorage.getItem("key"));
```

## Security

- storing sensitive data in `localStorage` is not recommended.
- encryption can be used to secure data stored in `localStorage`.
- `cross-origin resource sharing (CORS)` can be used to restrict access to data stored in `localStorage`.
- `same-origin policy` restricts access to data stored in `localStorage` to the same origin.
- `cross-site scripting (XSS)` attacks can be used to access data stored in `localStorage`.
- use `sessionStorage` for sensitive data, as it is cleared when the browser tab is closed.

## when to use

- user preferences - e.g., font size, color scheme, language selection.
- caching data that is expensive to fetch from the server.
- non sensitive data that can be shared across tabs and sessions.

## when not to use

- sensitive data - e.g., passwords, tokens, credit card information.
- large data sets - `5MB` limit per domain.
- data that needs to be cleared when the tab is closed - use `sessionStorage` instead.
- data that needs to be shared across different domains - use `cookies` or `IndexedDB` instead.
