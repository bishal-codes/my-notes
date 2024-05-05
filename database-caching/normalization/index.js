// Problem statement
// Given a list of database records, normalize the data into a list of objects.

// The database records are in a format like this:

const state = {
  users: [
    {
      id: 1,
      name: "John Doe",
      posts: [
        {
          id: 101,
          title: "Hello, World!",
        },
        {
          id: 102,
          title: "Hello, JavaScript!",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Doe",
      posts: [
        {
          id: 103,
          title: "Hello, React!",
        },
        {
          id: 104,
          title: "Hello, Vue!",
        },
      ],
    },
  ],
};

// The normalized data should look like this:

const normalizedState = {
  users: {
    byId: {
      1: {
        id: 1,
        name: "John Doe",
        posts: [101, 102],
      },
      2: {
        id: 2,
        name: "Jane Doe",
        posts: [103, 104],
      },
    },
    allIds: [1, 2],
  },
  posts: {
    byId: {
      101: {
        id: 101,
        title: "Hello, World!",
      },
      102: {
        id: 102,
        title: "Hello, JavaScript!",
      },
      103: {
        id: 103,
        title: "Hello, React!",
      },
      104: {
        id: 104,
        title: "Hello, Vue!",
      },
    },
    allIds: [101, 102, 103, 104],
  },
};

console.log(normalizedState);
