import Header from './components/header/Header.jsx';
import './App.css';
import Container from './components/container/Container.jsx';
import Route from './modules/Route.js';
import { useState, useEffect, useCallback } from 'react';

function App() {
  
 	let [currentPath, setCurrentPath] = useState('index');
	let curDarkStorage = localStorage.getItem('dark') === 'true';
	const [dark, setDark] = useState(false);

  	const setPath = useCallback(async () => {
    	let r = new Route();
    	setCurrentPath(r.getUrl());
  	}, []);

  	useEffect(
    	() => {setPath()}, [setPath]
  	);

	if(curDarkStorage != dark) {
		toggleDark();
	}

	function toggleDark() {
		let value = dark === true ? false : true;
		localStorage.setItem('dark', value);
		setDark(value);
	}

  	return (
		<>
    	<div className={dark === true ? 'App dark' : 'App'}>
		<Header curPath={currentPath} changeDark={toggleDark}/>
		
		<Container curPath={currentPath}></Container>
		
		</div>
		</>
	);
}

export default App;
