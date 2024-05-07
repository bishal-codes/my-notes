# Screen Reader

Screen readers are software programs that allow blind or visually impaired users to read the text that is displayed on the computer screen with a speech synthesizer or braille display. A screen reader is the interface between the computer's operating system, its applications, and the user.

## Screen Reader in OS

- Ctrl + Alt + Z: Enable or disable screen reader in Ubuntu
- Command + F5: Enable or disable screen reader in Mac OS
- Windows + Ctrl + Enter: Enable or disable screen reader in Windows
- chrome-extensions

1. Accessible HTML

- document structure
  - headings (h1, h2, h3, h4, h5, h6)
  - lists (ul, ol, dl)
  - tables (table, th, tr, td)
  - forms (form, input, textarea, select, button)
  - links (a)
  - images (img, alt)
  - landmarks (header, nav, main, aside, footer)
  - buttons (button)
  - labels (label, input)
  - fieldsets (fieldset, legend)
  - header (header)
  - footer (footer)
  - main (main)
  - nav (nav)
  - aside (aside)
  - section (section)
  - article (article)
  - audio (audio)
  - video (video)
  - figure (figure)
  - transcript, open text captions, closed captions, audio descriptions, and sign language interpretation
  - css class hidden
    - css class visually-hidden
    - css class sr-only
    - css class screen-reader-only
    - css class offscreen

2. ARIA (Accessible Rich Internet Applications)

- aria-label
- aria-labelledby
- aria-describedby

- ARIA is structured into:

  | Role          | Property                       | State                |
  | ------------- | ------------------------------ | -------------------- |
  | role="button" | aria-label="Close"             | aria-expanded="true" |
  | role="button" | aria-describedby="description" | aria-pressed="true"  |

  - Live Regions
    - aria-live="polite"
    - aria-live="assertive"
    - aria-live="off"
