import React, {useState, useEffect} from 'react'
import EndGame from './EndGame'

export default function Timer(onTimerEnd, matched) {
    
   const [time, setTime] = useState({minutes: 1, seconds: 0});
   const[gameInSession, setGameInSession]= useState(true);

    useEffect(() => {
        const myInterval = setInterval(() => {
          setTime((prevTime) => {
            const { seconds, minutes } = prevTime;
    
            if (seconds > 0) {
              return { ...prevTime, seconds: seconds - 1 };
            }
    
            if (minutes === 0) {
              clearInterval(myInterval);
              setGameInSession(false);
              return prevTime;
            }
    
            return { minutes: minutes - 1, seconds: 59 };
          });
        }, 1000);
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(myInterval);
      }, []);

        return (
            <div className="timer">
                <h1>Time Remaining:</h1>
                <h1 className="timer-head">
                    {time.minutes} : {time.seconds < 10 ? `0${time.seconds}` : time.seconds}</h1>
                    {!gameInSession && <p>Game Over!</p>}
                {!gameInSession && matched.length === 14 ? null : <EndGame matched={matched} gameInSession={gameInSession} /> }
            </div>
        )
    }
