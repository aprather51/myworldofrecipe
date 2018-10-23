import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//API_Key
const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

export default class Recipe extends Component {
	state = {
		currentRecipe: []
	};

	componentDidMount = async () => {
		//fetch data from input or prop value named "recipeName"
		const title = this.props.location.state.recipe;

		const req = await fetch(
			`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
		);

		const res = await req.json();

		this.setState({ currentRecipe: res.recipes[0] });

		//console.log(this.state.recipes);
	};

	render() {
		console.log(this.state);
		const currentRecipe = this.state.currentRecipe;
		return (
			<div className="container">
				{currentRecipe.length !== 0 && (
					<div className="current-recipe">
						<div className="current-recipe__title">{currentRecipe.title}</div>
						<img src={currentRecipe.image_url} alt={currentRecipe.title} />
						<div className="current-recipe__author">
							By: {currentRecipe.publisher}
						</div>
						<span className="current-recipe__website">
							Visit
							<a href={currentRecipe.publisher_url}>
								{currentRecipe.publisher_url}
							</a>
						</span>
						<button>
							<Link to="/">Return Back</Link>
						</button>
					</div>
				)}
			</div>
		);
	}
}
