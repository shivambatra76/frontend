import { Fragment } from 'react';
import Router from './routes/index';
import './App.css';
import './assets/styles/style.css'

function App() {

	return (
		<Fragment>
		<div className="App">
			<Router/>
		</div>
		<div class="ocean">
			<div class="wave"></div>
			<div class="wave"></div>
			<div class="wave"></div>
		</div>
	</Fragment>
	);
}

export default App;
