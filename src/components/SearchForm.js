import React from 'react';

const SearchForm = ({ getRecipe }) => (
	<form onSubmit={getRecipe} className="input__content">
		<input type="text" name="recipeName" placeholder="Search..." />
		<span className="ico-mglass" />
	</form>
);
export default SearchForm;
