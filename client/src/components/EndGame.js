import React from 'react'
import Win from './Win'
import Lose from './Lose'

function EndGame(gameInSession, matched) {
    return (
        <div>

            <Win 
            matched={matched}
            gameInSession={gameInSession}
            />
            <Lose 
            matched={matched}
            gameInSession={gameInSession}  
            />
        </div>
    )
}

export default EndGame