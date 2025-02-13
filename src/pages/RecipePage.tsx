import React from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
const apiKey = import.meta.env.VITE_APIKEY

interface Step {
  number: number;
  step: string;
}

interface RecipeInstruction {
  name: string;
  steps: Step[];
}

type Calories = {
  amount: number;
  name: string;
  unit: string;
  percentOfDailyNeeds: number;
};
interface Recipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  aggregateLikes: number;
  analyzedInstructions: Instruction[];
  cookingMinutes: number | null;
  creditsText: string;
  cuisines: string[];
  diets: string[];
  dishTypes: string[];
  extendedIngredients: Ingredient[];
  gaps: string;
  healthScore: number;
  id: number;
  image: string;
  imageType: string;
  instructions: string;
  license: string;
  nutrition: Nutrition;
  occasions: string[];
  originalId: string | null;
  preparationMinutes: number | null;
  pricePerServing: number;
  readyInMinutes: number;
  servings: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
  summary: string;
  title: string;
}

interface Instruction {
  step: string;
  number: number;
}

interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

interface Nutrition {
  nutrients: Nutrient[];
  properties: any[];
  flavonoids: any[];
}

interface Nutrient {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
}


 const RecipePage: React.FC = () => {

  const [recipeIntruction, setRecipeIntruction] = React.useState<RecipeInstruction[] | null>(null)

  const [infoRecipe, setInfoRecipe] = React.useState<Recipe | null>(null)

  const [calories, setCalories] = React.useState<Calories | null>(null);

  const { id } = useParams<{ id: string }>()

  React.useEffect(() => {
    async function fetchOneRecepie () {
      try {
        const params = { apiKey: apiKey }
    
        const [respRecipe, infoRecipeResponse] = await Promise.all([
          axios.get<RecipeInstruction[]>(
            `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`,
            { params }
          ),
          axios.get<any>(
            `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true`,
            { params }
          ),
        ]);
       setRecipeIntruction(respRecipe.data)
     
        setInfoRecipe(infoRecipeResponse.data)
      
       
        const calorieData = infoRecipeResponse.data.nutrition?.nutrients?.find(
          (nutrient: any) => nutrient.name === "Calories"
        );

        if (calorieData) {
          setCalories(calorieData )
        }

        console.log(respRecipe.data, 'recipe')
        console.log(infoRecipeResponse.data, '55555555555')
  
      }  catch (error) {
        alert('There is a problem with this recipe');
      }}
      fetchOneRecepie()
    }, [id])
    
    const summary = infoRecipe?.summary
    ? infoRecipe.summary.replace(/<\/?[^>]+(>|$)/g, "")
    : "Описание недоступно";


  if (!recipeIntruction || !infoRecipe || !calories) {
    return <div>Loading...</div>;
  }


  return (
    <div className='flex flex-col justify-center items-center pr-20 pl-20'>
    <h1>{infoRecipe.title}</h1>
       <div className='flex' >
       <div>
        <img src={infoRecipe.image} alt="" />
       </div>
       <div>
        <p>{calories?.name}: {calories?.amount}</p> 
        <p> Vegetarian: {infoRecipe.vegetarian ? "Yes" : "No"} </p>
        <ul>
          Cuisines:
          {infoRecipe.cuisines.map((el, i)=> (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <ul>
          Diets:
          {infoRecipe.diets.map((el, i)=> (
            <li key={i}>{el}</li>
          ))}
        </ul>
       </div>
        </div>

        <p>{summary}</p>
        {recipeIntruction[1]?.steps.map((step:any) => (
          <p key={step.number}>{`Step ${step.number}: ${step.step}`}</p>
        ))}
    <Link to='/'>
    <button className="btn-custom">
    Back
</button>

    </Link>  
    </div>
  )
}

export default RecipePage