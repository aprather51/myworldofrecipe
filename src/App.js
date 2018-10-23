import React, { Component } from 'react';

//components
import SearchForm from './components/SearchForm'
import RecipeLists from './components/RecipeLists'

//style
import './assets/main.scss';

//API_Key
const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

class App extends Component {

  state ={
    recipes: []
  }

  getRecipe = async e => {
    //fetch data from input or prop value named "recipeName"
    const recipeName = e.target.recipeName.value;
    e.preventDefault();

     const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`)

    const fetchData = await api_call.json();

    this.setState({ recipes: fetchData.recipes})

    console.log(this.state.recipes); 
  }

  //fetch a reciepe from local storage and set it up in JSON format inside array
  componentDidMount = () => {
    const json = localStorage.getItem('recipes');
    const recipes = JSON.parse(json);
    this.setState({ recipes })
  }
  
  //update the current recipe in string and store it in localstorage
  componentDidUpdate = () => {
    const recipes = JSON.stringfy(this.state.recipes);
    localStorage.setItem('recipes', recipes);
  }

  render() {
    return (
      <> 
        <div className="container">
          <SearchForm getRecipe={this.getRecipe} />
          <div className="grid">
            <RecipeLists recipes={this.state.recipes} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
