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
						<Link to="/" className="return">
							&larr; Return Back
						</Link>
						<div className="current-recipe__title">{currentRecipe.title}</div>
						<div className="current-recipe__grid">
							<div className="img-wrap">
								<img src={currentRecipe.image_url} alt={currentRecipe.title} />
							</div>
							<div className="current-recipe__info">
								<div className="current-recipe__author">
									Publshed By: <strong>{currentRecipe.publisher}</strong>
								</div>
								<span className="current-recipe__website">
									Website:{' '}
									<strong>
										<a href={currentRecipe.publisher_url}>
											{currentRecipe.publisher_url}
										</a>
									</strong>
								</span>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}
