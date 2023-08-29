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


## $in operator in mongoose

- $in operator is used to match any of the values specified in an array.

```js
db.collection.find({ field: { $in: [<value1>, <value2>, ... <valueN> ] } })
```

## Timestamps: true

Mongoose schemas support a timestamps option. If you set `timestamps: true`, Mongoose will add two properties of type `Date` to your schema:

`createdAt`: a date representing when this document was created
`updatedAt`: a date representing when this document was last updated
Mongoose will then set createdAt when the document is first inserted, and update updatedAt whenever you update the document using `save()`, `updateOne()`, `updateMany()`, `findOneAndUpdate()`, `update()`, `replaceOne()`, or `bulkWrite()`.

- Anybody sends data using POST method, Express need sets to be made to convert the data and make available in req.body by injecting some middleware before any respose happens like:

```js
app.use(express.json());
```
