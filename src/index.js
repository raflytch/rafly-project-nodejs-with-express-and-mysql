require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");

const usersRoutes = require("./routes/users");
const middlewareLogRequest = require("./middleware/logs");
const staticFile = require("./middleware/staticfile");
const upload = require("./middleware/multer");
const errorHandling = require("./middleware/errorHandling");
const app = express();

app.use(middlewareLogRequest);

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/assets", staticFile);

app.post("/upload", upload.single("photo"), async (req, res, next) => {
  try {
    res.status(200).json({
      statusCode: 200,
      message: "Upload success",
      data: req.file,
    });
  } catch (error) {
    next(error);
  }
});

app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
