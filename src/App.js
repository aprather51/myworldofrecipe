import React, { Component, Fragment } from 'react';

//components
import SearchForm from './components/SearchForm';
import RecipeLists from './components/RecipeLists';

//style
import './assets/main.scss';

//API_Key - Register API key - https://www.food2fork.com/about/api and obtain API Keys. Include API_KEY inside .env of root directory.
const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

class App extends Component {
	state = {
		recipes: []
	};

	getRecipe = async e => {
		//fetch data from input or prop value named "recipeName"
		const recipeName = e.target.recipeName.value;
		e.preventDefault();

		// const api_call = await fetch(
		// 	`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`
		// );

		const api_call = await fetch(
			`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`
		);

		const fetchData = await api_call.json();
		this.setState({ recipes: fetchData.recipes });
		console.log('data:', fetchData);
	};

	//fetch a stored item eg reciepe from local storage and set it up in JSON format inside array
	componentDidMount = () => {
		const json = localStorage.getItem('recipes');
		const recipes = JSON.parse(json);
		this.setState({ recipes });
	};

	//Set the current recipe items into local storage in string format. This is to store items at local instead of re-request items from API server.
	componentDidUpdate = () => {
		const recipes = JSON.stringify(this.state.recipes);
		localStorage.setItem('recipes', recipes);
	};

	render() {
		console.log(this.state);
		return (
			<Fragment>
				<div className="container">
					<SearchForm getRecipe={this.getRecipe} />
					<div className="grid">
						<RecipeLists recipes={this.state.recipes} />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default App;
