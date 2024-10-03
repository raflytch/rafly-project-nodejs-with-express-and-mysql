const expres = require("express");
const router = expres.Router();
const userController = require("../controller/users");

// Create a new user
router.post("/", userController.createNewUser);

// Read the existing user
router.get("/", userController.getAllUser);

// Update the existing user with PATCH
router.patch("/:idUser", userController.updateUser);

// Delete the existing user with DELETE
router.delete("/:idUser", userController.deleteUser);

module.exports = router;
