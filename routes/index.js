var express = require('express');
var router = express.Router();
// var User = require('../models/users');
// var Course = require('../models/course');
// var Institution = require('../models/institution');
// var StudyArea = require('../models/studyArea');
// var Application = require('../models/application');
// var Course = require('../models/course');


router.get('/', function(req, res){

    res.render('index');
});

router.get('/services', function(req, res){

    res.render('service');
});

router.get('/contact', function(req, res){

    res.render('contact');
});

router.get('/about', function(req, res){

    res.render('about');
});

module.exports = router;
