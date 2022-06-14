import { useState, useRef } from "react";
import React from "react";

const NewRecipe = ({recipes, setRecipes}) => {
    const inputNameRef = useRef();
    const inputIngredientRef = useRef();
    const inputRatingRef = useRef();

    const handleNewRecipe = (event) => {
        const name =inputNameRef.current.value;
        const ingredientString = inputIngredientRef.current.value;
        const ingredientsArray =ingredientString.split(",")
        const rating =inputRatingRef.current.value;
        console.log(name);
        console.log(ingredientsArray);
        console.log(rating);
        setRecipes(prevRecipes => [...prevRecipes, {cakeName: name, ingredients: ingredientsArray, rating: rating}]);
        console.log(recipes);
    }

    return (
        <form>
        <h2>Add New Recipe:</h2>
        <input ref={inputNameRef} placeholder="Recipe Name" type="text"></input><br/>
        <input ref={inputIngredientRef} placeholder="Ingredients" type="text"></input><br/>
        <input ref={inputRatingRef} placeholder="Rating" type="text"></input><br/>
        <button onClick={handleNewRecipe}>Submit</button>
        </form>
    )
}

export default NewRecipe;