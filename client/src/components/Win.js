import React from 'react'

export default function Win (matched, gameInSession){



        return (
            <div id="popup2" class="overlay">
                {gameInSession === false && matched.length === 14 ? 

                <div className="pixel">                
                    {/* <a class="close" href="http://localhost:3001/game">&times;</a> */}
                   You Win!

            </div>: null}
        </div>

        )
    }
