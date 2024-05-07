# Color Contrast

Color contrast is the difference in luminance or color that makes an object distinguishable. In web design, color contrast is important for readability and accessibility. It ensures that text is readable and that users with visual impairments can perceive the content.

| font size  | size in px | minimum contrast ratio |
| ---------- | ---------- | ---------------------- |
| small text | < 18.66px  | 4.5:1                  |
| large text | >= 18.66px | 3:1                    |

- use em instead of px for font size
- prefers-color-scheme: dark and prefers contrast

```js
function toggle() {
  var main = document.querySelector("main");
  var currentTheme;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    currentTheme = "light";
  } else {
    currentTheme = "dark";
  }
}
```

- prefers-reduced-motion: reduce

## Contrast Ratio

The contrast ratio is a measure of the difference in luminance or color that makes an object distinguishable. It is calculated using the following formula:

```css
contrast-ratio = (L1 + 0.05) / (L2 + 0.05)
```

where:

- L1 is the relative luminance of the lighter of the colors
- L2 is the relative luminance of the darker of the colors
