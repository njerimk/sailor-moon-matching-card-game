import React, {useState, useEffect, useRef} from 'react'
import Lose from './Lose'
import Win from './Win'
import GameOver from '../GameOver.png'

export default function Timer( matched) {
    
   const [time, setTime] = useState({minutes: 0, seconds: 40});
   const[gameInSession, setGameInSession]= useState(true);
   const intervalRef = useRef(null);

   useEffect(() => {
    // Declare myInterval in the outer scope
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
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);  // Empty dependencies array to ensure the effect runs only once on mount
  
  // Check for gameInSession and matched.length inside the component
  useEffect(() => {
    if (gameInSession && matched.length === 10) {
      clearInterval(intervalRef.current);
      console.log(intervalRef.current)
    }
  }, [gameInSession, matched]);  // Dependencies array to include gameInSession and matched
  


 

        return (
            <div className="timer">
                <h1>Time Remaining:</h1>
                <h1 className="timer-head">
                    {time.minutes} : {time.seconds < 10 ? `0${time.seconds}` : time.seconds}</h1>
                    {/* {!gameInSession && <img className="score-card" src={GameOver}/>} */}

                    {gameInSession && matched.matched.length === 10 || !gameInSession && matched.matched.length === 10 ? (
                            <Win matched={matched} gameInSession={gameInSession} />
                          ) : !gameInSession && matched.matched.length < 10 ? (
                            <Lose matched={matched} gameInSession={gameInSession} />
                          ) : null}
                    

                    
              
            </div>
        )
    }
