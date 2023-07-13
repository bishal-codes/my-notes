# Learnings

## hooks concept: useEffect, useState

1. useEffect() hook

   - takes two arguments (callback func and dependency array)
   - when is this useEffect or callback func called?
     - is called after every render of the component
       - but `dependency array` changes the behavior of its render
   - dependency array is not mandatory, only callback func is mandatory inside useEffect
   - How is dependency array is related with the callback function?
     - if `dependency array is not passed` in useEffect, useEffect is called (callback func will render) every time component renders.
     - if `empty dependency array is passed`, useEffect is called (callback func will render) only on initial render and just once.
     - if `there is sth in dependency array`, useEffect is called (callback func will render) every time sth is updated or changes.

2. useState() hook
   - best practices
     - never create useState outside of component
     - always call useState hook at the top of functional component
       - will have less inconsistency
       - JS is synchronous single threaded language (code runs line by line)
       - calling at the top will initially create the state variable and react will understand easily
   - never create useState inside block or if else, for loop, local func or any conditions, but only at the top level

## routing in react app: npm i `react-router-dom`

- how we can create multiple url routes
- how we can create nested routes
- how we can create different pages inside application

1. routing configuration

   - when we have to create routes, have to create routing configuration: `createBrowserRouter()` - reccomended
     - uses the DOM History API to update the URL and manage the history stack.
   - what is route configuration?
     - some information that will define or tell the browser router what will happen on specific route or path
   - `createBrowserRouter()` takes a list of paths `[]`
     - path is nothing but an object `{}`
       - contain path, element
   - to render the router configuration, use `RouterProvider`

2. error routing configuration (handling error)

   - creating router error page
   - `errorElement: <errorComponent />`
   - hook for error config given by router-dom: `useRouteError()`
     - more info about error

3. childrenRoutes

   - `children`: list of path of children `[]`
   - `Outlet`: is a component loads children component according to the path of children
     - is Outlet on the HTML DOM?
       - whatever the route path of children component is Outlet is taking, Children component is rendered in DOM

4. Linking links to page component

   - create an anchor tag (<a href="http://">) and redirect to the page
   - never use anchor tag in react to route to another page
     - whole page gets refreshed
   - without refreshing page, route to another page for faster app or page load: `Link` Component

5. Single Page Application (SPA)

   - just one page, just components gets interchanged
   - EVERYTHING IS COMPONENT in React.
   - a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page.
   - All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required.
   - An SPA is sometimes referred to as a `single-page interface (SPI)`.

6. two types of routing in web application

   - client side routing
     - not making any network calls
     - all the components are already loaded into app
     - (when app loads) ----> app has all the components ---> when clicked in anchor tag ----> just loads the component in the web ui
     - during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend.
     - All `Single Page Applications uses client-side routing`.
   - server side routing
     - (about.html, index.html, index.css, index.js) ---- (click on anchor tag `/about.html`) ----> reloads the whole page ---- (sends network call to about.html and fetches html) ----> renders to web page
     - every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

7. dynamic routing
   - routing that takes place as your app is rendering, not in a configuration or convention outside of a running app.
   - `path: "/restaurants/:resId"`
   - how to read resId in component
     - `useParams` hook

# Chapter 07 - Finding the Path

## Theory Assignment:

- What are various ways to `add images` into our App? Explain with `code examples`.
- What would happen if we do `console.log(useState())`?
- How will `useEffect` behave if we `don't add` a `dependency array`?
- What is `SPA`?
- What is the `difference` between `Client Side Routing` and `Server Side Routing`?

## Coding Assignment:

- Add `Shimmer Effect without installing a library`.
- Install `react-router-dom`.
- Create an `appRouter` and `Provide it to the app`.
- Create a `Home, About, and Contact Page` with Link (use child routes).
- Make an `Error page` for `routing errors`.
- Create a `Restaurant Page` with `dynamic restaurant ID`.
- (Extra) - Create a `login Page` using `Formik Library`.

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [React Router DOM](https://reactrouter.com/en/main)
- [Client Side Routing](https://reactrouter.com/en/main/start/overview)
- [Formik](https://formik.org/)

## Q: What are various ways to `add images` into our App? Explain with `code examples`.

A: Using the `full URL of the image` for the web (CDN) or any public images.
Example :

```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

Adding the image into the project
`Drag your image into your project` and `import it` into the desired component

```
import reactLogo from "./reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.

```
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

## Q: What would happen if we do `console.log(useState())`?

A: If we do `console.log(useState())`, we get an array `[undefined, function]` where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.

## Q: How will `useEffect` behave if we `don't add` a `dependency array`?

A: Syntax of `useEffect` is:

```
useEffect(() => {}, []);
```

Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.

```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```

Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.

```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```

Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.

```
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```

## Q: What is `SPA`?

A: `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

## Q: What is the difference between `Client Side Routing` and `Server Side Routing`?

A: In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`.
