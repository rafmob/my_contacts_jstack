const { Router } = require('express');

const ContactController = require('./app/controller/ContactController')

const router = Router();

router.get(
  '/contacts',
  (request, reesponse, next) => {
    request.appId = 'MeuAppID';
    next();
  },

  ContactController.index
);

router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts/', ContactController.store);
router.put('/contacts/:id', ContactController.update);

module.exports = router;