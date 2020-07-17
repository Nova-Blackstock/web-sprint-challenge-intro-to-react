// Write your Character component here
import React from 'react'
import style, {keyframes} from 'styled-components'

const kfCharacter = keyframes`
    100% {
        background: cyan
        color: maroon
    }
`

const StyledCharacter = style.div`
    background: black;
    color: purple;
    box-shadow: -5px -5px 50px 10px;
    border-radius: 10px;
    box-shadow: -5px -5px 50px 10px;
    animation: ${kfCharacter} 15s ease-in-out forwards;
`

function Character(props) {
    console.log(props)
    charactersData.map(character => {
        return (
            <StyledCharacter>
                <h1>General {character.name}! You are a bold one.</h1>
                <ul>
                    <li>Identifies as {character.gender}</li>
                    <li>Motto: when you're {character.height} and {character.hair_color}, dating is {character.gender === 'male' ? 'hard.' : 'fun!'} </li>
                    <li>Born {character.birth_year}</li>
                    <li>{character.name === 'Palpatine' ? 'I AM the Senate.' : 'I am not the Senate.'} </li>
                    <li>{character.name === 'Darth Vader' ? 'I hate sand.' : "Sand is ok."} </li>
                </ul>
            </StyledCharacter>
        )
    }) 
}

export default Character