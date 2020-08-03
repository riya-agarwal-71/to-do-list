const express = require('express');
const router = express.Router();

const homeController = require("../controller/home");

router.get('/',homeController.home);
router.post('/additem',homeController.additem);
module.exports = router;