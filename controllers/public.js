const path = require('path');

const express = require('express');

const router = express.Router();

//Home
exports.getIndex = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Home',
        PagetoLoad: 'home',
    });
};
//About
exports.getAbout = (req, res, next) => {
    res.render('template', {
        pageTitle: 'About',
        PagetoLoad: 'about',
    });
};

//Services
exports.getServices = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Services',
        PagetoLoad: 'services',
        Title: 'Mijin'
    });
};

//Contact
exports.getContact = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Contact',
        PagetoLoad: 'contact'
    });
};

//404
exports.use404 = (req, res, next) => {
    res.status(404).render('template', {
        pageTitle: 'Page Not Found',
        PagetoLoad: '404',
    });
};