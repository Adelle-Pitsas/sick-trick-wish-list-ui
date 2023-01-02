import React from "react";
import Card from "../Card/Card";
import './Tricks.css'

const Tricks = ({ tricks, removeTrick }) => {
  const allTricks = tricks.map(trick => {
    return <Card 
      id={trick.id}
      key={trick.id}
      name={trick.name}
      stance={trick.stance}
      obstacle={trick.obstacle}
      tutorial={trick.tutorial}
      removeTrick={removeTrick}
    />
  })

  return (
    <div className="tricks-container">
      {allTricks}
    </div>
  )
}

export default Tricks