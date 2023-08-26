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