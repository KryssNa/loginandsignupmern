const express = require("express");
const authController = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const { registerSchema, loginSchema } = require("../validators/auth-validator");
const router = express.Router();

router.route("/").get(authController.home);
router
  .route("/register")
  .post(validate(registerSchema), authController.register);
router.route("/login").post(validate(loginSchema),authController.login);

module.exports = router;
