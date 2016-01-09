var express = require('express');
var router = express.Router();
var indexCtrl = require("../controllers/indexController");
var multer = require('multer');

/* GET home page. */
router.get('/', indexCtrl.serveIndex);

router.post('/uploads', multer({ dest: './uploads/'}).single('upl'), indexCtrl.uploadFile);

module.exports = router;
