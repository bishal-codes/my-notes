# Cookie Storage

- storage that is used to store cookies.
- Cookies are small pieces of data that are sent by the server to the client and are stored on the client's computer.
- used to store information about the user, such as their preferences, login information, and other data.
- The cookie storage is used to store these cookies so that they can be accessed by the server when needed.
- data can be set by client or server and cookie get sent to the server with every HTTP request.
- 4 KB limit per cookie/domain.
- HTTP req/res time can be affected due to the size of the cookie.
- key value pairs.

## types

1. Session Cookies:
   - stored in memory and are deleted when the browser is closed.
   - used to store temporary data that is only needed for the duration of the session.
   - e.g., login information, shopping cart items.
2. Persistent Cookies:
   - stored on the client's computer and are not deleted when the browser is closed.
   - expires on defined expiryation date (or after a certain number of days).
   - used to store data that needs to persist across sessions.
   - e.g., user preferences, language selection.

## Usage

```js
// set cookie
document.cookie = "key=value;expires=" + expireDate.toUTCString() + ";path=/";
// get cookie
const cookie = document.cookie;
// remove cookie
document.cookie = "key=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
```

Note: `expires` attribute should be set to a date in the future to create a persistent cookie. If it is omitted, then the cookie becomes a session cookie.
Note: `expires` attribute should be set to a date in the past to delete a cookie.

To access values from JavaScript you need to parse the cookie string.

```js
function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
```

## Security

- httpOnly flag can be set to prevent access to cookies from JavaScript. This is useful when you want to protect sensitive information stored in cookies.
- configure expiry date to prevent cookies from being stored indefinitely.
- sameSite attribute can be set to prevent cross-site request forgery (CSRF) attacks.
- domain/path attribute can be set to restrict access to cookies to a specific domain or path.
- secure attribute can be set to ensure that the cookie is only sent over HTTPS.

## when to use

- authorization tokens - e.g., JWT tokens.
- light data (user preferences, language selection).
- data that needs to be shared across different pages of the same domain.

## when not to use

- sensitive data - e.g., passwords, credit card information.
- large data sets - 4 KB limit per cookie/domain.
- data that needs to be shared across different domains - use `localStorage` or `IndexedDB` instead.
