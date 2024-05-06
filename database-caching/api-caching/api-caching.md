# API Caching

- a technique used to store the response of an API request in a cache.
- cache can be used to serve the same response to subsequent requests without having to make the same request to the API again.
- help to reduce the load on the API server and improve the performance of the application.

## Tools for API Caching

- React Query - a library for managing, caching, synchronizing, and updating server state in React applications.
- SWR (Stale-While-Revalidate) - a React Hooks library for remote data fetching.
- Axios - a promise-based HTTP client for the browser and Node.js.
- apollo-client - a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.

## Techniques for API Caching

- cache-first: returns the data from the cache if it is available, otherwise makes a request to the API.
- cache-and-network: returns the data from the cache and then fetches the data from the API to update the cache.
- network-first: fetches the data from the API and then updates the cache with the response.
- network-only: fetches the data from the API without using the cache.
- cache-last: fetches the data from the API and then updates the cache with the response.
- no-cache: fetches the data from the API without using the cache and does not store the response in the cache.
