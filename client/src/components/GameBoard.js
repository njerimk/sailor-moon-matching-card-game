import React from 'react';
import { useState, useEffect, useRef } from 'react';
import CardDeck from './CardDeck';
import data from '../cards.json';
import Timer from './Timer';
import EndGame from './EndGame';


export default function GameBoard() {
  const [checkCards, setCheckCards] = useState([]);
  const [matched, setMatched] = useState([]);
 

  const intervalRef = useRef();

    const onCardClick=(e, card )=>{
        e.preventDefault();
        //If the array of cards has less than 2 cards in in it and does not include
        //the card that was selected then add this card to the checkCards array
        if(checkCards.length <  2 && !checkCards.includes(card)){
            setCheckCards((prevCheckCards) => [...prevCheckCards, card])
        }
        
        if(checkCards.length === 2){
            console.log('Comparing:', checkCards[0].pair_name, card.pair_name)

             setCheckCards((prevCheckCards)=> [...prevCheckCards, card])
           
        if(checkCards[0].pair_name === checkCards[1].pair_name){

                let cardPair1 = checkCards[0]
                let cardPair2 = checkCards[1]
            console.log("Match found!")
            setMatched((prevMatched)=>[...prevMatched, cardPair1, cardPair2])
               
               
                setCheckCards([]);
            }else {
                console.log("No match.")
                setCheckCards([]);
            }
           
        }
      
      
    }
        
  
  

    


    //cards- setCards --- this would be to have the cards rendered and then refresh the cards showing only the back side.
        //the cards would reset after the gameSession ends
        //1. cards should be set to face the back originally and only turn to the front when clicked on -- done
        //2. Only 2 cards should be faced to frontImg at a time:
            //while this is happening there should be a comparison between the two:
                //1. Do the cards match/pair_name match? 
                    //if true then keep the two cards facing frontImg
                //2. If false then render the backImg of the cards
    //checkCards, setCheckCards --this is during a gameInSession if the the two cards

  const handleTimerEnd=()=>{
    console.log('Game Over!')
  }

  return (
    <div>
      <h1>Game Board</h1>
       <Timer  onTimerEnd={handleTimerEnd} matched={matched}/>
       <CardDeck data={data} onCardClick={onCardClick} matched={matched} checkCards={checkCards}/>
     
    </div>
  );
}
