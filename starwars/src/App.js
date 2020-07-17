import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import BestCharacter from './components/BestCharacter';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [ charactersData, setCharactersData ] = useState([])

  useEffect(() =>{
    axios.get('https://swapi.dev/api/people/')
    .then(res => { setCharactersData(res.data.results) })
    .catch(err => { debugger})
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div>
      <div className="App">
        <h1 className="Header">The Galaxy's Sexiest Lineup</h1>
      </div>
      {console.log(charactersData)}
      <BestCharacter />
      {(charactersData ? <Character charactersData={charactersData}/> : <p>Error</p>)}
    </div>
  )
}

export default App;
