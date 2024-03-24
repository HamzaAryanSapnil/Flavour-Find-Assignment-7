import PropTypes from "prop-types";

const WantsToCookData = ({
  wantToCookTable,
  handleRemoveFromWantsToCookTable,
}) => {
  return (
    <div>
      {wantToCookTable.map((wantToCookTableData, index) => (
        <table
          key={wantToCookTableData.recipe_name}
          className=" font-fira text-recipe-des mt-4 p-4 rounded-xl"
        >
          
          <tbody className="bg-recipe-header-three rounded-full">
            <tr className="rounded-full 
            ">
              <td className=" font-semibold text-lg text-recipe-header-eighty w-9 text-center">
                {index + 1}
              </td>
              <td className="text-recipe-header-seventy xl:w-24 px-1">
                {wantToCookTableData.recipe_name}
              </td>
              <td className=" text-recipe-header-seventy w-20 px-1">
                {wantToCookTableData.preparing_time} Minutes
              </td>
              <td className=" text-recipe-header-seventy w-20">
                {wantToCookTableData.calories} Calories
              </td>
              <td className="px-2" >
                <button
                  onClick={() =>
                    handleRemoveFromWantsToCookTable(
                      wantToCookTableData.recipe_id,
                      wantToCookTableData
                    )
                  }
                  className="btn bg-nav-icon-bg font-lexend text-navBlack font-medium rounded-full border-none"
                >
                  Preparing
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

WantsToCookData.propTypes = {
  wantToCookTable: PropTypes.array,
  handleRemoveFromWantsToCookTable: PropTypes.func,
};

export default WantsToCookData;
