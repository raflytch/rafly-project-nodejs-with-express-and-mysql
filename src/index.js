const express = require("express");
const usersRoutes = require("./routes/users");
const middlewareLogRequest = require("./middleware/logs");
const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
