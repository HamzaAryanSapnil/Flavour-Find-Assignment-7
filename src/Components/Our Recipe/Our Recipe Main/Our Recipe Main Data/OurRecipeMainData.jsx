
import { FaRegClock, FaFire  } from "react-icons/fa6";
import PropTypes from 'prop-types';

const OurRecipeMainData = ({recipe, handleAddToWantsToCookTable,}) => {
    const {recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className='font-fira space-y-2 md:w-[320px] lg:w-[450px] xl:w-[500px] my-5 card  bg-base-100 shadow-xl p-6 flex flex-col justify-center items-start ' >
            <img className='md:h-60 md:w-80 lg:h-80 lg:w-96 rounded-xl' src={recipe_image} alt="" />
            <h3 className='text-recipe-header font-lexend font-semibold '>{recipe_name}</h3>
            <p className='text-recipe-des' >{short_description}</p>
            <div className="py-4" >
                <h3 className='text-recipe-header font-lexend font-semibold pb-4' >Ingredients: {ingredients.length} </h3>
                {
                    ingredients.map((ingredient, index) => <li className='text-recipe-des py-1' key={index}>{ingredient}</li>)
                }
            </div>
            <div className='flex gap-x-8 ' >
                <p className="flex items-center justify-center gap-x-2 text-recipe-header-eighty" ><span><FaRegClock></FaRegClock></span>  {preparing_time} min</p>
                <p className="flex items-center justify-center gap-x-2 text-recipe-header-eighty" ><span><FaFire></FaFire></span>  {calories} </p>

            </div>
            <button  onClick={() => handleAddToWantsToCookTable(recipe)} className="btn bg-nav-icon-bg text-navBlack font-medium font-lexend text-lg rounded-full ">Want to cook</button>
        </div>
    );
};

OurRecipeMainData.propTypes = {
    recipe: PropTypes.object,
    handleAddToWantsToCookTable: PropTypes.func,

};

export default OurRecipeMainData;