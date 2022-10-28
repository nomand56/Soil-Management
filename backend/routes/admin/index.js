const express = require("express");
const router = express.Router();
const client = require("../../data/client/index");
router.get("/getAllUsers", client.getClient);

module.exports = router;
