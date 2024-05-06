# State Management

- managing the state of the application
- library or tool that helps to manage the state of the application
- help to keep track of the data and the UI of the application
- help to make the application more predictable and easier to maintain
- help to share the state between different components of the application
- help to manage the data flow in the application
- help to improve the performance of the application
- help to reduce the complexity of the application
- help to make the application more scalable, testable, maintainable, reliable, secure, accessible, responsive, interactive, and user-friendly

## Tools for State Management

- Redux - a predictable state container for JavaScript apps.
- MobX - a simple, scalable, and powerful state management library for JavaScript apps.
- Context API - a feature of React that allows you to share state between components without having to pass props down through the component tree.
- Recoil - a state management library for React that provides several capabilities that are difficult to achieve with React alone.
- Zustand - a small, fast, and scalable state management library for React.
- XState - a library for creating, interpreting, and executing state machines and statecharts in JavaScript.
- React Query - a library for managing, caching, synchronizing, and updating server state in React applications.
- SWR (Stale-While-Revalidate) - a React Hooks library for remote data fetching.
- Apollo Client - a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.

## Redux

- a predictable state container for JavaScript apps.

  `View/UI (add, remove, update) ---- (dispatch) ----> Action ---- (reducer) ----> State (store) ---- (subscribe) ----> View/UI`

## Context API

- a feature of React that allows you to share state between components without having to pass props down through the component tree.

- Props Data Flow

`App (state) ----- (useCreate) -----> Field (props) ---- (useCreate) ----> Button (props)`

- Context Data Flow

`Provider + App + State ----- (useCreate) -----> Field (context/consumer) ---- (useCreate) ----> Button (context/consumer)`

## Zustand

- a small, fast, and scalable state management library for React.

`
