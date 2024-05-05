# Normalization

- flattening of data structure (complex)
- storing entities in separate tables
- relationships with unique keys

Suppose we have a database with the following tables:

```js
const college = {
  id: "c1",
  name: "College of Engineering",
  location: "New York",
};
```

Now this college can have multiple departments or number of students. So we can create separate tables for departments and students.

```js
const department = {
  id: "d1",
  name: "Computer Science",
  collegeId: "c1",
};

const student = {
  id: "s1",
  name: "John Doe",
  departmentId: "d1",
};
```

## Benefits of Normalization

- Reduces redundancy (no duplicate data)
- efficiency (less data to search or lookup will be faster)
- simplifies nested data (flattening)
