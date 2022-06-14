const Recipe = ({ recipe }) => {

    return (
        <div className="recipe-card">
            <h3>{recipe.cakeName}</h3>
            <h4>Ingredients:</h4>
            <ul>
                {recipe.ingredients.map((ingredients, index) => <li key={index}>{ingredients}</li>)}
            </ul>
            <p>Rating: {recipe.rating}</p>
            <hr />
        </div>
    )
}

export default Recipe;