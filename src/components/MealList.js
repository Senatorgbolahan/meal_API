import React from "react";
import Meal from './Meal';

export default function MealList({meal, loading}) {
  
  if (loading) {
    return <h2 className="section-title">loading...</h2>
  }
  if (meal.length < 1) {
    return <h2 className="section-title">no meal matched your criteria</h2>
  }
  return (
    <section className="section">
      <h2 className="section-title">meals</h2>
      <div className="cocktails-center">
        {meal.map((item) => {
          return <Meal key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}
