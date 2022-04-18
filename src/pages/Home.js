import React from "react";
import { useState , useEffect} from "react";


// import
import SearchForm from '../components/SearchForm'
import MealList from '../components/MealList'

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchterm] = useState("ab");
  const [meal, setMeal] = useState([]);

  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  const getMeals = async () =>{
    try {
        const response = await fetch(URL);
        const data = await response.json();
        // destructure the meal
        const {meals} = data;  //the data is used to reference/call the (meals) from the API output

         if (meals) {
           const newMeals = meals.map((item) => {
            const {idMeal,strMeal,strMealThumb,strCategory,strArea} = item;
            return {
              id: idMeal,
              name: strMeal,
              image: strMealThumb,
              info: strCategory,
              glass: strArea,
         }})
           setMeal(newMeals);
         } 
         else {
           setMeal([]);
         }
    }

    catch (error) {
      console.log(error); 
    }
    setLoading(false)
  }
    

  useEffect(() => {
      setLoading(true)
      getMeals();
  }, [searchTerm, URL])

  return (
    <main>
      <SearchForm setSearchterm={setSearchterm}/>
      <MealList loading={loading} meal={meal}/>

    </main>
  )
}
