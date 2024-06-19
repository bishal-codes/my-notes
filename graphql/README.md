# GraphQL

1. What is GraphQL?
2. Why GraphQL?
3. REST vs GraphQL
4. Building Blocks of GraphQL
5. App Architecture with GraphQL
6. calling GraphQL APIs from the frontend
7. tools for GraphQL

## What is GraphQL?

- A query language for your API
- A runtime for executing those queries by using a type system you define for your data
- a more efficient, powerful and flexible alternative to REST APIs

Example to understand GraphQL: suppose you have a REST API that returns a list of users. The REST API endpoint might look like this:

```bash
GET /users
```

The response might look like this:

```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": ""
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "email": ""
    }
  ]
}
```

In GraphQL, you would instead send a query to the server that looks like this:

```js
query {
  user(id: "1") {
    name
    posts {
      title
      content
    }
  }
}
```

The server would then respond with the requested data:

```json
{
  "user": {
    "name": "John Doe",
    "posts": [
      {
        "title": "My first post",
        "content": "This is my first post."
      },
      {
        "title": "My second post",
        "content": "This is my second post."
      }
    ]
  }
}
```

## Why GraphQL?

- **Ask for what you need, get exactly that**: With GraphQL, you can ask for the exact data you need and get it in a single request. This can help reduce the amount of data transferred over the network and improve performance.
- **Get many resources in a single request**: With GraphQL, you can request multiple resources in a single query. This can help reduce the number of requests made to the server and improve performance.
- **Avoid over-fetching and under-fetching**: With REST APIs, you often have to make multiple requests to get all the data you need. With GraphQL, you can get all the data you need in a single request.
- **Strongly typed schema**: With GraphQL, you define a schema that describes the types of data available in your API. This can help improve the consistency and quality of your API.
- **Introspection**: With GraphQL, you can query the schema itself to discover what types of data are available and how to query them. This can help improve the developer experience and make it easier to work with the API.
- **Real-time updates**: With GraphQL subscriptions, you can subscribe to changes in the data and receive real-time updates. This can help improve the user experience and make your application more interactive.
