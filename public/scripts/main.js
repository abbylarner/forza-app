// var $ = require('jquery');
// var moment = require('moment');

// $(document).ready(function(){
// 	$.ajax({
// 	  url: '/api/v1/Pr'
// 	})
// 	.done(function(data) {
// 	  for(var i = 0; i < data.length; i++){
// 	  	var liftName = data[i].liftName;
// 	  	var liftDate = data[i].createdAt;
// 	  	var liftDateFormatted = moment(liftDate).format('MMM Do YYYY');
// 	  	var liftId = data[i].id;
// 	  	//List All PR's
// 	  	$('#prList').append('<h3><a href="">' + liftName + '</a></h3>' + '<p>' + liftDateFormatted + '</p>'+ '<a href="" data-id="' + liftId + '">Update</a>');


// 	  	//Check if PR Already exists
// 	  	$('#addPr').submit(function(){
// 		  	console.log($('#liftName').value);
// 	  	});

// 	  }
// 	})
// 	.fail(function() {
// 	  console.log('Ajax failed to fetch data.');
// 	});
// });


import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Dashboard from './components/pages/Dashboard';
import PrList from './components/pages/PrList';
import AddPr from './components/pages/AddPr';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/pr-list" component={PrList} />
			<Route path="/add-pr" component={AddPr} />
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));
