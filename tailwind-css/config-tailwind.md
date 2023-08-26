Tailwind CSS is a utility-first CSS framework for creating custom user interfaces quickly. This low-level CSS framework is highly customizable; it offers everything a developer needs to build appealing interfaces.

Pros:-
> Less bundle size
> very much customization
> Reusability
> Responsiveness
Cons:-
>Styling and html are mixed
> It takes time to learn

Installing Tailwind css with Parcel  :-
> npm install -D tailwindcss postcss
> npx tailwindcss init

Extension for tailwindcss:-  > tailwind css Intellisense

Postcss:- Postcss is a software development tool that uses JavaScript-based plugins to automate routine CSS operations.
( compile the tailwind css to normal css )


# [Configure Tailwind CSS - Vite](https://tailwindcss.com/docs/guides/vite)


1. Install Tailwind CSS and dependencies:

```bash

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

2. Configure template paths in tailwind.config.js: Add paths to template files in the content section.

``` javascript

// tailwind.config.js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],

```

3. Add Tailwind Directives: In ./src/index.css, include Tailwind directives for layers.

```css

/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

```

4. Start Build Process: Run the build process using npm run dev.

```bash

npm run dev

```

5. Using Tailwind: Apply Tailwind utility classes to style your content.

```jsx

// App.jsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

```
