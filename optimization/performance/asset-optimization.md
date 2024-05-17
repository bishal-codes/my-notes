Asset optimization in frontend 💡

Asset optimization helps in reducing the webapp load time, reducing server cost, reduce browser incompatibilities and so on.

Here a few steps to optimize images, videos, fonts , javascript and css on your webapps.

👉 Compression - We can compress the size of our assets using various online tools or use optimized versions of them like img/avif, img/webp , video/webm.

👉 Adaptive Media Loading - We can load the assets on the basis of the network connection. For ex - loading smaller images on slower n/w and videos on fast n/w.

👉 Lazy Loading - Lazy loading assets will help in loading them only when they are in the viewport.

👉 Subset Fonts - Many fonts can be a subset or even split into multiple Unicode ranges to deliver only the characters needed for a particular page.
By using @font-face, we can use the Unicode range descriptor to specify a list of range values.

👉 Asynchronously load JS/CSS - Third-party scripts should always be loaded asynchronously unless they are required to run before the page can be rendered.

👉 Preloading WebFonts - Using font-display to control how browsers behave with unavailable fonts, we can prevent blank pages and layout shifts due to font loading.

👉 Minify CSS/JS - Minifying CSS and JS files will help in reducing the file size and hence the load time.

👉 Tree Shaking - Tree shaking is a process that removes unused code from the final bundle. It helps in reducing the bundle size and hence the load time.

👉 Code Splitting - Code splitting is a technique used to split the code into smaller bundles which can be loaded on demand or in parallel.

👉 Image Optimization - Image optimization is the process of reducing the file size of an image without affecting its quality. This can be done by using various tools like ImageOptim, ImageAlpha, ImageMagick, etc.

👉 Video Optimization - Video optimization is the process of reducing the file size of a video without affecting its quality. This can be done by using various tools like HandBrake, FFmpeg, etc.

👉 Font Optimization - Font optimization is the process of reducing the file size of a font without affecting its quality. This can be done by using various tools like FontForge, FontSquirrel, etc.

👉 JavaScript Optimization - JavaScript optimization is the process of reducing the file size of a JavaScript file without affecting its functionality. This can be done by using various tools like UglifyJS, Closure Compiler, etc.

Asset Optimization in Backend 💡

Asset optimization in backend is a process of optimizing the assets like images, videos, fonts, javascript and css on the server side before serving them to the client.

Here are a few steps to optimize assets on the server side:

👉 Compression - We can compress the size of our assets using various tools like gzip, brotli, etc.

👉 Caching - We can cache the assets on the server side to reduce the load time for subsequent requests.

👉 Minification - We can minify the assets like CSS, JS, etc. to reduce the file size and hence the load time.
