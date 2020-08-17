const express = require("express"); // Express web server framework
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const compression = require('compression') // middleware for compressing 

// * express server
const app = express();
const PORT = process.env.PORT || 8888;

// compression
app.use(compression());

// * mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

// * server settings
app
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json());

// TODO: route files
// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
