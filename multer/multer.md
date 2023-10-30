- library in a Node.js application to handle file uploads.
- node.js middleware for handling multipart/form-data
- sets up a disk storage engine for storing uploaded files and then creates a middleware for handling file uploads.

### Installation:

```bash
npm i --save multer
```

### Basic Usage:

- Add `enctype="multipart/form-data"` to your HTML form to indicate file uploads.
- Configure Multer with a storage destination and optionally a filename customization.
- Use `upload.single('fieldname')` middleware to handle a single file upload.
- Use `upload.array('fieldname', limit)` middleware to handle multiple file uploads.

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
  <input type="submit" value="Upload" />
</form>
```

1. Configuration: You configure Multer using various options. The most common one is dest, which specifies where uploaded files should be stored. For instance:

```javascript
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
```

2. Handling Single File: If you're dealing with a single file, use the upload.single middleware. For instance:

```javascript
app.post("/upload", upload.single("avatar"), (req, res) => {
  // req.file contains the uploaded file
});
```

3. Handling Multiple Files: To handle multiple files, use upload.array or upload.fields middleware. For instance:

```javascript
app.post("/upload", upload.array("photos", 12), (req, res) => {
  // req.files is an array of uploaded files
});
```

4. Memory Storage: By default, Multer stores files on disk, but you can also use memory storage for storing files in memory as Buffer objects:

```javascript
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
```

5. Limits: You can set limits on file sizes, field sizes, and more using the limits option:

```javascript
const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 1024 * 1024, // Max file size (1MB)
  },
});
```

6. Error Handling: Multer can encounter errors while uploading. You can handle these errors using middleware. Check if the error is an instance of multer.MulterError:

```javascript
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // Handle Multer error
    } else if (err) {
      // Handle other errors
    }
    // Everything is fine
  });
});
```

API

| Key          | Description                                 | Note          |
| ------------ | ------------------------------------------- | ------------- |
| fieldname    | Field name specified in the form            | ----          |
| originalname | Name of the file on the user's computer     | ----          |
| encoding     | Encoding type of the file                   | -----         |
| mimetype     | Mime type of the file                       | -----         |
| size         | Size of the file in bytes                   | ------        |
| destination  | The folder to which the file has been saved | DiskStorage   |
| filename     | The name of the file within the destination | DiskStorage   |
| path         | The full path to the uploaded file          | DiskStorage   |
| buffer       | A Buffer of the entire file                 | MemoryStorage |

```js
// setup multer for validation and upload destination
const fileUploadDestination = "public/img/products";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let error = null;
    // validation test if needed ....
    cb(error, fileUploadDestination);
  },
  filename: (req, file, cb) => {
    const fullFilename = Date.now() + "-" + file.originalname;

    cb(null, fullFilename);
  },
});

// upload destination
const upload = multer({ storage });
```

1. `File Upload Destination`: The fileUploadDestination variable specifies the directory where uploaded files will be stored. In this case, it's set to "public/img/products".

2. `Storage Configuration`: The storage variable is configured using multer.diskStorage. This storage engine defines how and where to store the uploaded files. It has two functions:

   - `destination`: This function determines the destination directory for the uploaded files. It receives the request object (req), the uploaded file object (file), and a callback (cb) function. In this example, it sets an error to null (no error) and specifies the fileUploadDestination as the destination directory.\
   - `filename`: This function determines the filename for the stored file. It receives the request object (req), the uploaded file object (file), and a callback (cb) function. In this example, it generates a unique filename using the current timestamp (Date.now()) and the original filename of the uploaded file.

3. `Multer Middleware`: The upload variable is created by calling multer({ storage }). This sets up a middleware that uses the configured storage engine for handling file uploads.
