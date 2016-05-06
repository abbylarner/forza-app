import React from 'react';
import Header from './sub-components/Header.js';
import fetch from 'howhap-fetch';

export default React.createClass({
	
	getInitialState: function() {
		return {
			prData: []
		};
	},
	
	componentWillMount: function() {
		fetch.get('/api/v1/Pr')
		.then(function(prs) {
			this.setState({
				prData: prs
			});
		})
		.catch(function(err) {
			console.log();
		});
	},
	
	render: function() {
		return (
			<main>
				<Header/>
				{this.props.children}
			</main>
		);
	}
});