
import PropTypes from 'prop-types';

const CurrentlyCookingTable = ({currentlyCookingTable, totalPreparingTime, totalCalories}) => {
    return (
        <div>
            {currentlyCookingTable.map((recipe, idx) => (
                <table key={idx} className='border-2 border-yellow-400' >
                    <thead>
                <tr className='border-2 border-red-400' >
                    <th colSpan={2} className='border-2 border-black' >Name</th>
                    <th className='border-2 border-black' >Time</th>
                    <th  className='border-2 border-black' >Calories</th>
                    
                </tr>
                </thead>
                <tbody>
                <tr className='border-2 border-red-400'>
                    <td className='border-2 border-black' > {idx + 1} </td>
                    <td className='border-2 border-black' > {recipe.recipe_name} </td>
                    <td className='border-2 border-black' > {recipe.preparing_time} min </td>
                    <td className='border-2 border-black' > {recipe.calories} cal </td>
                    
                </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td colSpan={2} className='border-2 border-black' >Total Time {totalPreparingTime} Minutes </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td colSpan={2} className='border-2 border-black' >Total Calories {totalCalories} Calories </td>
                    </tr>
                </tfoot>

            </table>
            
            ))}
            
        </div>
    );
};

CurrentlyCookingTable.propTypes = {
    
};

export default CurrentlyCookingTable;