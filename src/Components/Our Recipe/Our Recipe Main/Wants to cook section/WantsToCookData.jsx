import PropTypes from "prop-types";

const WantsToCookData = ({
  wantToCookTable,
  handleRemoveFromWantsToCookTable,
  handleAddInCurrentlyCookingTable,
}) => {
  return (
    <div>
      {wantToCookTable.map((wantToCookTableData, index) => (
        <table
          key={wantToCookTableData.recipe_name}
          className="border-2 border-yellow-400"
        >
          <thead>
            <tr className="border-2 border-red-400">
              <th colSpan={2} className="border-2 border-black">
                Name
              </th>
              <th className="border-2 border-black">Time</th>
              <th colSpan={2} className="border-2 border-black">
                Calories
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2 border-red-400">
              <td className="border-2 border-black">{index + 1}</td>
              <td className="border-2 border-black">
                {wantToCookTableData.recipe_name}
              </td>
              <td className="border-2 border-black">
                {wantToCookTableData.preparing_time}
              </td>
              <td className="border-2 border-black">
                {wantToCookTableData.calories}
              </td>
              <button
                onClick={() =>
                  handleRemoveFromWantsToCookTable(
                    wantToCookTableData.recipe_id,
                    wantToCookTableData
                  )
                  
                }
                
                
                className="btn  btn-accent"
              >
                Preparing
              </button>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

WantsToCookData.propTypes = {
  wantToCookTable: PropTypes.array,
};

export default WantsToCookData;
