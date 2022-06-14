import NewRecipe from "./NewRecipe";

const NewRecipeList = ({newRecipes}) => {
        return (
            <ul>
                 {newRecipes.map(NewRecipe => <NewRecipe name={NewRecipe.cakeName} ingredient={NewRecipe.ingredient} rating={NewRecipe.rating}  />)}
            </ul>
        );
}

export default NewRecipeList;