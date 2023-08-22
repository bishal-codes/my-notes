- `Mongoose`: ODM (Object Data Modeling) library for MongoDB.
- `ODM` vs `ORM`: Optional but beneficial for MongoDB interactions.
- Preferred Choice: Many Node.js developers opt for `Mongoose`.
- `Benefits`: Simplifies data modeling, schema enforcement, and validation.
- Data Manipulation: Mongoose facilitates general data manipulation(`flexible data model`).
- Effortless Tasks: Mongoose streamlines complex operations.
- install mongoose
```bash
npm i --save mongoose
```

- import mongoose
```js
import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    const MONGO_CLIENT = "mongodb://localhost:27017/procraste-no-more"; // local db
    // Configures Mongoose to allow undefined fields in queries (set to false), which relaxes the strictness of queries.
    mongoose.set("strictQuery", false); 
    //  Initiates the connection to the MongoDB database using the specified connection URL.
    const conn = mongoose.connect(MONGO_CLIENT);
    conn && console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
```

