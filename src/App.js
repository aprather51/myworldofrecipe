import React, { Component } from 'react';

//components
import SearchForm from './components/SearchForm'
import Header from './components/Header'
import Recipe from './components/Recipe'

//style
import './assets/main.scss';

const API_KEY = '9624e75e99dd5329ddf4b078a64fe8ca';

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

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <SearchForm getRecipe={this.getRecipe} />
          <div className="grid">
            <Recipe recipes={this.state.recipes} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
