Web Storage - Session Storage 📦 & Local Storage 🏬:

These two essential web storage options, available in all browsers, are widely used for client-side data storage. Tailoring your choice to your specific use case is key.

### What is sessionStorage?

🔷 Session Storage - Stores data within the current page, persisting only until the page is closed. All saved data is automatically removed once the session ends.

The sessionStorage property allows you to access a session Storage object for the current origin. sessionStorage is similar to localStorage, except that while data stored in localStorage has no expiration set, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed or on reloading page to another tab.

### What is localStorage?

🔷 Local Storage - Data stored here persists even after the browser is closed and can be accessed across sessions. The data remains saved until manually cleared or removed.

The localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. Data stored in localStorage remains forever in browser sessions, it's like storing data in ROM or hard-drive.

Both session and local storage offer the following methods for operations:
◼ setItem - Stores data
◼ getItem - Retrieves stored data
◼ removeItem - Deletes saved data
◼ clear - Clears all stored data

👉 Data should be converted to JSON format using JSON.stringify() before storage.
👉 When retrieving stored data, it needs to be converted back to an object format using JSON.parse().

📍 Starting with a simple example:

```javascript
const user = {
  name: "Bishal",
  age: 22
};

// Storing data
const jsonData = JSON.stringify(user);
localStorage.setItem("user1", jsonData);

// Retrieving data
const userFromLS = JSON.parse(localStorage.getItem("user1"));

// Removing data
localStorage.removeItem("user1");

// Clearing all data
localStorage.clear();

// Using keys to retrieve all stored values
for (let i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
}
```

These storage methods provide valuable tools for managing data at the client side, enhancing user experiences in web applications.