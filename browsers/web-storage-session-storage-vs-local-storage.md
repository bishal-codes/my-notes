Web Storage - Session Storage 📦 & Local Storage 🏬:

These two essential web storage options, available in all browsers, are widely used for client-side data storage. Tailoring your choice to your specific use case is key.

🔷 Session Storage - Stores data within the current page, persisting only until the page is closed. All saved data is automatically removed once the session ends.

🔷 Local Storage - Data stored here persists even after the browser is closed and can be accessed across sessions. The data remains saved until manually cleared or removed.

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