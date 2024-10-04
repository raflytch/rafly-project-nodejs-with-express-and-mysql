require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");

const usersRoutes = require("./routes/users");
const middlewareLogRequest = require("./middleware/logs");
const app = express();

app.use(middlewareLogRequest);

app.use(express.json());

app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
