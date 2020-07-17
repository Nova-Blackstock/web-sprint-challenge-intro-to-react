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
`

export default function BestCharacter(){

    return(
        <div>
            <StyledBestCharacter>Who is the hottest Star Wars character?</StyledBestCharacter>
        </div>
    )
}