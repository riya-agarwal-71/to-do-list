// require necessary modules
const express = require('express');
const router = express.Router();

// require the controller file which is home.js in controller folder
const homeController = require("../controller/home");

// directing the home (/) request to home function
router.get('/',homeController.home);

// directing the add item request to additem function 
router.post('/additem',homeController.additem);

// directing the delete task request to deleteitem function
router.get('/deletetask/',homeController.deleteitem);

// directing the delete all tasks request to deletetasks function
router.get('/deletealltasks',homeController.deletetasks);

// exporting the router
module.exports = router;