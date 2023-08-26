React components have two types of logic: Render Logic and Event Handler Functions. 🔄🤝

1️⃣ Render Logic:
Render Logic resides at the top level of the component function and determines how the component's view looks. 🎨✨ It is executed each time the component renders, generating JSX (visual elements). ⚙️

2️⃣ Event Handler Functions:
Event Handler Functions respond to specific events (like change events) within the component. When triggered, they perform actions such as updating state, making API calls, or navigating. 🎯📡

Let's refresh some Functional Programming Principles: 🔄⚡

🔹 Side Effect:
Side effects involve dependencies on or modifications of external data. They can include HTTP requests, DOM manipulation, or changes to variables outside the function scope. Side effects aren't necessarily bad; programs need interaction with the outside world to be useful! 💡🌍

🔹 Pure Function:
Pure functions have no side effects. They don't modify variables outside their scope and always return the same output for the same input. 🧪🔒

Now, applying these principles to React's Render Logic: 🎯⚛️

☝️ Components must be 📌 pure regarding render logic. For the same props, a component should consistently return the same JSX output. This ensures predictable rendering! 🔄✨

☝️ Render logic should have no side effects. It shouldn't make network requests, start timers, directly use the DOM, or mutate objects outside the function scope (including props). 🎯🎯Updating state in render logic leads to infinite loops! ❌🔄

However, event handler functions allow and encourage side effects. They handle interactions with the outside world. React's special hook, useEffect, is perfect for managing side effects and cleanup! ⚙️🧹