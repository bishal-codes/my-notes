# Learnings

- how we can write code in better way
- how we can optimize app
- how we can make our app performant, very fast, light-weight (loads on web page very fast)

1. Single Responsibility Principle (SOLID principle of OOP design)

   - suppose you have function or class or single identity of your code, that should have SRP
   - every class, module or function should have one responsibility or purpose in a program
   - every class should have only one reason to change
   - `reusable, maintainable, testable code`

2. custom hooks

   - helper functions
   - hooks are normal js function given by react
   - why custom hooks?
     - not mandatory
     - makes code readable, modular, reusable
   - how can we create our own custom hooks?
     - separate file for a separate hook
     - use `use` before hook name
   - fetching data as useEffect
   - how to think or start writing hooks?
     - finalize the contract
       - what is input and output of this hook

3. optimizing large scale applications

   - whenever developing react high-scalable app, parcel or any bundler is bundling or compressing all the files into one js file
   - so if there are 1000 of js components, bundled file size will keep on increasing if we add more js components and will take a lot of time to load
     `network tab > select JS >  choose file will give size`

     - `Solution`:
       - break app into smaller pieces (smaller logical chunks or bundles of one single file)
         - chunking
         - code splitting
         - dynamic bundling
         - lazy loading
         - demand loading
         - dynamic import

   - How and when to chunk small logical bundle separation of big bundled file
     - a bundle should enough code for major feature in website and then can split our bundles into smaller logical chunks
     - using `lazy(()=> import("../path"))`
   - React Router caught the following error during render Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
     - React loads vey fast, show cannot render the bundled component
     - `React.lazy` takes a function that must call a `dynamic import()`. This must return a `Promise` which resolves to a `module` with a `default export` containing a React component.
     - The `lazy` component should then be rendered inside a `Suspense` component, which allows us to show some `fallback content` (such as a loading indicator) while we’re waiting for the lazy component to load.
     - The `fallback` prop accepts any React elements that you want to render while waiting for the component to load. You can place the `Suspense` component anywhere above the lazy component. You can even wrap multiple `lazy` components with a single `Suspense` component.

# Chapter 09 - Optimizing our App

## Theory Assignment:

- When and why do we need `lazy()`?
- What is `suspense`?
- Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?
- `Advantages and Disadvantages` of using this `code splitting pattern`?
- When `do we and why do we need suspense`?

## Coding Assignment:

- Create your `custom hooks`.
- Try out `lazy and suspense`
- Make your `code clean`.

## References:

- [React Custom Hooks](https://reactjs.org/docs/hooks-custom.html)
- [React lazy](https://beta.reactjs.org/reference/react/lazy)
