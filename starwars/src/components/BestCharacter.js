import React from 'react'
import style, {keyframes} from 'styled-components'

const kfBest = keyframes`
100% {
    color: black;
}
`

const StyledBestCharacter = style.div`
    color: cyan;
    animation: ${kfBest} 5s ease-in-out forwards;
    display: flex;
    h1 {
        padding: 50px;
    }
    .dexter{
        color: red;
        border-radius: 10px;
        &:hover {
            box-shadow: 0px 0px 50px 20px;
        }
    }
    .iggy {
        width: 21%;
        color: green;
        border-radius: 10px;
        &:hover {
            box-shadow: 0px 0px 50px 40px;
        }
    }
    .crumb {
        width: 29%;
        color: red;
        border-radius: 10px;
        &:hover {
            box-shadow: 25px 0px 50px 20px;
        }
    }
`

export default function BestCharacter(){

    return(
            <StyledBestCharacter>
                <h1>Who's the hottest Star Wars character?</h1>
                <img className= 'dexter' src='https://i.imgur.com/X87OFmZ.gif' alt='imagine pure aesthetic perfection'></img>
                <img className= 'iggy' src='https://media.giphy.com/media/zSX7tUskUtMWs/giphy.gif' alt='imagine robot sex'></img>
                <img className= 'crumb' src='https://66.media.tumblr.com/5fca4aaf1bb71fe62644323e6a4ef353/tumblr_pqxo242AOx1tdkro1o1_400.gifv' alt= 'imagine joy itself'></img>
            </StyledBestCharacter>
    )
}