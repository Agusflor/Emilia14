const express= require('express');
const router = express.Router();

const {index, about, contact}= require('../controllers/indexController') 

router
    .get('/',index)
    .get('/about',about)
    .get('/contact', contact);


module.exports= router;