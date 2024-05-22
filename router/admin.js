const express = require("express");
const router = express.Router();

const { addUsuario, delUsuario } = require("../omodel/actions");


router.post("/post",addUsuario);
router.delete("/del",delUsuario);

module.exports = router;