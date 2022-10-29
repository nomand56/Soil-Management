const express = require("express");
const router = express.Router();
const client = require("../../controllers/users/index");
router.get("/getAllUsers", client.getClient);

module.exports = router;
