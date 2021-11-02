const express = require('express');

const {
    check,
    body
} = require('express-validator');

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
//Post Contact
router.post('/contact',
    [
        body('name', 'Por favor ingrese su nombre correctamente.')
        .isString()
        .isLength({
            min: 3
        })
        .trim(),
        body('mail', 'Por favor ingrese su email correctamente.')
        .isEmail()
        .normalizeEmail(),
        body('phone', 'Por favor ingrese su teléfono correctamente.')
        .isNumeric()
        .isLength({
            min: 9
        })
        .trim(),
        body('formMessage', 'Por favor ingrese su mensaje correctamente.')
        .isString()
        .isLength({
            min: 4
        })
    ],
    publicController.postContact);

//500 View
router.get('/500', publicController.get500);

// 404 Not Found
router.use(publicController.use404);
//Errors Handling
router.use(publicController.use500);

module.exports = router;