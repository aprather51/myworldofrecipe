import React from 'react';

const Recipes = ({ recipes }) =>
	recipes.map(recipe => (
		<div className="box" key={recipe.recipe_id}>
			<div className="box__thumbnail">
				<img src={recipe.image_url} alt={recipe.title} />
			</div>

			<div className="box__info">
				<div className="box__title">
					{recipe.title.length < 20 ? (
						`${recipe.title}`
					) : (
						`${recipe.title.substring(0, 25)}...`
					)}
				</div>
				<div className="box__subtitle">
					By: <a href={recipe.publisher_url}>{recipe.publisher}</a>
				</div>
			</div>
			<button className="btn">View Recipe</button>
		</div>
	));

export default Recipes;
