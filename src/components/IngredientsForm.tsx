import React from 'react'

interface IngredientsFormProps {
    handleFetch: (ingredients: string[]) => void; // Типизация функции
  }


const IngredientsForm: React.FC<IngredientsFormProps> = ({ handleFetch }) => {
  const [ingredients, setIngredients] = React.useState<string[]>([''])
  
  function handleChange (index: number, value: string) {
      let changedArr: string[] = [...ingredients]
      changedArr[index] = value
      setIngredients(changedArr)
  }
  function onAddIngredient() {
    setIngredients([...ingredients, ''])
  }

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault()
    const nonEmptyIngredients = ingredients.filter((ingredient) => ingredient.trim() !== '');
    handleFetch(nonEmptyIngredients);
    setIngredients([''])
  }

  return (
    <form onSubmit={handleSubmit}>
    { ingredients.map((ingredient, index) => {
      return (
        <div key={index}>
          <label className='mr-8'> {index+1}</label>
          <input
          className='mt-6'
          type='text'
          value={ingredient}
          onChange={(e)=>handleChange(index, e.target.value)}
          />
        </div>
      )
    })}
    
        <button type='submit' className="btn-custom mr-10 mt-8"
        > Get results</button>
        <button type='button' onClick={onAddIngredient} className="btn-custom mt-8">
        Add one more ingredient</button>

</form>
  )
}

export default IngredientsForm