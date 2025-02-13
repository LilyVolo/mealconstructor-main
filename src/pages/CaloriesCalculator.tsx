import React from 'react'
import IngredientsForm from '../components/IngredientsForm'

const CaloriesCalculator = () => {

  function handleFetch ()  {
  
  }
  
  return (
    <div>
      <h1>check calories of ingr</h1>
      <IngredientsForm handleFetch={handleFetch}/>
    </div>
  )
}

export default CaloriesCalculator