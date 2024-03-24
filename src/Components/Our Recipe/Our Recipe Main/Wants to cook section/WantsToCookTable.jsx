import PropTypes from "prop-types";
import WantsToCookData from "./WantsToCookData";
import CurrentlyCookingTable from "../Currrently Cooking Table/CurrentlyCookingTable";

const WantsToCookTable = ({
  wantToCookTable,
  currentlyCookingTable,
  totalPreparingTime,
  totalCalories,
  handleRemoveFromWantsToCookTable,
  handleAddInCurrentlyCookingTable,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl font-fira p-4">
      <div>
        <div className="xl:px-8">
          <h3 className=" border-b-2 text-center font-lexend text-recipe-header font-semibold text-2xl p-4">
            Want To Cook: {wantToCookTable.length}
          </h3>
          <div className="flex justify-center items-center gap-x-12 mt-4 font-fira font-medium text-recipe-des xl:pr-28">
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>
        </div>
        <WantsToCookData
          wantToCookTable={wantToCookTable}
          handleRemoveFromWantsToCookTable={handleRemoveFromWantsToCookTable}
          handleAddInCurrentlyCookingTable={handleAddInCurrentlyCookingTable}
        ></WantsToCookData>
      </div>

      <div className="">
        <div className="xl:px-8">
          <h3 className="border-b-2 text-center font-lexend text-recipe-header font-semibold text-2xl lg:p-4">
            Currently Cooking: {currentlyCookingTable.length}
          </h3>
          <div className="flex justify-center items-center gap-x-12 mt-4 font-fira font-medium text-recipe-des ">
            <p>Name</p>
            <div className="flex justify-center items-center gap-x-8 xl:pl-28">
              <p>Time</p>
              <p>Calories</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <CurrentlyCookingTable
            currentlyCookingTable={currentlyCookingTable}
            totalPreparingTime={totalPreparingTime}
            totalCalories={totalCalories}
          ></CurrentlyCookingTable>
        </div>
        <div className="font-lexend font-medium text-recipe-header-eighty text-end mt-4">
          <h4>Total Time: {totalPreparingTime} min</h4>
          <h4>Total Calories: {totalCalories} cal</h4>
        </div>
      </div>
    </div>
  );
};

WantsToCookTable.propTypes = {
  wantToCookTable: PropTypes.array,
  currentlyCookingTable: PropTypes.array,
  totalPreparingTime: PropTypes.number,
  totalCalories: PropTypes.number,
  handleRemoveFromWantsToCookTable: PropTypes.func,
  handleAddInCurrentlyCookingTable: PropTypes.func,
};

export default WantsToCookTable;
