import React, { Component } from 'react';

export default class Recipe extends Component {
	state = {
		activeRecipe: []
	};

	componentDidMount() {}

	render() {
		console.log(this.props);
		return (
			<div>
				<h1>Recipe Component!</h1>
			</div>
		);
	}
}
