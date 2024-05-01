# SessionStorage

- storage mechanism that allows you to store key-value pairs in the browser.
- The data stored available only for the duration of the page session.
- The data is deleted when the page session ends.
- data of 5mb per domain
- synchronous, meaning that it blocks the main thread when reading or writing data.
- duplicating the data in the sessionStorage of the same origin, the data will be shared between the tabs.

### Usage

```js
// set item
sessionStorage.setItem("key", "value ");
// get item
sessionStorage.getItem("key");
// remove item
sessionStorage.removeItem("key");
// clear all items
sessionStorage.clear();
```

Note: The values stored must be `strings`. If you want to store an object, you need to `stringify` it first.

```js
const obj = { a: 1 };
sessionStorage.setItem("key", JSON.stringify(obj));
const storedObj = JSON.parse(sessionStorage.getItem("key"));
```

## Security

- storage limit
- xss attacks
- same-origin policy
- cross-origin resource sharing (CORS)
- session expiry

## when to use

- temporary sensitive data - e.g., tokens, session data.
- data that needs to be cleared when the tab is closed.
- data that needs to be shared across tabs of the same origin.

## when not to use

- large data sets - `5MB` limit per domain.
- async operations - `synchronous` nature can block the main thread.
- avoid long term storage - use `localStorage` instead.
