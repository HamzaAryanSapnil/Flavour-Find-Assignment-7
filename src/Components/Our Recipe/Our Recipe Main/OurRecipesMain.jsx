import { useState } from "react";
import { useEffect } from "react";
import OurRecipeMainData from "./Our Recipe Main Data/OurRecipeMainData";
import WantsToCookTable from "./Wants to cook section/WantsToCookTable";
import { addToLs, getRecipeFromLs, removeFromLs } from "../../../utils/localStorage";
import { toast } from "react-toastify";

const OurRecipesMain = () => {
  const [recipesData, setRecipesData] = useState([]);
  const [wantToCookTable, setWantToCookTable] = useState([]);
  const [currentlyCookingTable, setCurrentlyCookingTable] = useState([]);
  const [totalPreparingTime, setTotalPreparingTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const handleAddToWantsToCookTable = (wantsToCookRecipe) => {
    const exist = wantToCookTable.find(
      (recipe) => recipe.recipe_id === wantsToCookRecipe.recipe_id
    )
    if (exist) {
      toast("added");
      return;
    }
    const newRecipes = [...wantToCookTable, wantsToCookRecipe];
    setWantToCookTable(newRecipes);
    addToLs(wantsToCookRecipe.recipe_id);
  };

  const handleRemoveFromWantsToCookTable = (id, recipe) => {
    // visuall remove
    const remaningRecipe = wantToCookTable.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setWantToCookTable(remaningRecipe);
    // removed from ls
    removeFromLs(id);
    handleAddInCurrentlyCookingTable(recipe);
    handleTotalPreparingTime(recipe.preparing_time);
    handleTotalCalories(recipe.calories);
  };

  const handleAddInCurrentlyCookingTable = (recipe) => {
    const newRecipes = [...currentlyCookingTable, recipe];
    setCurrentlyCookingTable(newRecipes);
  };
  const handleTotalPreparingTime = (preparingTime) => {
    const newPreparingTime = totalPreparingTime + preparingTime;
    setTotalPreparingTime(newPreparingTime);
  };
  const handleTotalCalories = (calories) => {
    const newCalories = totalCalories + calories;
    setTotalCalories(newCalories);

  };
  useEffect(() => {
    const getRecipes = async () => {
      try {
        const url = "recipes.json";
        const res = await fetch(url);
        const data = await res.json();
        setRecipesData(data);
      } catch (error) {
        console.error(error);
      }
    };

    getRecipes();
  }, []);

  // load data from local storage
  useEffect(() => {
    if (recipesData.length) {
      const storedRecipe = getRecipeFromLs();
      const savedRecipe = [];
      for (const id of storedRecipe) {
        const recipe = recipesData.find((recipe) => recipe.recipe_id === id);

        if (recipe) {
          savedRecipe.push(recipe);
        }
      }
      setWantToCookTable(savedRecipe);
    }
  }, [recipesData]);

  return (
    <div className="container p-4 mx-auto" >
      <div className="md:flex gap-x-10 justify-between">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 md:w-1/2 lg:w-3/4 ">
          {recipesData.map((recipe, idx) => (
            <OurRecipeMainData
              key={idx}
              handleAddToWantsToCookTable={handleAddToWantsToCookTable}
              recipe={recipe}
            ></OurRecipeMainData>
          ))}
        </div>
        <div className=" w-1/2 lg:w-1/4">
          <WantsToCookTable
            wantToCookTable={wantToCookTable}
            currentlyCookingTable={currentlyCookingTable}
            handleRemoveFromWantsToCookTable={handleRemoveFromWantsToCookTable}
            handleAddInCurrentlyCookingTable={handleAddInCurrentlyCookingTable}
            totalPreparingTime={totalPreparingTime}
            totalCalories={totalCalories}
          ></WantsToCookTable>
        </div>
      </div>
    </div>
  );
};

export default OurRecipesMain;
