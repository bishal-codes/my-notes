# Learnings

1. data layer: passing data from one to another component, data management between states and props, state, context, 

2. ui layer: view (what is seen on webpage) - jsx powers the ui of the app (jsx -------- (browser parses) -----> html)

3. both data and ui layers (frontend layers) sync or work together, which all is happening in browser

4. handling data in web app is very complex crucial thing

    - one way is state and props: tied to component, state amd props work in child parent hierarchy
    - context is central place or kind of like a global object, can be accessible from anywhere or any component of web app
    - redux store is also accessible from anywhere of app irrespective of where app lies.

5. small scale apps can handle or manage data simply using states or props

6. for full fledged or high scalable app, redux (react library) can be useful

    - why do we need useContext()?

        - to avoid props drilling (passing data from one to another component and may grow longer)
        - context is central place from where any component of app can access or receive and modify the context
        - can use context for theme, user data,  
        - for small applications

    - why do we need redux?

        - manage data layer of our application
        - data management
        - for high scale applications

    - cons of redux?
        - complex to setup, very tough to learn and understand (a lot complexities)

    - this is why redux came up with redux-toolkit

        - redux-toolkit is standard way to write redux logic
        - originally created to address the concerns like complicated redux configuration, a lot of packages to get redux to do anything useful and redux required too much boilerplate code.

    
7. what is redux store?

    - like a big all object, have different sections
    - just like context, all the components will be able to access the redux store 
    - store is central thing and not tied to any component like context (seperate place entity out of the application): web app and store are complete different

8. when you create a state variable using useState, what is scope of state variable?
    - is restricted to the only component
    - can get data using props from parent component

9. can we have multiple context in app?
    - yes

10. in redux, one single store will hold everything
    - loggedinuser, cart items, authentication system (large big store with a lot of data)
    - to keep everything in a store, isn't is bad thing?
        - create logical separation into store
        - create slices of store (userSlice, cartSlice)

11. our components can't directly modify store
    - suppose addToCart Button can not directly modify store slice cart
    - but have to dispatch an action

12. why we can't directly modify store?
    - when there is large application, so we don't want random component to randomly modify store
    - we need to keep track of everything
    - when directly modify the data (data is the source of truth), we don't want any random component to modify data but in process associate to it. Also it can be mess 
    - its kind of like breaking app into slices or pieces (good way)
     
13. why do we have microservices architecture? Can't we write in a single place?
    - it is separation of concerns
    - it is modular (every component has its own responsibility)

14. flow of redux
    - dispatch an action ----- (call the function) -----> reducer function ----- (updates or modifies store) -----> cartSlice (store) ----- (selector to read the store or cart component is subscribed to store) -----> View
    - create store (`congifureStore()` from RTK)
    - inject store in to whole app by wrapping app using (`Provider` from react-redux)
    – create slice (`createSlice()` from RTK)
        - name od slice, initial state, reducers (actions with reducer function)
            - function takes state and action
    - export actions and reducer
    - store reducer or slice in store file

15.  what is the job of redux? 
    - to maintain or manage the core store (slices)
    - @reduxjs/toolkit is the core library of redux

16. what is the job of react-redux?
    - the bridge between react and redux.

17. store and react app are complete different. How to link store to app?
    - need Provider
    - whom to provide redux store, whole app or particular component: both
    - provide store through props using Provider of redux wrapping whole app

18. to create slice, `createSlice({})`
    - name of the slice
    - initial state of the cart
    - reducers, which will contain mapping of actions and reducer function
        - reducer function has initial state and action is data which is coming in as `action.payload`
        - reducer function takes a state and updates it but does not return anything

19. export action and reducer, component need slices
20. put the slice in store
21. subscribe component to store using useSelector
22. dispatch an action in button click