const Recipe = ({ recipe }) => {

    return (
        <div className="recipe-card">
            <h3>{recipe.cakeName}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.rating}</p>
            <hr/>
        </div>
    )
}

export default Recipe;