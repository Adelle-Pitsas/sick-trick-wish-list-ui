import React from "react";
import { capFirstLetter } from "../../util";
import './Card.css'

const Card = ({ id, name, stance, obstacle, tutorial }) => { 
  return (
    <div className="card">
      <h3>{capFirstLetter(name)} {capFirstLetter(stance)}</h3>
      <h3>Obstacle: {obstacle}</h3>
      <h3>Link to Tutorial: {tutorial}</h3>
    </div>
  )
}

export default Card