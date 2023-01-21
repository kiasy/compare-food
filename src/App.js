import React from "react"
import "./App.css"
//import Card from "./components/Card"
//import Data from "./data"

export default function App() {

  const cards = Data.map(card => {
    return <Card title={card.title}
                        location={card.location}
                        googleMapsUrl={card.googleMapsUrl}
                        startDate={card.startDate}
                        endDate={card.endDate}
                        description={card.description}
                        src={card.imageUrl}
                         />
  })

  return (
    <div>
        {cards}
    </div>
  ) 
}