const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const viewRouter = require("./routes/viewRouter");
const collectionRouter = require("./routes/collectionRouter");
const AppError = require("./utils/appError.js");

dotenv.config();

const app = express();

// For frontend file serving
app.set("view engine", "pug");
app.set("views", "./view");
app.use(express.static("./public"));

app.use(cors());

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// For view
// app.use('/', viewRouter);

// For API
app.use("/api/collection", collectionRouter);

// For Server setup
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`server running on ${PORT} :${process.env.NODE_ENV}`)
);
