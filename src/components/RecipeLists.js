import React from 'react';
import { Link } from 'react-router-dom';

const RecipeLists = ({ recipes }) =>
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
			<button className="btn">
				<Link
					to={{
						pathname: `/recipe/${recipe.recipe_id}`,
						state: { recipe: recipe.title }
					}}
				>
					View Recipe
				</Link>
			</button>
		</div>
	));

export default RecipeLists;
