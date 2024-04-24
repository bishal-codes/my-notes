import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json()); // parse application/json

const PORT = 5111;

const todos = [
  {
    id: 1,
    title: "Learn Node.js",
    completed: false,
  },
  {
    id: 2,
    title: "Learn Express.js",
    completed: false,
  },
  {
    id: 3,
    title: "Learn MongoDB",
    completed: false,
  },
];

// Middleware
app.all("/", (req, res) => {
  //   console.log("Request received", req);
  //   console.log("Response sent", res);

  res.send("Hello World!");
});

// create
app.post("/todos", (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.json({ message: "Todo created successfully" });
});

// read
app.get("/todos", (req, res) => {
  res.json(todos);
});

// update
app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = req.body;
  const index = todos.findIndex((todo) => todo.id == id);

  if (index !== -1) {
    todos[index] = {
      id: id,
      ...todo,
    };
  }

  todos[index] = todo;
  res.json({ message: "Todo updated successfully" });
});

// delete
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);

  if (index !== -1) {
    todos.splice(index, 1);
  }

  res.json({ message: "Todo deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
