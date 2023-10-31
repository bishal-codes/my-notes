# Type Primer

- star in TypeScript

Raw Data in computer is binary meaning it is only 0 and 1
Computer does not understand human language it only understands binary language which is 0 and 1
computer doesnot understand what data type is, what programming language is, doesnot have any knowledge than 0s and 1s
Computer are great at handling binary data but human are not
Human are great at actual things and ideas, that is where types comes along

- Types bridge the gap between the code developer write and code that computer interpret
- we can provide context in the program using types which makes human to understand

For example, if we want to create properties of cat, then we can use types to provide context

TypeScript will convert the types into proper binary code for computer to display proper cat pictures

`TypeScript` ---- (converts) ---- `Types` ---- (into) ----> `binary code `(computer) ---- (display) ----> `pictures`

- TypeScript is converting types and also have information about types, which is utilized by typescript to how we are using types in our code

Dog ---- {takes bath} ---- TypeScript encodes it as binary code
Cat ---- {doesn't take bath} ---- but if we try {bath cat} ---> typescript will throw an error

```js
// Using TypeScript to define cat properties
type Cat = {
  name: string,
  color: string,
  age: number,
};
```

`More Types we use, More the information does the TypeScript has to check the mistakes`

- TS as a program not only works for small portion of the code developer is currently working or keeping track of the changes but works along with other rest of the code whatever the longer is code base.
