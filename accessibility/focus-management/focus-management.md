# Focus Management

- tab navigation
- keyboard shortcuts
- skip links
- active element
- tab trapping
- page navigation

## Tab Navigation

- Tab key: move focus forward
- Shift + Tab: move focus backward
- Tabindex: 0, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
- Tabindex: -1: focusable but not reachable by keyboard
- Space key: activate a link or button
- Enter key: activate a link or button
- arrows: navigate through a list
- esc key: close a dialog

## Keyboard Shortcuts

- Accesskey: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
- using JS

```js
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    console.log("Save");
  }
});
```

## Skip Links

- to skip over header links and go directly to the main content or context

## Active Element

- a modal is about to open
- store the current active element
- when the modal closes, set the focus back to the stored active element

## Tab Trapping

- when a modal is open
- focus should be trapped within the modal
- when the modal closes, set the focus back to the last active element

## Page Navigation

- contentElement.focus()
- when a user navigates to a new page
- set the focus to the main content or context
- use skip links to skip over header links
- use aria-current to indicate the current page
- use aria-label to provide a description of the page
- use aria-labelledby to provide a label for the page
- use aria-describedby to provide a description of the page
- use aria-hidden to hide the page from screen readers
- use aria-live to provide live updates to the page
- use aria-pressed to indicate the pressed state of a button
- use aria-expanded to indicate the expanded state of a button
- use aria-controls to provide a description of the content that is controlled by the button
