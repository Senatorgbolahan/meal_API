import React, { useState,useEffect } from "react";
import { Link, useParams , } from "react-router-dom";

export default function SingleMeal() {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState(null);

  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

  async function getMeal(){
      try {
        const response = await fetch(URL)
        const data = await response.json();
        const {meals} = data;

        if (meals) {
          const { strMeal: name, strMealThumb: image, 
            strCategory: info,strArea:glass, strInstructions:instruction,
            strIngredient1,strIngredient2,strIngredient3,strIngredient4,
            strIngredient5} = data.meals[0];
            const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5];

            const newMeal = {name, image, info, glass,instruction, ingredients};
            setMeal(newMeal);
        } 
        else {
          setMeal([])
        }
      } 
      catch (error) {
        console.log(error);
      }
      setLoading(false)
  }

  useEffect(() => {
    setLoading(true);
    getMeal();
  }, [id])

  if (loading) {
    return <h2 className="section-title">loading...</h2>
  }
  if (!meal) {
    return <h2 className="section-title">no meal to display</h2>
  }
  else{
    const {name, info, image, glass, instruction, ingredients} = meal;
    return (
      <section className="section cocktail-section">
        <Link to='/' className="btn btn-primary">back home</Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt= {name} />
          <div className="drink-info">
            <p>name: {name}</p>
            <p>info: {info}</p>
            <p>glass: {glass}</p>
            <p>instruction: {instruction}</p>
            <p>ingredients: {ingredients.map((item, index) =>{
              return item ? <span key={index}>{item}</span> : null
            })}</p>
          </div>
        </div>
      </section>
    )
  }
 
}
