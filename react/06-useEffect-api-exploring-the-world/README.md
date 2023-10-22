# Learnings

1. whenever state variable updates, react triggers a reconciliation cycle(re-renders the component)

2. monolith: all the services or code of ui, backend, database, and other functional features in one app or same service

3. microservices: different services or code of microservices combined to form an app

- separation of concerns
- single responsibility principle
- can have multiple tech stack for different services
  - depends upon use case (for tech stack),role of service, what tech stack is suitable for that service
- different ports for different services and all those domains can be mapped to single domain

- How do different services in microservices interact each other?
- how and where are all of these micro services are deployed?

3. two approaches how web app or ui applications fetch the data from the backend

- when app loads --- (fetch data) ----> api call (takes 5000ms) --- (wait for data to come) --> render data
- when app loads ----> render ui (skeleton) ----> make api call ---> rerender ui with data (better approach, better ux)
  - rendering twice: react renders cycle are very fast (better user experience)
  - use useEffect hook for this approach

4. useEffect Hook

- normal js func
- two arguments
  - arrow function or callback function
  - dependency array
- when will be this useEffect or call back func will be called?
  - after component renders
    - comp renders ----> and call back func will be called

5. fetching the data (fetch)

   - superpower given by browsers, or JS Engine have
   - can i use the api in local app?
   - what fetch returns?
     - promise that resolves to a response object
   - how handle promise
     - traditional way of using `.then`
     - newer approach `async-await`

6. cors origin policy (cors)

   - calling api from localhost failed
   - browser blocked to call or not allowing localhost to call from one origin to another origin
   - how to bypass this cors
     - cors extension

7. optional chaining(?.)

   - accesses an object's property
     - if object accessed or function called is undefined or null, oc operator short circuits and evaluated undefined instead of throwing error
   - calls a function

8. when data is empty on render, better ui experience

   - show loading ui

     ```js
     if (resList.length === 0) {
       return <h1 style={{ color: "white" }}>Loading...</h1>;
     }
     ```

   - shimmer ui
     - better way to show loading states in web or mobile app
     - better user experience
     - provides visual feedback
     - reduce cognitive load
     - eliminated surprises
     - enhance aesthetic appeal

9. conditional rendering

   - rendering on the basis of conditon

     ```js
     if (isLoggedIn) {
       return <UserGreeting />;
     } else {
       return <GuestGreeting />;
     }
     ```

10. why do we need state variable? how this works?

- when something is changed in component like state variable, react will re-render the component and update all the updated value in component

- as soon as btn clicked, btnName variable gets updated but ui is not updated or is not rendered
- so js variable doesn't work in this case: or to make component dynamic or to change sth in component and update
- here's comes the react super powerful local state variable

      ```js
      const Header = () => {
      // using normal js variable
      let btnName = "Login";
      return (
         <div className="header">
            <div className="logo">
            <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
            <ul>
               <li>
                  <i class="fa-solid fa-house"></i> Home
               </li>
               <li>
                  <i class="fa-solid fa-people-carry-box"></i> About Us
               </li>
               <li>
                  <i class="fa-solid fa-cart-shopping"></i> Cart
               </li>
               <li>
                  <button
                  className="login"
                  onClick={() => {
                     btnName = "Logout";

                     // as soon as btn clicked, btnName variable gets updated but ui is not updated or is not rendered
                     // so js variable doesn't work in this case: or to make component dynamic or to change sth in component and update
                     // here's comes the react super powerful local state variable
                     console.log(btnName);
                  }}
                  >
                  {" "}
                  <i class="fa-solid fa-right-to-bracket"></i> {btnName}
                  </button>
               </li>
            </ul>
            </div>
         </div>
      );
      };
      ```

      ```js
      const Header = () => {
      const [btnName, setBtnName] = useState("Login");
      return (
         <div className="header">
            <div className="logo">
            <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
            <ul>
               <li>
                  <i class="fa-solid fa-house"></i> Home
               </li>
               <li>
                  <i class="fa-solid fa-people-carry-box"></i> About Us
               </li>
               <li>
                  <i class="fa-solid fa-cart-shopping"></i> Cart
               </li>
               <li>
                  <button
                  className="login"
                  onClick={() => {
                     setBtnName("Logout");
                  }}
                  >
                  {" "}
                  <i class="fa-solid fa-right-to-bracket"></i> {btnName}
                  </button>
               </li>
            </ul>
            </div>
         </div>
      );
      };
      ```

11. how react is updating constant variable state of component?

- when update value ----> react updates state value -----> react calls the function component again (rendering again) with new state variable
  - reconciliation (diff algorithm)

12. input-box (search and button)

- on button click, filter the res card and update ui
- searched text from input box
  - to get that data from input box, need to get the value from input box and bind the value to local state variable of react
    - once we bind the search state variable with input box, whatever there is inside the variable will be inside the input field box
    - if search variable is empty, and is binded with input box field then can't change the input field value in ui unless we change the search variable
      - to do this, we use onChange handler in input box
  - when type sth in input box, changes the local state variable and hence react re-renders the component
  - first time filter will update the state, and on another filter, state will only have the filtered state and if the search doesn't exist, there is nothing to display

```js

const [search, setSearch] = useState("");

const handleSearch = (e) => {
  setSearch(e.target.value);
}

const filteredData = data.filter((item) => {
  return Object.keys(item).some((key) => {
    return item[key].toLowerCase().includes(search.toLowerCase());
  })
})

return (
  <div>
    {/*
    * <input type="text" value={search} />
    * <button onClick={() => console.log(search)}>Search</button>
    * in this code, search will not be printed, because we didn't bind the search state variable with input box
    * or the search is empty in the local state variable and it is not binded with input box
    * so to update the ui, we need to bind the search state variable with input box by using onChange handler
    */}

    <input type="text" value={search} onChange={handleSearch} />
    <button onClick={() =>
    const filteredData = data.filter((item) => {
      return Object.keys(item).some((key) => {
        return item[key].toLowerCase().includes(search.toLowerCase());
      })
    })
    }>Search</button>
    <div>
      {filteredData.map((item) => (
        <div>{item.name}</div>
      ))}
)
```

13. filter(), map(), includes(), toLowerCase()

# Assignment - Exploring the World

## What is Microservices?

A microservice is a architectural pattern which has emerged from the world of domain-driven design, continuous delivery, platform and infracturcture automation, scalable sysytems, polyglot programming and persistance.

A microservice architecture (newer model for application development) where we group up the main functionalities into services instead of maintaining them under one application. these loosly coupled services which can be deployed, and maintained independently. each of these service is responsible for discrete task and can communicate with other service through simple APIs to solve a larger complex problem.

- Benefits of Microservices:
- Flexible Scaling
- Easy Deployment
- Technological Freedom
- Reusable Code
- Resilience

  1. As the constituent (part of the whole application) services are small, they can be built by one or more small teams from scratch seperated by service boundaries which makes it easier to scale-up.

  2. Once developed, these services can be deployed independantly of each other and we can easy to identify the hot services and scale them independantly of whole application.

     - fault isolation is easier and whole application won't stop working if one service has error. we can fix it the error and redeploy that service instead of the whole application.

  3. Another advantage is we can use multiple technologies to develop the service, there is no need of limiting to one technology. we can use the best technology for that service to acheive specific functionality.

#### [Reference:](https://medium.com/hashmapinc/the-what-why-and-how-of-a-microservices-architecture-4179579423a9)

## What is Monolith architecture?

- for changing any code or under any updates, had to build the whole project (compile + deploy)
- traditional structure for software application.
- all-in-one architecture, where in all aspects of the software operate as a single unit.
- unified development model for software application. It has 3 components:

  1.  Client-side user interface
  2.  Server-side application
  3.  Data interface

All there parts interact with a `single database`. Software built on this model operates with one base of code.

Pros:

1. It's easier to take care of issues that affect the whole application.(caching, logging, performance monitoring, and handling. basically easier to manage).
2. It's easier to test and debug. (as everything is at one place end-to-end testing is easier).
3. It's easier to deploy and develop. (it requires only one file or directory. so deployment is easier).

Cons:

1. It's hard to scale or change. (as everything is at one place, changes must involve the entire architecture. The entire application must scale all at once).
2. The code becomes complicated. (as all in one base code, it will become increasingly complex as the application grows and changes).
3. It's challenging to integrate with new technology. (as all the application lies in one base code, it's difficult to integrate. the code rewrite from scratch should accommodate).

#### [Reference](https://www.integrate.io/glossary/what-is-monolithic-architecture/)

## What is the difference between Monolith and Microservice?

![Monolith and Microservice](./monolith-microservices.png)

A monolithic software application may be a simple office suite software program for individual user.
monolithic connects to single database.

A microservices operates as a loose collection of functionalities (known as services) that work together under the basket of a single application. each service is deployed into there own cloud-based environment and single team dedicated to it.

#### [Reference](https://www.geeksforgeeks.org/monolithic-vs-microservices-architecture/)

## Q: Why do we need a `useEffect Hook`?

A: `useEffect Hook` is javascript function provided by `react`. The useEffect Hook allows you to `eliminate side effects` in your components. Some examples of side effects are: `fetching API data`, `directly updating the DOM`, and `setting up subscriptions or timers`, etc can be lead to unwarranted side-effects.
useEffect accepts `two arguments`, a `callback function` and a `dependency array`. The second argument is optional.

```
useEffect(() => {}, [])
```

The `() => {}` is callback function and `[]` is called a empty dependency array.
If anything that we pass (suppose currentState) inside the `[]` it trigger the callback function and changes the state of the application.

```
useEffect(() => {
    setCurrentState("true");
}, [currentState])
```

If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

```
useEffect(() => {})
```

## Q: What is `Optional Chaining`?

A: `Optional Chaining` (`?.`) operator accesses an object's property or calls a function. If the object accessed or function called is `undefined or null` , it returns `undefined` instead of throwing an error.
`Optional Chaining` (`?.`) is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a throwing key error, it returns `undefined`.

## Q: What is `Shimmer UI`?

A: A `Shimmer UI` resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.
Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.

## Q: What is the difference between `JS expression and JS statement`?

A: A `JS expression` returns a value that we use in the application. for example:

```
1 + 2 // expresses
"foo".toUpperCase() // expresses 'FOO'
console.log(2) // logs '2'
isTrue ? true : false // returns us a true or false value based on isTrue value
```

A `JS statement`, does not return a value. for example:

```
let x; // variable declaration
if () { } // if condition
```

If we want to use `JS expression` in JSX, we have to wrap in `{/* expression slot */}` and if we want to use `JS statement` in JSX, we have to wrap in `{(/* statement slot */)}`;

## Q: What is `Conditional Rendering`? explain with a code example.

A: `Conditional rendering` in React works the same way conditions work in `JavaScript`. Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them. for example:

```
// Using Ternary operator as a shorthand way or writing an if-else statement
{isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
// Using an if…else Statement
{
  (if (isLoggedIn) {
    return <UserGreeting />;
  }else {
    return <GuestGreeting />;
  })
}
// Using Logical &&
{isLoggedIn && <button>Logout</button>}
```

## Q: What is `CORS`?

A: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.

## Q: What is `async and await`?

A: `Async`: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
`Await`: Await function is used to wait for the promise. It could be used within the `async` block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
for example:

```
// async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    const data = await fetch(
      "Swiggy_API_URL"
    );
    const json = await data.json();
    // we get the Swiggy API data in json format
    console.log(json);
  }
```

## Q: What is the use of `const json = await data.json()`; in `getRestaurants()`?

A: The `data` object, returned by the `await fetch()`, is a generic placeholder for multiple data formats.
so we can extract the `JSON object` from a `fetch` response by using `await data.json()`.
`data.json()` is a method on the data object that lets you extract a `JSON object` from the data or response. The method returns a promise because we have used `await` keyword.
so `data.json()` returns a promise resolved to a `JSON object`.
