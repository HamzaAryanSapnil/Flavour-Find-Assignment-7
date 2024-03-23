const getRecipeFromLs = () => {
  const recipe = localStorage.getItem("recipes");
  if (recipe) {
    return JSON.parse(recipe);
  }
  return [];
};

const saveRecipeToLs = (recipe) => {
    const recipeStringified = JSON.stringify(recipe);
    localStorage.setItem("recipes", recipeStringified);
};
const addToLs = (id) => {
    const recipe = getRecipeFromLs();
    if (recipe.includes(id)) {
        return;
    }
    recipe.push(id);
    saveRecipeToLs(recipe);
};

const removeFromLs = (id) => {
    const recipe = getRecipeFromLs();
    const newRecipeRemaining = recipe.filter((recipeIdx) => recipeIdx !== id);
    saveRecipeToLs(newRecipeRemaining);
};

export {getRecipeFromLs, saveRecipeToLs, addToLs, removeFromLs}