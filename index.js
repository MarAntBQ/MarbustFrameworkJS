const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const session = require('express-session');

const csrf = require('csurf');

const flash = require('connect-flash');

const app = express();

const csrfProtection = csrf();

app.set('view engine', 'ejs');

app.set('views', 'views');

const PublicRoutes = require('./routes/public');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
      secret: 'my secret',
      resave: false,
      saveUninitialized: false
    })
  );

  app.use(csrfProtection);
  //Use Flash Messages
  app.use(flash());
  
  app.use((req, res, next) => {
      res.locals.csrfToken = req.csrfToken();
      next();
    });

app.use(PublicRoutes);

app.use((error, req, res, next) => {
    res.status(500).render('template', {
        pageTitle: 'Error de Validación',
        PagetoLoad: '500',
        SocialLinks: {
            Facebook: "https://www.facebook.com/",
            Twitter: "https://twitter.com/",
            WhatsApp: "https://api.whatsapp.com/send?phone=593",
            Phone: "tel:+99999999999",
            Instagram: "https://www.instagram.com/",
            Youtube: "https://www.youtube.com/",
            Email: "mailto:@",
            Copyright: "https://Sites.MarBust.com"
        }
    });
  });

app.listen(80);