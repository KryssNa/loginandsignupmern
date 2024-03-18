require("dotenv").config();
const express = require("express");
const authRouter = require("./src/routers/auth-router");
const connectDB = require("./src/database/db");
const errorMiddleware = require("./src/middlewares/error-middleware");
const app = express();
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,FETCH,PATCH,DELETE",
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use(errorMiddleware);
const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port :${PORT}`);
  });
});
