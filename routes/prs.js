let express = require('express');
let router = express.Router();

//Requires the Pr model
let PrModel = require('../models/Pr');
let loggedIn = require('../lib/middleware/logged-in');


router.get('/prList', loggedIn, function(req, res){
	var pr = new PrModel();
	pr.where('userId', req.user.id).fetchAll().then(function(results){
		res.render('prs/prList', {
			title: 'All PRs',
			prInfo: results.toJSON()
		});
	});
});

router.get('/create', loggedIn, function(req, res){
	res.render('prs/create', {
		title:'Add New PR'
	});	
});

router.post('/create', loggedIn, function(req,res){
	if(!req.body.liftName){
		res.error.add({
			status: 400,
			message: 'Please enter a lift name.'
		}, 'liftName');
	}
	if(!req.body.liftWeight){
		res.error.add({
			status: 400,
			message: 'Please enter a lift weight.'
		}, 'liftWeight');
	}

	if(!req.body.liftMetric){
		res.error.add({
			status: 400,
			message: 'Please select a lift metric.'
		}, 'liftMetric');
	}

	if(!res.error.send('/prs/create')){
		var pr = new PrModel({
			liftName: req.body.liftName,
			liftWeight: req.body.liftWeight,
			liftMetric: req.body.liftMetric,
			userId: req.user.id
		});

		pr.where({userId: req.user.id, liftName: req.body.liftName}).fetchAll().then(function(results){
			if(results.length === 0){
				pr.save().then(function(){
					res.redirect('prList');
				}).catch(function(){
					res.error.add({
						status: 500,
						message: 'There was an error processing your lift.'
					}).send('/prs/create');
				});
			}
			else {
				res.error.add({
					status: 400,
					message: 'This PR already exists.'
				}, 'prName').send();
			}
		});
		
	}
});


module.exports = router;