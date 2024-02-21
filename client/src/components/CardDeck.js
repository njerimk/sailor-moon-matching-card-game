import React from 'react'
import Card from './Card'

export default function CardDeck({data, onCardClick, matched, checkCards}) {
    




    return (
        <div className="card-deck">
            {data.cards.map((card) => (
                <Card 
                    card={card} 
                    onCardClick={onCardClick} 
                    matched={matched} 
                    checkCards={checkCards}
                    key={card.id} 
                />
            ))}
        </div>
    )
}
