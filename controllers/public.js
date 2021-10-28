const socialLinks = {
    Facebook: "https://www.facebook.com/",
    Twitter: "https://twitter.com/",
    WhatsApp: "https://api.whatsapp.com/send?phone=593",
    Phone: "tel:+99999999999",
    Instagram: "https://www.instagram.com/",
    Youtube: "https://www.youtube.com/",
    Email: "mailto:@",
    Copyright: "https://Sites.MarBust.com"
}

const path = require('path');

const express = require('express');

const router = express.Router();

//Home
exports.getIndex = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Home',
        PagetoLoad: 'home',
        SocialLinks: socialLinks
    });
};
//About
exports.getAbout = (req, res, next) => {
    res.render('template', {
        pageTitle: 'About',
        PagetoLoad: 'about',
        SocialLinks: socialLinks
    });
};

//Services
exports.getServices = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Services',
        PagetoLoad: 'services',
        SocialLinks: socialLinks,
        Title: 'Mijin'
    });
};

//Contact
exports.getContact = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Contact',
        PagetoLoad: 'contact',
        SocialLinks: socialLinks
    });
};

//404
exports.use404 = (req, res, next) => {
    res.status(404).render('template', {
        pageTitle: 'Page Not Found',
        PagetoLoad: '404',
        SocialLinks: socialLinks
    });
};
