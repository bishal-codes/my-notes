The `crossorigin` attribute applies to elements like `<audio>, <img>, <link>, <script>, and <video>`. 
It manages `CORS (Cross-Origin Resource Sharing)` behavior for these elements, controlling how they handle cross-origin requests and manage fetched data.

1. Values:

    - `anonymous`: Request uses `CORS headers` and credentials flag is set to '`same-origin`'. There is no exchange of user credentials via cookies, client-side SSL certificates or HTTP authentication, unless destination is the same origin..
    - `use-credentials`: Request uses CORS headers, credentials flag is set to '`include`' and user credentials are always included.
    - `"" or empty`: Same as anonymous.

2. Usage:

-  `Default`: No CORS, limitations applied.
- `img, audio, video`: May be tainted when used in `<canvas>`.
 - `script`: Limited access to error logging.
- `link`: May discard requests with improper crossorigin headers.

3. Examples:

`<script>`: Fetch script without user-credentials.

 ```html
 <script
   src="https://example.com/example-framework.js"
   crossorigin="anonymous"></script>
```

4. `Web manifest`: Use use-credentials for fetching manifests requiring credentials.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

`**Note**: Not supported for rel="icon" in Chromium-based browsers.`