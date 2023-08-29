## Downcast in Js

- Downcast is a process of converting a value of a higher type to a value of a lower type.

```js
let a = 10;
let b = a.toString();
```

```js
let task = { id: 3 };

let tt = task;

if (id) {
  tt = task.filter((task) => task.id === id);
}
```

    ```js
    let task = { id: "3" };
    let id = parseInt(task.id);
    ```
