const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use((req, res, next) => {
  res.setHeader("Permissions-Policy", "geolocation=()");
  next();
});

app.get("/page", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    </head>
    <body>
    <h1>Fetch geolocation permission example</h1>
    <button onclick="getGeolocation()">Fetch location</button>
    <div id="result"></div>
    <script>
    function getGeolocation(){
        // check if the geolocation api is supported by the browser
        if (navigator.geolocation){
            // geolocation is supported
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    // success callback - position object contains the user's 
                    // latitude and longitude as well as accuracy
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    console.log("Latitude: ", latitude);
                    console.log("Longitude: ", longitude);
                },
                function (error) {
                    // error callback - display an error message in the result div
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            console.error("User denied the ");
                            break;
                            case error.POSITION_UNAVAILABLE:
                                console.error("Location information is unavailable.");
                                break;
                                case error.TIMEOUT:
                                    console.error("The request to get user location timed out.");
                                    break;
                                    case error.UNKNOWN_ERROR:
                                        console.error("An unknown error occurred.");
                                        break;
                    }
                }
            );
        } else {
            // geolocation not supported
            console.error("Geolocation not supported by this browser")
        }
    }
    </script>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
