
import React from 'react'
import {Link} from "react-router-dom"

interface RecipeProps {
    id: number;
    title: string;
    image: string;
    imageType: string;
    likes: number;
    missedIngredientCount?: number;
    missedIngredients?: [] | undefined;
    unusedIngredients: [];
    usedIngredientCount: number;
    usedIngredients: [];
  }

 const RecipeBlock: React.FC<RecipeProps> = ({title, image, likes, missedIngredients, id}) => {
    const miss = missedIngredients
  return (
    <Link   to={`/recipe/${id}`} >
    <div key={id} className='containerRecipieBlock m-10'>
       <h1>{title}</h1>
       <img src={image} alt={title}/>
       <h1>likes: {likes} </h1>
       {miss.map((el,i) => {
        return (
            <h1 key={`${id}+${i}`}>
                {el.name}
            </h1>
        )
       })}
    </div>
    </Link>
  )
}

export default RecipeBlock