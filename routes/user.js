"use strict"

const express = require('express');
let router = express.Router();

router.use(express.static('public'));

router.get('/',function (req,res){
    res.render('pages/index');
});
router.get('/about',function (req,res){
    res.render('pages/about');
});
router.get('/privacy_policy',function (req,res){
    res.render('pages/privacy_policy');
});
router.get('/safety',function (req,res){
    res.render('pages/safety');
});
router.get('/services',function (req,res){
    res.render('pages/services');
});

module.exports = router;