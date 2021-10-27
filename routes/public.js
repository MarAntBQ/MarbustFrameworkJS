const path = require('path');

const express = require('express');

const publicController = require('../controllers/public');

const router = express.Router();

//Home
router.get('/', publicController.getIndex);
//About
router.get('/about', publicController.getAbout);
//Services
router.get('/services', publicController.getServices);
//Contact
router.get('/contact', publicController.getContact);
// 404 Not Found
router.use(publicController.use404);

module.exports = router;