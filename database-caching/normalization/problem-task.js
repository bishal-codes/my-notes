// state have data like users, tags
// user have data like posts, comments
// tags have data like posts

// normalize the data

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
      comments: [
        {
          id: 201,
          text: "Great post!",
        },
        {
          id: 202,
          text: "Nice tutorial!",
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
      comments: [
        {
          id: 203,
          text: "Great post!",
        },
        {
          id: 204,
          text: "Nice tutorial!",
        },
      ],
    },
  ],
  tags: [
    {
      id: 301,
      name: "JavaScript",
      posts: [
        {
          id: 102,
          title: "Hello, JavaScript!",
        },
      ],
    },
    {
      id: 302,
      name: "React",
      posts: [
        {
          id: 103,
          title: "Hello, React!",
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
        comments: [201, 202],
      },
      2: {
        id: 2,
        name: "Jane Doe",
        posts: [103, 104],
        comments: [203, 204],
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
  comments: {
    byId: {
      201: {
        id: 201,
        text: "Great post!",
      },
      202: {
        id: 202,
        text: "Nice tutorial!",
      },
      203: {
        id: 203,
        text: "Great post!",
      },
      204: {
        id: 204,
        text: "Nice tutorial!",
      },
    },
    allIds: [201, 202, 203, 204],
  },
  tags: {
    byId: {
      301: {
        id: 301,
        name: "JavaScript",
        posts: [102],
      },
      302: {
        id: 302,
        name: "React",
        posts: [103],
      },
    },
    allIds: [301, 302],
  },
};

// get 1st comment of 1st user
console.log(
  normalizedState.comments.byId[normalizedState.users.byId[1].comments[0]]
);
