- when visit a website, it remembers things about us (like username or the things or items in our shopping cart): because of cookies
- Cookies are small pieces of data that websites store on computer or mobile device.
  - important in web development because they allow websites to remember information about the user such as their preferences or login credentials.

# How Cookies work?

When a user sends a request to server, the server treats each request as if its from a new user.

- to recognize returning users, we add a cookie to the response from the server
- cookie is stored in the users browser, and whenever they send the new request, the browser automatically adds the cookie to it.
- and this allows the server to recognize the user and personalize their experience.

# Setting Cookies

To create a cookie using JavaScript, we can use document.cookie property as:

```js
document.cookie = "username=Bishal Karki";
// This sets a cookie named 'username' with value 'Bishal Karki'. The
// cookie will be valid for the duration of the session (until the browser is closed).
```

We can add an expiry date (in UTC time) and with a path parameter, we can tell the browser what the path the cookie belongs to.

```js
document.cookie =
  "username=Bishal Karki; expires=Thu, 30 Apr 2024 12:00:00 UTC; path=/";
// This sets an expiration date for the cookie. After this time, the browser will remove it
```

# Reading Cookies

To read the value of the cookie, we can use the following:

```js
let allCookies = document.cookie;
console.log(allCookies); // Outputs: username=Bishal+Karki
```

However we will get all cookies in one string much like:
`"username=John Doe; color=blue; ..."`
We need to parse this string into key-value pairs. We do so by splitting the string
on ';' and then on '=' to obtain individual name-value pairs. Here is how you
can extract the `username` from the above string:

```js
let userNameValue = document.cookie
  .split(";")
  .filter((item) => item.includes("username"))[0]
  .split("=")[1];
console.log(`Username: ${userNameValue}`); // Outputs: Username: B
```

# Deleting cookies

To delete the cookie, we can set the expiration date to the past date which will cause the browser to remove the cookie from the users device.

```js
// To delete a cookie, set its expiration date to a past date
document.cookie = "username=; expires=Thu, 01 Jan 1
1970 00:00:01 GMT";
```

# Best Practices

When using cookies in web development, it is important to follow best practices to ensure that the user's privacy and security are protected.

- avoid storing sensitive information in cookies, such as passwords or credit card numbers
- use secure and HTTP-only cookies to prevent XSS attacks and other security vulnerabilities
- set reasonable expiration dates for cookies to ensure that they are not stored on the user's device indefinitely.
- limit the size of your cookies to improve performance and reduce bandwidth usage
- use cookies sparingly and only when necessary to minimize the amount of data stored on the user's device
