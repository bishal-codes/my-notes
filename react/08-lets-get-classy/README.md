# Learnings

1. class-based components(normal js class) += functional components(normal js func that return jsx)

   - normal js class that extends react.component and has render method that returns jsx which is then converted into html and rendered on to the web page
   - older way of creating components in react
   - tells exactly how react lifecycle works, how react components render in webpage
   - how to create cbc:
     - `class` keyword
     - `name` of the component
     - to make this a react component
       - `extends React.Component {}`
         - components takes `render(){}` which returns `jsx` that displays in browser (nounting)
   - `React.Component` is a class given by react
   - the `component` is inheriting properties from `React.Component`
   - `constructor(props){}` receives props and allows component inherits the properties of parent component and pass additional properties as arguments to component

     - need `super(props)`: allows accessing this. for props in constructor function
       - `super()`: calls the parent constructor
       - `super(props)`: passes the props to the parent constructor
         - `props` can be accessed in component using `this.props.name`

   - whenever the instance of class is initialized (created), constructor is called
     - if props, constructor receives props

2. local state variable in CBC

   - previously no functional components, and hooks
   - state creates whenever the instance of class is initialized
     - loading of cbc: creating instance of class
       - here, `constructor` is called and this is the best place to receives props
       - `constructor` is the best place to create state variables using `this.state = {}`
         - `this.state` is a big object which contains all the state variables
       - cannot update the state variables directly
         - to update state variables, React provides `this.setState({})`: can be used anywhere is class
         - setState receives object that contain updated state variables
         - React will only update the state variables from setState and not touch the other state variables
         - react will find the diff of the objects and update the state variables and render the component in dom

3. React Component Lifecycle

   - how component is put of (loaded or mounted) in the web page
   - when parent comp is loaded in web page, it starts rendering line by line and reaches the CBC, and starts mounting this class component (new instance of class is created) is instantiated, constructor func is called `console.log("constructor()")` , then render is called `console.log("render()")`
   - what if the first cbc is parent class for another cbc

     - Parent constructor > Parent render > Child constructor > child render

   - `componentDidMount({})` method:

     - constructor > render > `componentDidMount({})`
     - what if it inside parent cbc?
       - Parent constructor > Parent render > Child constructor > child render > child `componentDidMount({})` > parent `componentDidMount({})`

   - what if two child components

     - Parent constructor > Parent render > Child1 constructor > child1 render > Child2 constructor > child2 render > child1 `componentDidMount({})` > child2`componentDidMount({})` > parent `componentDidMount({})`
       - Instance of parent class is initiated
       - parent constructor is called
       - parent render is called with rendering of jsx
       - goes into the first child1 instance and mounts it
       - child1 constructor is called
       - child1 render is called and renders jsx
       - parent render sees second child2, react optimizes the rendering
         - react badges the render the phase for two childs rather than componentDidMount in child1 first, so react will first render phase for both childs and commit phase will happen (optimization of react) because render phase takes time and dom manipulation is very expensive (take a lot time)
         - ## why react is badging the multiple render phase and then commit phase?
       - child2 constructor is called
       - child2 render phase is called and returns jsx
       - `DOM updated in single batch`
       - child1 `componentDidMount({})`
       - child2 `componentDidMount({})`
       - parent `componentDidMount({})`

   - why use `componentDidMount({})`?

     - to make api calls, but why?
     - like in functional comp, using useEffect to make api call and fill the data in rendered component of react
     - similarly in cbc, first render the component, then make api call and fill the data inside the rendered component

   - at the end it is the optimized performance of the app

- `componentDidUpdate()`: after the mount phase

- In Overall

  - Mounting (dummy data)
    - constructor
      - state (dummy)
    - render(dummy)
      - HTML (dummy)
    - componentDidMount (api call)
      - setState(apiData): updates state
  - Update
    - render(new state apiData)
      - HTML (new state apiData)
    - componentDidUpdate()

- `componentWillUnmount()`: will be called when component will disappear (like move to another ) from page (html)

  - when to use it?
    - clear things up

- why cannot write async in useEffect

## Namaste React Course by Akshay Saini

# Chapter 08 - Let's get Classy

## Theory Assignment:

- How do you create `Nested Routes react-router-dom` configuration?
- Read about `createHashRouter`, `createMemoryRouter` from React Router docs.
- What is the `order of life cycle method calls` in `Class Based Components`?
- Why do we use `componentDidMount`?
- Why do we use `componentWillUnmount`? Show with `example`.
- (Research) Why do we use `super(props)` in `constructor`?
- (Research) Why `can't we have` the `callback function` of `useEffect async`?

## Coding Assignment:

- Create `Class Based` Component.
  - Create 2 `class-based child components`.
  - `Pass props` from `Parent to child`.
  - Create a `constructor`.
  - Create a `state variable` inside child.
  - Use `this.setState` to update it.
  - What if there are `multiple state variables`?
  - Write a `console.log` for each lifecycle method.
  - Play with the `console logs` to find out the `correct order of their execution`.
- Create `interval` inside `componentDidMount`?
  - Use `clearInterval` to `fix the issue` caused by the `interval`

## References:

- [React Life Cycle Method Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)

## Q: How do you create `Nested Routes` react-router-dom configuration?

A: We can create a `Nested Routes` inside a react router configuration as follows:
first call createBrowserRouter for routing different pages

```
const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```

Now we can create a nested routing for `/path` using `children` again as follows:

```
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subchild
               {
                  path: "/child",
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```

## Q: Read about `createHashRouter`, `createMemoryRouter` from React Router docs.

A: `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".
Other than that, it is functionally the same as `createBrowserRouter`.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)

## Q: What is the order of life cycle method calls in `Class Based Components`?

A: Following is the order of lifecycle methods calls in `Class Based Components`:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Q: Why do we use `componentDidMount`?

A: The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
Wwe can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.

## Q: Why do we use `componentWillUnmount`? Show with example.

A: `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.

## Q: (Research) Why do we use `super(props)` in constructor?

A: `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

## Q: (Research) Why can't we have the `callback function` of `useEffect async`?

A: `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.
