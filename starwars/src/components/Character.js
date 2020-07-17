// Write your Character component here
import React from 'react'
import style, {keyframes} from 'styled-components'

const StyledCharacter = style.div`
    background: black;
    color: purple;
    box-shadow: -5px -5px 50px 10px;
    border-radius: 10px;
    box-shadow: -5px -5px 50px 10px;
    margin: 2%;
    display: flex;
    flex-direction: column;
    text-align: center;
    li {
        &:hover {
            background: orange;
            color: white;
            padding: 5px;
            border-radius: 10px;
            text-color: green;
        }
    }   
`

function Character(props) {
    console.log(props)
    const { charactersData } = props;
    
        return (
            <StyledCharacter>
                {
                charactersData.map(character => {
                    return(
                <div>    
                {character.name === 'Obi-Wan Kenobi' ? <h1>General Ewan McGreggor! You are a bold one.</h1> : <h1>General {character.name}! You are an old one.</h1>}
                <ul>
                    {character.gender === 'n/a' ? <li>Identifies as non-binary.</li> : <li>Identifies as {character.gender}</li>}
                    <li>Motto: when you're {character.height}" and {character.hair_color === 'none' | character.hair_color === 'n/a' ? 'bald' : character.hair_color}, dating is {character.gender === 'male' ? 'hard.' : 'fun!'} </li>
                    <li>Born {character.birth_year}</li>
                    <li>{character.name === 'Palpatine' ? 'I AM the Senate.' : 'I am not the Senate.'} </li>
                    <li>{character.name === 'Darth Vader' ? 'I hate sand.' : "Sand is ok."} </li>
                </ul>
                </div>)})
                }
            </StyledCharacter>
            )
    
        }

export default Character