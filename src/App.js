import React, { Fragment } from 'react';
import './assets/styles/App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
	return (
		<Fragment>
			<Header />
			<Home />
			<Footer />
		</Fragment>
	);
}

export default App;
