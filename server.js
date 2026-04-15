const express = require("express");
const app = express();
// serve static files (HTML, CSS)
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});