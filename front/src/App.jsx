import Header from './components/header/Header.jsx';
import './App.css';
import Container from './components/container/Container.jsx';
import Route from './modules/Route.js';
import { useState, useEffect, useCallback} from 'react';
import StarRating from './components/StarRating';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function App() {

  /**
   * permanent state required
   * components: Header, Menu, Container, Table, Form, StarRating
   */
  
  const [currentItem, setCurrentItem] = useState();
  let [currentPath, setCurrentPath] = useState('index');

  const setPath = useCallback(async () => {
    let r = new Route();
    setCurrentPath(r.getUrl());
  }, []);

  useEffect(
    () => {setPath()}, [setPath]
  )

  return (
    <div className="App">
      <Header curPath={currentPath}/>

      <StarRating
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />

      <Container curPath={currentPath}></Container>
      
    </div>
  );
}

export default App;
