Todays Learning:

- keys
- react best practices (file structures, separate component for unique component)
- import, export of components,
- hard coded data
- react and all frameworks are trying to update the dom (sync data and ui layer) efficiently
  - normal js variable and react super powerful local state varible
- hooks: normal js functions
- useState(): creates react local state variable
- why react is super powerful & efficient

  - react makes dom operations superfast and effiecient: rerendering
    - reconciliation (react fiber: incremental rendering, ability to split rendering work into chunks and spread it out over multiple frames)
      - virtual dom (object is an virtual representation)
        - diff algo

- importance of keys

  - help to identify which component have been added, edited or manipulated (Optimized Rendering)
  - better user experience
  - component identification
  - avoiding duplicate keys
  - maintaining stability in component state

- why not use indexes as keys in react

  - limited key identification
  - lack of stability in component
  - poor performance

- what happens if not passed keys while looping

  - renders whole same levelog elements or componenets
  - duplicate keys
  - rendering and performance issue

- best practices

  - separate files for each components

- file structure
- import/export of component
  - default:
    ```js
    export default component;
    import component from "path";
    ```
  - named: in a single file, have to export two
    ```js
    export const component;
    import {component} from "path";
    ```
- never keep hardcoded data in components: urls, any data coming from backend, but keep in separate files like constant

  - naming convention for variable be capital

  - setting attribute or event listeners

- can have normal js variable and can modify within the variable (ui will not be updated) but react uses function to update the react state variable to render the ui with data

  - react is trying to sync ui and data layer

    - all frameworks are trying to update the dom efficiently
    - change ui of app according to data
    - suppose we have normal javascript variable with data, but giving it super power of react to make super react variable

      - WE NEED HOOKS

      ```js
      //NORMAL JS variable
      let objList = [
        (data = {
          name: "KFC",
        }),
      ];

      // REACT SUPER POWERFUL STATE VARIABLE
      const arr = useState([]);
      // array destructuring
      // const [resObjList, setRes] = arr;
      const resObj = arr[0];
      const setRes = arr[1];
      ```

- hooks

  - functional component, react element is plain js object
  - hooks are normal javascript function

    - these utility functions(hooks) have to be imported as named import

      - useState()

        - creates super powerful local state variable

          - have an local state varaible and function to update it inside an array
          - pass default value as data-type as parameter in useState

        - whenever state variable changes, react rerenders the component and updates ui (WHOLE LOGIC)
          - THIS IS WHY REACT IS MOST POWERFUL APPLICATION
          - react makes dom operations superfast and effiecient
          - logic is updating ui is rerendering

      - reconciliation algo (react fiber)

        - virtualDOM: virtual representation of actual dom
          ```js
          // react component (React.createElement()) ----------> object(react virtualDOM)
          ```

      - Diff Algo

        - finds out the differences between previous/old virtual dom and updated virtual dom, and actually updates the updated virtual dom accordingly

      - useEffect()

# Assignment

- [Index as a key is an anti-pattern](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)

## what is difference between Named Export, Default Export and \* as Export?

ES6 provides us to import a module and use it in other files. <br />

ES6 provides 2 ways to export a module from file.

### Named Export:

Using named export we can export any number of exports per file and we can import specific export by putting it in the curly braces. "The imported name should be the same as the name of the exported module".
example:

```js
//imported a single named export.
import { MyComponent } from './MyComponent';

//importing multiple named export
import { MyComponent1, MyComponent2 } from './MyComponent';

//giving a named import a different name by using 'as'
import { MyComponent2 as MyNewComponent } from './MyComponent'; this is called opt-in Alisaing

//export from ./MyComponent.js file
export const MyComponent1 = () => {...}
export const MyComponent2 = () => {...}
```

### export using \* as:

We can also Import all the named exports onto an object:

```js
import \* as MainComponent from './MyComponent.js';
MainComponent.MyComponent1();
MainComponent.MyComponent2();
```

### Default Export: (export default)

using default export we can only do one export per file, which will acts as main export.

```js
//Import
import MyDefaultCompoent from "./MyDefaultComponent";

//Export
const MyComponent = () => {...};
export default MyComponent;
```

**Note:** we can give any name from a default export while importing.

- [Named Export vs Default Export in ES6](https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyOWFiYzE5YmUyN2ZiNDE1MWFhNDMxZTk0ZmEzNjgwYWU0NThkYTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NzM1MDU5MjQsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjQyOTMxNTQwMjU1NTg2ODMwOSIsImVtYWlsIjoidmFyZGhpbmVlZGlnYW5kaGlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJ2ZW5rYXQgdiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BRWRGVHA3TmFzMGtJSF9uRGhqQms1S1RzZDVKbVB3NFNENkdxUjJxajVTclhnPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6InZlbmthdCIsImZhbWlseV9uYW1lIjoidiIsImlhdCI6MTY3MzUwNjIyNCwiZXhwIjoxNjczNTA5ODI0LCJqdGkiOiJjMDM2OWQxZDQ4NWM0NmUzMzMyNzVjZTYwNTc4NzA2ZmIwM2UwNGNhIn0.emY6avkrgaGdtPHQvF7jmPAlc7PJH_hH8n4_4cJ-aqNxkwUtbBb96t9-E6dOyRgfnL3iDzrJtNOG9SbcSNylX-A3oc9ma-hYS4ENSbcC1P1eDZ9r7M_IIdofFfMnXbJKPUZ7saP0x1-t5SF7zQV3euM2K2Qu90496iczOg25I31zVmjq-tlDUvs9FCGuXHMIs_4ivLOVo8bnTR7QJnhVGIufJvBjeMIWEEgqfdpV_ZuILyrsmOcvfg4Si-Bex7bpaOUw9rmL9jvIyeCBSzdG8FsEqbmSrum2eBgeqxXLQwfNj1J559VcRbeWwMF68oo4XQ-jQAP9-ZR7u7DMsjcWgA)

- [Understanding the Difference Between Named and Default Exports in React](https://betterprogramming.pub/understanding-the-difference-between-named-and-default-exports-in-react-2d253ca9fc22#:~:text=Exports%20without%20a%20default%20tag,are%20not%20React%2Dcentric%20ideas.)

## What is the importance of config.js file?

Config.js file allows developers to configure the application instead of hard-cording the values in the code. There will be come values which be unaltered and will be use across the application. So instead of hard-cording those values.
we can put them in the Config.js file and we can use those values across the application. when ever required we can modify it at one place and will get reflected all around the application.

- [Config.js – a JavaScript cofiguration library](https://www.useragentman.com/blog/config-js-%E2%80%93-a-javascript-cofiguration-library/#:~:text=Description-,Config.,%2C%20numbers%2C%20arrays%20and%20HTML.)

## What are React Hooks?

React Hooks are plain javascript functions that we can isolate the reusable logic from the functional component. He the hooks can be the stateful logic and can manage the side-effect logic.

- [Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

## Why do we need a useState Hook?

useSate is one of the React Hooks, which is used to maintain the react local state variables, from creation to updation.

```js
const [stateVariable, setStateVaiable] = useState("xyz");
```

the above is the syntax of it.

here the value passed to useState will be the default value fir the state variable. and it will return array which consists of a state varaible and a function to update the state variable.

- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [State: A Component's Memory](https://beta.reactjs.org/learn/state-a-components-memory)
- [useState](https://beta.reactjs.org/reference/react/useState)
