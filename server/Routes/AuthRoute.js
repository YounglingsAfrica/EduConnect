const { Signup, Login } = require("../Controllers/AuthController");
const router = require("express").Router();
const { resetPassword } = require("../Controllers/ResetControl");
const { updatePassword } = require("../Controllers/UpdateController");

router.post("https://sleepy-erin-trout.cyclic.app/signup", Signup);
router.post("https://sleepy-erin-trout.cyclic.app/login", Login);
router.post(
  "https://sleepy-erin-trout.cyclic.app/reset-password",
  resetPassword
);
router.post(
  "https://sleepy-erin-trout.cyclic.app/update-password",
  updatePassword
);

module.exports = router;
