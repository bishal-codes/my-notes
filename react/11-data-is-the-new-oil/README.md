# Learnings:

- learned different ways of styling web apps
- all these belows are related to data of our application (managing data is the important part of react app)

1. Higher Order Components
   - is a functional component that takes a component and returns a component
   - includes map, sort, filter
   - are pure functions
   - it will not modify or change the behavior of the component but enhance the component
   - These functions are pure, which means they are receiving data and returning values according to that data. If the data changes, higher order functions are re-run with different data input.

- **First-class functions** are functions that are treated as variables. They can also be parsed into other functions as arguments.

learned about frontend layers

- all the applications have two layers

  - ui
    - consists of jsx,
  - data
    - consists state, props, local variables, all the data in application

- ui layer is powered by data layer

3. React Developer Tools

- valuable extension for debugging the data layer of a React application.

  - Components

        - allows you to inspect and analyze the component hierarchy of your application.
        - view the props, state, and other details of each component,
        - making it easier to debug and understand the application structure.
        - has data layer (props) and ui layer(virtualDOM)

  - Profiler
    - flamegraph, ranked, timeline
    - feature helps measure the `performance` of your React components. It provides insights into rendering time, component updates, and overall application performance.

2. Controlled and Uncontrolled Components

- parent controls many children
- controlled components: parent is controlling its children
- uncontrolled components: children are controlling themselves
- can i modify state variables of parent from children?
  - is not possible directly but yes directly

3. Lifting the State up (very important)

- move the state from a child component to its parent component.
- share and manage the state at a higher level, making it accessible to other child components that need it.
- By lifting the state up, you ensure that multiple components can access and update the shared state, maintaining consistency throughout the application.

5. Props Drilling

- when react app grows, component grows inside of them and makes tree like structure, and passing data from one to another component is big challenge
- react has one way data flow and one direction (top to bottom): parent to children to sub-children
- Props drilling refers to the process of passing props from a parent component to its nested children components.
- without state and props react component doesnot exist and without component nothing exist (everything is component in react)
- is props drilling good way if i want to access data somewhere else from any particular component?
  - React Context

6. React Context

- managing state across the application.
- allows you to create a context that can be accessed by multiple components without passing props manually at each level.

  - loggedIn user case
  - light theme

- createContext()
  - takes or create (central global) object context
- useContext()
  - hook to access global context object
- import and wrap alongwith Consumer in cbc

```js
<UserContext.Consumer>{({ data }) => data}</UserContext.Consumer>
```

- should we keep all the data inside context?
  - only the data you are using at multiple places
- manipulating data and using in components

  - wrap component with Context component along with Provider
    - pass the value
    - value is available only within the provider
    - can pass state function in value

  ```js
  <Context.Provider value={{context:state variable, function}}>
    <App />
  </Context.Provider>
  ```

we will focus on handling data in React applications. Data management is a crucial aspect of building any application, and understanding the concepts of states, props, and data flow is essential.

## Frontend Layers

The frontend of any React application consists of two layers:

1. **Data Layer**: This layer includes states, props, and other data-related components. States are local variables within a component, while props are passed from one component to another. Props can also be seen as local variables of the parent component.

2. **UI Layer**: This layer comprises the JSX code we write, which gets converted into JavaScript and then rendered as HTML DOM elements.

## Props Drilling

Props drilling refers to the process of passing props from a parent component to its nested children components. Let's consider an example to understand this concept:

```
AppLayout (parent)
	- Body (child)
		- About (child)
			- UserSection (child)
				 - Info (child)
```

Suppose we have a `userInfo` state variable in the `AppLayout` component, and we want to pass this `userInfo` to the children components. In this scenario, we pass the props from `AppLayout` to `Body`, then to `About`, then to `UserSection`, and finally to `Info`. This passing of props through multiple levels of components is known as props drilling.

## React Dev Tools

React Dev Tools is a valuable extension for debugging the data layer of a React application. It provides features such as Components and Profiler.

- **Components**: This feature allows you to inspect and analyze the component hierarchy of your application. You can view the props, state, and other details of each component, making it easier to debug and understand the application structure.

- **Profiler**: The Profiler feature helps measure the `performance` of your React components. It provides insights into rendering time, component updates, and overall application performance.

## Lifting the State Up

"Lifting the state up" is a concept in React where you move the state from a child component to its parent component. This is done to share and manage the state at a higher level, making it accessible to other child components that need it. By lifting the state up, you ensure that multiple components can access and update the shared state, maintaining consistency throughout the application.

## Context API

The Context API is a powerful tool provided by React for managing state across the application. It allows you to create a context that can be accessed by multiple components without passing props manually at each level.

To create a context, you can use the `createContext` function from React.

```javascript
import { createContext } from "react";

const UserContext = createContext({
  info: {
    name: "Bishak Karki",
    email: "karkibishal00@gmail.com",
    linkedIn: "https://www.linkedin.com/in/bishalk21/",
  },
});

export default UserContext;
```

The above code snippet demonstrates the creation of a `UserContext` using `createContext`. It sets a default value for the context, which can be overridden when providing the context at a higher level.

To access the context, you can use the `useContext` hook in functional components:

```javascript
import { useContext } from "react";
import UserContext from "../helper/UserContext";

const Footer = () => {
  const { info } = useContext(UserContext);
  // Access the info object from the UserContext
  // ...
};

export default Footer;
```

In class-based components, you can use the `UserContext.Consumer` component to access the context:

```javascript
import React from "react";
import UserContext from "../helper/userContext";

class About extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ info }) => (
          <div>
            <h1>{info.name}</h1>
            <h2>{info.email}</h2>
            <h3>{info.linkedIn}</h3>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default About;
```

## Overriding the Context's Data

When using the Context API, you can override the default value of the context by providing a new value using the `Provider` component.

```javascript
const AppLayout = () => {
  const [user, setUser] = useState({
    info: {
      name: "Bishal Karki",
      email: "karkibishal00@gmail.com",
      linkedIn: "https://www.linkedin.com/in/bishalk21",
    },
  });

  return (
    <div>
      <UserContext.Provider
        value={{
          info: user.info,
          setUser: setUser,
        }}
      >
        {/* Render your application components */}
        <Navbar />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};
```
