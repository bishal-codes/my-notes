# Learnings:

- jest, enzyme
- manual testing, unit testing, regression testing, integration testing, load testing
- `react testing library` built on top of jest
- set up testing framework in our app
- even single line of code can break the application so testing is very imp

1. why need test cases?
    - a lot developers work in different respective components, so change in one component or function can impact or even break another component without developers being known to it. So test cases make sure that our code is properly intact. if we are adding new features, is it breaking the existing code?
    - to check performance of our code
    - does our code work or not
    - maintainability of code

2. Test Driven Development
    - we write test cases even before writing the logic for a method     
    - development becomes slow
    - ensures good quality of code

3. Different types of testing

- manual testing
    - you code and build search component, now you manualy test the search functionality in web.
    - logical step that follows after writing functionality, much like tasting a dish comes after seasoning it (adding a feature) to check whether it worked as intended.
    - requires human review their code, as this is the fastest, most natural and simplest way to quickly test a functionality.
    - ideal for small projects

- all the testings save you time and ensure higher code quality over manual testing!

- automation testing
    - write additional code to test your application code.
    - selenium
    - Writing programs to automate a browser,
    - Calling functions directly from your source code,
    - Comparing screenshots of your rendered application...

- end-to-end testing (E2E)
    - as soon as user lands on website to the user leaves the website flow testing
    - like user landing on page, click on login button, entering the username, password, getting inside it, adding items to cart and checking out and the flows user does across the app
    - cyprus
    - covers entire users journey or ensure that an application works correctly from the user's perspective.

- [headless browsers](https://www.softwaretestinghelp.com/headless-browser-testing/)
    - web browser without graphical interface
    - those which actually access the Web Page, but the GUI is hidden from the user.
    - faster

- Unit Testing
    - testing the react component in isolation
    - for example, doing the testing of one specific component like header in isolation
    - individual units or components of the software are tested
    - An individual unit is a single function, method, procedure, module, component, or object. 
    - A unit test isolates and verifies a section of code in order to validate that each unit of the software's code performs as expected.

- integration testing
    - in large scale apps, there will be so many components and these components talk to each other
    - suppose in search of certain word in search box and in submit, so many components collaborates or involves and talks like click event, input change, 
    - testing the integration between the components

4. Jest
    - JS testing framework with a focus on simplicity

5. React testing library

- builds on top of DOM testing library
- RTL uses jest behind the scene. 
- a replacement for Enzyme.
- Vitest is aiming to be a drop-in replacement for Jest in Vite (which would require a separate pipeline).

- [Setting up RTL in vite react project](https://www.linkedin.com/pulse/setting-up-rtl-vite-react-project-william-ku/) or [here](https://zaferayan.medium.com/how-to-setup-jest-and-react-testing-library-in-vite-project-2600f2d04bdd)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [RTL Queries API](https://testing-library.com/docs/queries/about)
- [Query Cheatsheet](https://testing-library.com/docs/dom-testing-library/cheatsheet/#queries)
    - for multiple items use getAll...
    - to create groups of different test cases, use `describe`
    ```js
    describe("About Us Test Cases",()=> {} )
    ```
    - can add another describe inside describe

- can write `test()` as `it()` - aliases
- can use regex - no need to use exact string passed in queries

# Types of Testing
- Unit Testing
- Integration Testing
- End to End Testing

# Setting up Testing in app
1. [Install React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

```bash
npm install --save-dev @testing-library/react
# Install React Testing Library and vitest dependencies
npm i -D @testing-library/jest-dom @testing-library/react @testing-library/react-hooks @testing-library/user-event jsdom vitest
```
2. [Install Jest](https://jestjs.io/docs/getting-started#using-babel)

```bash
npm i -D jest
```

3. [Install Babel Dependencies](https://jestjs.io/docs/getting-started#using-babel)

```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

4. [Configure babel.config.js](https://jestjs.io/docs/getting-started#using-babel)

Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:
```bash
# babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

5. [configure parcel file to disable default babel transpilation](https://parceljs.org/languages/javascript/#usage-with-other-tools)

 if you  are using parcel, parcel will throw internal babel configuration message error so on addition of babel.config.js, this will kinda override the existing babel configuration. [do this config]()
```bash
# .parcelrc
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

6. [Configure Jest](https://jestjs.io/docs/getting-started#generate-a-basic-configuration-file)
 or [configure jest](https://testing-library.com/docs/react-testing-library/setup)

```bash
npx jest --init
```

npx to execute just once.

- yes/no for typeScript: no
- test environment: jsdom(browser-like): 
    - jest is not running on browser (but in testEnvironment jsdom), but will have some browser function capabilities
    - when run test cases, there is no browser or server but these test cases are running in jsdom environment but not on browser or server
    - library which parses and interacts with assembled HTML just like a browser.
- add coverage reports: yes ("coverage": "vitest run --coverage" or  "watch-test": "jest --watch")
- provider to instrument code for coverage: babel 
- Automatically clear mock calls, instances, contexts and results before every test? (garbage collection like thingy): yes
- created `jest.config.js`


7. start testing
```bash
npm run test
```

8. [install jest-environment-jsdom](https://testing-library.com/docs/react-testing-library/setup#configuring-jest-with-test-utils)
```bash
npm install --save-dev jest-environment-jsdom
```

9. if no test cases written
```bash
  39 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 39 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
```

10. To write a first simple component and its tests, create two folders in src folder named components & `__test__`.
    - why underscore(__dunder__): whatever files inside it, jest considers them as testing files - dunder testing
    - `Sum.test.js` or `Sum.spec.js`
    - `test()`
        - takes `"string" - name of the test` and `function` that test will execute
            - name should be descriptive
            - function takes `assertion` (expectation)

## helper functions
1. before performing any test cases, jest gives access to beforeAll and beforeEach
- `beforeAll()`
- `beforeEach()`
    - helpful before doing cleanup tasks (before of each test cases)

2. after performing any test cases, jest gives access to afterAll and afterEach
- `afterAll()`
- `afterEach()`
    - helpful after doing cleanup tasks (after of each test cases)

```bash
// flow: beforeAll > beforeEach 1 > afterEach 1 > beforeEach 2 > afterEach 2 > afterAll
```

11. test case in JS
```javascript
import sum from './sum';
    describe('Sum function', () => {
    it('should return the correct result when two numbers are passed in.', async() => {
    const res = await sum(2,4);
    expect(res).toBe(6); //expectation is true or false based on expected value
    });
    })
export default Sum;
```

12. Unit testing in react
## Test 1 - check whether the page is loading or not

```js
// Contact.test.js
import { render, screen } from "@testing-library/react";
import Contact from "../pages/contact/Contact";

test("should load contact page  component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

```

```bash
# got error - Support for the experimental syntax 'jsx' isn't currently enabled :
```

13. [Solution: Install @babel/preset-react](https://babeljs.io/docs/babel-preset-react)
    - to make jsx work in test cases
    - include in babel config
    - WHY?
        - what is babel?
            - transpiler: transform code from one to another
            - @babel/preset-react is helping babel in react test to convert jsx into html so that it can read 

 ```bash
# got error -  toBeInTheDocument is not a function
```

14. [Solution: we need a library @testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)

```bash
npm install --save-dev @testing-library/jest-dom
```

15. if there is not expect to be, test will return

```bash
    TestingLibraryElementError: Unable to find an accessible element with the role "button"
```

16. jest unexpected token when importing css

 ```bash
# got error -  jest unexpected token when importing css
```

- in jest.config.js, in moduleNameMapper,
```js
moduleNameMapper: {
  '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/test/jest/__mocks__/fileMock.js',
  '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
},

// OR
// INSTALL package as devDependancy
//  npm i -D identity-obj-proxy
moduleNameMapper:{
             "\\.(css|less|scss|sass)$": "identity-obj-proxy" 
        }
```
- create the following two files:
```js
// __mocks__/styleMock.js
module.exports = {};

// __mocks__/fileMock.js
module.exports = 'test-file-stub';
```

17. react-redux context value

```bash
Error: could not find react-redux context value; please ensure the component is wrapped in a <Provider>
```
- when test goes through the Header, it goes line by line and finds out redux properties and does not understand, so fails

Solution:
- provide Header with redux store whether it's in isolation.

```js
import { render } from "@testing-library/react";
import Header from "../components/header/Header";
import { Provider } from "react-redux";
import store from "../utils/store";

test("header should load with login button", () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
});
 
// using config
import { render } from "@testing-library/react";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./src/reducers/store.js";

const customRender = (ui, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    ...options,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };

```

18.  useNavigate() may be used only in the context of a <Router> component.

```bash
 Error: Uncaught [Error: useNavigate() may be used only in the context of a <Router> component.]
```

Solution:
-  wrap the Header with the `BrowserRouter`

```js
import { render, screen } from "@testing-library/react";
import Header from "../components/header/Header";
import { Provider } from "react-redux";
import store from "../utils/store";
import { BrowserRouter } from "react-router-dom";

test("header should load with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // now find whether there is login button or not
  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});

```

```bash
Error: Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
```

19. testing gives warning as well

```bash
Warning 1: Invalid DOM property `class`. Did you mean `className`?

Warning 2: `value` prop on `input` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.
```

16. error of `parsing` by jest
```bash
    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will b
```

- basically jest is not understanding import/export modules

To fix this, babel is needed
- Install `@babel/core`, `@babel/preset-env`:
```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```
- Add a `.babelrc` or `babel.config.js` file to your project root with following content:
```json
{
 "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
};
```

- although this is perfect valid JS object
```json
{ presets: [['@babel/preset-env', {targets: {node: 'current'}}]]};
```
- it's still invalid because 
a single backtick should be used around preset name but here there are two quotes so that would throw
- babelrc requires json (complete different to javascript)
- json requires double quote

9. why use babel?
    - to remove `console.log()` files
    - for better debugging experience

10. so many changes and changes in coverage report file
 - This happens when some code has changed which affects our codebase 
- We don't necessarily need to worry about these, unless they make us feel uncomfortable

11. testing component
To write unit tests for components, create separate folder named "__tests__/" inside src/, where
you will put any related test cases alongside their respective source codes.<|im_sep|>

```js
// sum.component.jsx
import React from'react';
function Sum(props){
    const numOne = props['numOne']; // accessing prop value by key directly without destructuring
    const numTwo = props['numTwo'];
    return <div>{numOne + numTwo}</div>;
    }
    export default Sum;
```

```js
# sum.component.test.js (inside same dir)
describe('Sum Component', () => {
    let wrapper;
    beforeEach(()=> {
        import SumComponent from './sum.component'
        wrapper = shallow(<SumComponent numOne={5} numTwo={7}/>);
        });
        afterEach(()=>{wrapper.unmount()});
        describe("rendering", () => {
            it('should render correctly with given values', () => {
                expect(toJson(wrapper)).toMatchSnapshot();
                })
                });
                describe("adding numbers together", function(){
                    it ('adds two number passed through props ', function (){
                        console.log(`Result: ${wrapper.find('.result').text()}`)
                        assert.equal(`${parseInt(wrapper.prop('numOne'))+ parseInt(wrapper.prop
                        ('numTwo'))}`, `${parseInt(wrapper.find(".result").text())}`);})
                        });
                        // more assertions here...
                        };
                        );
 ```

### Error 1
```bash
Support for the experimental syntax 'jsx' isn't currently enabled (6:10)
```
- jest does not understand jsx
Solution - install babel plugin `@babel/preset-react`, update `.babelrc`
```json
{
    "presets": [["@babel/preset-react", { "runtime": "automatic" }]]
    }
```

`if React is like Narendra Modi, Babel is like Amit Shah`

### Error 2 - image as js by jest
To mock images used with `require()` statement inside components or modules that are tested via Jest,
you will firstly need a module called `mock-fs` or create dummy (mock file.js)
```js
// dummyImage.js
export default "dummy.png";
```
Then import this into your component wherever required and use it accordingly and also in `jest.config.js`, config moduleNameMapper

- add provider if redux error come and wrap header  with store
- use StaticRouter for router error

12. how can we run tests using npm scripts instead of terminal commands
    ```json
    "scripts": {
        "start": "react-native start",
        "android": "react-native run-android",
        "ios": "react-native run-ios",
        "test": "./node_modules/.bin/jest"
        },
        
        # then you just need to type
        $ npm test
        and it runs all the tests in `__tests__/` directory
        You also have access to other CLI options like `--watchAll`.
        For example if you want only watch specific directories add them as arguments after `"--"` symbol
        Example usage `$ npm test __tests__/sum.spec.js -- --verbose`
        }
    ```

```bash
# Error: useNavigate() may be used only in the context of a <Router> component.
```
Solution: wrap the App component inside a MemoryRouter component from react-router-dom in your test code.

```js
import { describe, expect, it } from "vitest";
import App from "./App";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import { render, screen, userEvent } from "../test-utils.js";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(
      <MemoryRouter> {/* Wrap the component in MemoryRouter */}
        <App />
      </MemoryRouter>
    );

const welcomeText = screen.getByText(/Hello Vite \+ React!/i);

expect(welcomeText).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(
      <MemoryRouter> {/* Wrap the component in MemoryRouter */}
        <App />
      </MemoryRouter>
    );

    userEvent.click(screen.getByRole("button"));

    expect(await screen.findByText(/count is: 1/i)).toBeInT;
  });
});

```

2. Integration Testing

## Case 1: fetch, testing the Body Component with search
    - while rendering during testing, it's not rendering on browser and jsdom does not has super power of browsers but fetch is super power of browser so we have to make mock fetch function

```bash
  Warning: An update to MainLayout inside a test was not wrapped in act(...).
      
When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */
```

in async operations, state update in component, the component render should be wrapped inside a act

```js
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MainLayout from "../components/main-layout/MainLayout";
import MOCK_DATA from "../components/__testing__/__mocks__/mockRestaurantList.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

// mock fetch function
// global is global object wherever the test render will render
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render Res List for pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    )
  );

  //   console.log(document.body.innerHTML);

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  // Wait for the res-card elements to be present
  //   await waitFor(() => {

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);

  //   });
});
```