import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Header from './Header'
import App from '../App';
import Recipe from './Recipe';
import Footer from './Footer';

const Router = () => (
  <>
  <Header />
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/recipe/:id" component={Recipe} />
		</Switch>
	</BrowserRouter>
  <Footer />
  </>
);

export default Router;
