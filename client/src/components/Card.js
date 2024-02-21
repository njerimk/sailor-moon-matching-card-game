import React, {Suspense} from 'react'
import {useState, useEffect} from 'react';

export default function Card({card, onCardClick, matched, checkCards}) {
    
    const[isFlipped, setIsFlipped]=useState(false);

    useEffect(()=> {
        if(matched.includes(card)){
            setIsFlipped(true);
        }
    }, [card, matched])

    const showCard=(e)=>{
        e.preventDefault();
        setIsFlipped(true)
        onCardClick(e,card)

        if (checkCards.length === 2){
            if(checkCards[0].pair_name !== checkCards[1].pair_name){
                setTimeout(()=> {
                    setIsFlipped(false);
                    onCardClick(e, checkCards[0]);
                    onCardClick(e, checkCards[1]);
                }, 1000);
            }
        }
   
      }

      //if the checkcards.includes()

    return (
        
     <Suspense>

        <div className="card"
            key={card.id}
        
        >
            <div className="card-body">

                
                <img 
                className="card-img-top" 
                src={(isFlipped && checkCards.includes(card)) || matched.includes(card) ? card.frontImg : card.backImg
                } 
                alt="Card image"
                id="card-img-front"
                onClick={showCard}
                             
                />
          

                
            
            </div>
        </div>
    </Suspense>
        )
}
