# Learnings:

- jest, enzyme
- manual testing, unit testing, regression testing, integration testing, load testing
- `react testing library` built on top of jest
- set up testing framework in our app

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
    - cyprus
    - covers entire users journey or ensure that an application works correctly from the user's perspective.

- [headless browsers](https://www.softwaretestinghelp.com/headless-browser-testing/)
    - web browser without graphical interface
    - those which actually access the Web Page, but the GUI is hidden from the user.
    - faster

- Unit Testing
    - individual units or components of the software are tested
    - An individual unit is a single function, method, procedure, module, component, or object. 
    - A unit test isolates and verifies a section of code in order to validate that each unit of the software's code performs as expected.

- integration testing
    - testing the integration between the components

4. Jest
    - JS testing framework with a focus on simplicity

5. React testing library

- RTL uses jest behind the scene. 

- install RTL
```bash
npm install --save-dev @testing-library/react
```

- install jes
```bash
npm i -D jest
```

- configure jest
```bash
npx jest --init
```

npx to execute just once.

- yes/no for typeScript: no
- test environment: jsdom(browser-like)
- add coverage reports: yes
- provider to instrument code for coverage: babel 
- Automatically clear mock calls, instances, contexts and results before every test? (garbage collection like thingy): yes
- created `jest.config.js`
- jest is not running on browser (but in testEnvironment jsdom), but will have some browser function capabilities

6. to start testing
```bash
npm run test
```

- install jest-environment-jsdom (if asking)
```bash
npm install --save-dev jest-environment-jsdom
```

- if no test cases written
```bash
  39 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 39 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
```

7. To write a first simple component and its tests, create two folders in src folder named components & `__test__`.
    - why underscore(__dunder__): whatever files inside it, jest considers them as testing files 
    - `sum.test.js`
    - `test()`
        - takes `name of the test` and `function` that test will execute
            - name should be descriptive
            - function takes `assertion` (expectation)

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

8. error of `parsing` by jest
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




