import React from 'react'

export default function Lose(matched, gameInSession) {
    
        return (
        <div class="endgame">
            {(gameInSession === false && matched.length < 14) || null ? 
                <div className="popup">
                        You Lose!

		
	        </div>  :null}

</div>
          
        )
    }
