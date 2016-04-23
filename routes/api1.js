let express = require('express');
let router = express.Router();
let path = require('path');

// router.get('/products', function(req, res, next) {

// });

let api = require('bookshelf-api')({
	path: path.join(__dirname, '../models')
});

router.use('/Pr', api);

module.exports = router;
