import React, { useEffect, useRef } from "react";

export default function SearchForm({setSearchterm}) {

  const searchValue = useRef("");

  useEffect(()=>{
    searchValue.current.focus();
  },[])
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  const searchMeal = () => {
    setSearchterm(searchValue.current.value);    
  }

  return <section className="section">
    <h2 className="section-title">search meal</h2>
    <form  className="form search-form" onSubmit={handleSubmit}>
      <div className="form-control">
      <label htmlFor="name">search your favorite meal</label>
      <input type="text" name="name" id="name" onChange={searchMeal} ref={searchValue}/>
      </div>
    </form>

  </section>
}
