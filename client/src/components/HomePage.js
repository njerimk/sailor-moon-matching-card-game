import React from 'react'
import MainBG from '../Main-Page-Image.jpeg';


export default function HomePage() {
    

    return (
        <div>
        <main role="main" className="inner cover">
          <h1 className="cover-heading">SAILOR SENSHI MATCH</h1>
          <img src={MainBG} className="img-fluid" alt="responsive"></img>
          <a href="/game">
              <button type="button" className="start-button">
                Start A New Game
              </button>
          </a>
          <p className="lead">
              Site Created by Njeri Kamau
          </p>
        </main>
  
        <footer className="mastfoot mt-auto">
          <div className="inner">
          </div>
          </footer>      
      </div>
    )
}
