import PropTypes from "prop-types";

const CurrentlyCookingTable = ({
  currentlyCookingTable,
}) => {
  return (
    <div className="w-full" >
      {currentlyCookingTable.map((recipe, idx) => (
        <table
          key={idx}
          className=' font-fira text-recipe-des mt-4 p-4 rounded-xl w-full '
        >
          
          <tbody className="bg-recipe-header-three rounded-full">
            <tr className="">
              <td  className="font-semibold text-lg text-recipe-header-eighty w-9 text-center">
               
                {idx + 1}
              </td>
              <td colSpan={2} className="text-recipe-header-seventy xl:w-24 px-1">
                
                {recipe.recipe_name}
              </td>
              <td  className="text-recipe-header-seventy w-20 px-1">
               
                {recipe.preparing_time} min
              </td>
              <td  className="text-recipe-header-seventy w-20">
                
                {recipe.calories} cal
              </td>
              
            </tr>
          </tbody>
          
        </table>
        
      ))}
      
    </div>
  );
};

CurrentlyCookingTable.propTypes = {
  currentlyCookingTable: PropTypes.array,
  totalPreparingTime: PropTypes.number,
  totalCalories: PropTypes.number,
};

export default CurrentlyCookingTable;
