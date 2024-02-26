import React from 'react'
import YouLose from '../YouLose.png'

export default function Lose(matched, gameInSession) {
    
        return (
                <div className="lose-notif">
                        <img src={YouLose} width={500}/>
            	</div>
          
        )
    }
