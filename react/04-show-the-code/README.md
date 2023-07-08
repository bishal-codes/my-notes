- show the code: https://github.com/bishalk21/react-app

Today Learned about

- planning design and low level planning
- making code modular: DRY, a single reusable component as a function
- ways of styling in react
- how to make repeating component dynamic: passing data as props
- config driven ui : ui layer and data layer makes frontend application
- best practice all across react projects is to use map, reduce, filter(functional programming), ternary operator
- key props

1.  Food ordering app

    - how to build it?
    - what thought process goes behind the scene

      - `planning` (what is needed in planning): should exactly know what you are going to build

        ```bash
          - ui design/layout/mock/wire-frame: how app should look like
            - header
              - logo(left), Links: Home, About, Cart(right)
            - body
              - searchBarBtn
              - restaurant cards
                - image, title, star ratings
            - footer
              - copyright & links (center)
        ```

      - `low level planning`

        - how app looks like
        - what components can my app have

                 ```js
                 /***
                   * Header
                   *  - logo
                   *  - links
                   * Body
                   *  - Search
                   *  - Restaurant Card Container
                   *    - Restaurant Card
                   *       - tags
                   *       - name, star ratings, cuisine, delivery times
                   * Footer
                   *   - Copyright
                   *   - Links
                   *   - Address
                   *   - Contact
                   */
                 ```

- make code modular: if repeating a lot of code, build a single separate component

  - why do we create components in app?
    - just like a function so that we can re-use it

- ways of using css in react app

  - external css
  - material ui/tailwind css
  - inline css

    - style attribute here not takes css styling like used to take inside html, but takes js object
    - if writing any js code inside jsx, use curly braces
    - beauty of jsx writing css inside js
    - instead of creating new variable, can write directly inside js object as well

    ```js
    const styleCard = {
      backgroundColor: "lightGray",
    };

    const RestaurantCard = () => {
      return (
        <div
          className="restaurant-card"
          style={{
            backgroundColor: "lightGray",
          }}
        >
          <img src="" alt="image" />
          <h3>DA-Vatti - Authentic cuisines</h3>
        </div>
      );
    };
    ```

- How to make repeating card dynamic?

  - props (properties)
    - sth that you can pass through the components
    - dynamically pass data to components as props
    - passing props to component is like passing an argument to component, which is object in receiving component
    - destructing props

- how does data comes to client from backend?

  - in form of json
  - config driven ui
    - is basically latest
    - website is driven by config data (controlling UI using backend data)
    - play data coming from backend
    - knowledge of api
    - ui layer and data layer makes frontend application

- cloudinary

  - cdn link: put all images in cloudinary

- ternary operator
- best practice all across react projects is to use map, reduce, filter(functional programming)

- key props
  - each of the child inside a parent being rendered should be uniquely represented by giving id (best practice)
  - react itself donot reccomend using index in key, but can use index if not have umique key
  - not using keys is not acceptable,
  - whenever looping anything, should give key to children

# React Features

### Table of contents

1. [React Fragment](##react.fragment)
2. [CSS in React](##css-in-react)

## React.Fragment

- jsx - one parent
- <Fragment>, often used via <>...</> syntax, lets you group elements without a wrapper node.

### Usage

- Returning multiple elements
- Assigning multiple elements to a variable
- Grouping elements with text
- Rendering a list of Fragments

[Back to top](###table-of-contents)

## CSS in React

### Styling React components with inline styling

- written as attributes and are passed to the element.
- First, there are two curly brackets. What we are rendering is written in JSX, and for pure JavaScript expressions to be used in JSX, they have to be included in curly brackets. The first curly bracket injects JavaScript into JSX. The inner curly brackets create an object literal. The styles are passed as object literals to the element.
- The next thing to note is that the properties are separated by a comma. This is because what we are passing is an object. Because it is a JavaScript attribute, the attributes are written in camelCase and not separated by a dash.

```js
const AddTodo = () => {
  //...
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white" }}>
        TODO
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label
          style={{ padding: "10px 20px", textAlign: "center" }}
          htmlFor="new-todo"
        >
          What needs to be done?
        </label>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input onChange={onChange} value={task} ref={inputRef} />
          <button>Add </button>
        </form>
      </div>
      {message && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4 style={{ color: "red" }}>{message}</h4>
        </div>
      )}
    </div>
  );
};
export default AddTodo;
```

**💡** JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX, but JSX makes React a lot more elegant. Just like XML, JSX tags have a tag name, attributes, and children.

### Creating a style object variable

- create a style object variable the same way we create a JavaScript object. This object is then passed to the style attribute of the element we want to style.

```js
const AddTodo = () => {
  return (
    <div style={Container}>
      <h2 style={Header}>TODO</h2>
      <div style={LabelContainer}>
        <label style={Label} htmlFor="new-todo">
          What needs to be done?
        </label>
      </div>
      <div style={FormContainer}>
        <form onSubmit={handleSubmit}>
          <input onChange={onChange} value={task} ref={inputRef} />
          <button>Add </button>
        </form>
      </div>
      {message && (
        <div style={Message}>
          <h4 style={{ color: "red" }}>{message}</h4>
        </div>
      )}
    </div>
  );
};

const Container = { display: "flex", flexDirection: "column" };
const Header = { padding: "10px 20px", textAlign: "center", color: "white" };
const LabelContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Label = { padding: "10px 20px", textAlign: "center" };
const FormContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const ErrorMessage = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
```

**💡** We did not have to use double curly brackets in the element because these variables are objects themselves.

- If you look at the object properties, the camelCases will be converted to dash-separated CSS attributes during compilation. For instance, this:

```js
backgroundColor: "#44014C",
minHeight: "200px",
boxSizing: "border-box"
In plain CSS, these will be written as:
background-color: #44014C;
min-height: 200px;
box-sizing: border-box;
```

### Sharing styles across many React components

```js
// styles.js
const Container = { display: "flex", flexDirection: "column" };
const Header = { padding: "10px 20px", textAlign: "center", color: "white" };
const LabelContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Label = { padding: "10px 20px", textAlign: "center" };
const FormContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const ErrorMessage = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const styles = {
  Container: Container,
  Header: Header,
  LabelContainer: LabelContainer,
  Label: Label,
  ErrorMessage: ErrorMessage,
  FormContainer: FormContainer,
};

export const styles = {
  Container: Container,
  Header: Header,
  LabelContainer: LabelContainer,
  Label: Label,
  ErrorMessage: ErrorMessage,
  FormContainer: FormContainer,
};

/** AddTodo.js file **/

// Import the styles
import { styles } from "./styles";

const AddTodo = () => {
  //....
  return (
    <div style={styles.Container}>
      <h2 style={styles.Header}>TODO</h2>
      <div style={styles.LabelContainer}>
        <label style={styles.Label} htmlFor="new-todo">
          What needs to be done?
        </label>
      </div>
      <div style={styles.FormContainer}>
        <form onSubmit={handleSubmit}>
          <input onChange={onChange} value={task} ref={inputRef} />
          <button>Add </button>
        </form>
      </div>
      {message && (
        <div style={styles.ErrorMessage}>
          <h4 style={{ color: "red" }}>{message}</h4>
        </div>
      )}
    </div>
  );
};
```

### Using styled-components

With styled-components, we can write actual CSS in our JavaScript file. This means you can use all the features of CSS — like media queries, pseudo-selectors, nesting, and more — in JavaScript.

```bash
$ npm install --save styled-components
```

```js
/** AddTodo.js file **/
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  padding: 10px 20px;
  text-align: center;
  color: white;
`;

function AddTodo() {
  //...

  return (
    <Container>
      <Header>TODO</Header>
      <LabelContainer>
        <Label htmlFor="new-todo">What needs to be done?</Label>
      </LabelContainer>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <input onChange={onChange} value={task} ref={inputRef} />
          <button>Add </button>
        </form>
      </FormContainer>
      {message && (
        <ErrorContainer>
          <ErrorMessage>{message}</ErrorMessage>
        </ErrorContainer>
      )}
    </Container>
  );
}
```

### Styling with Tailwind CSS
