
import PropTypes from 'prop-types';
import WantsToCookData from './WantsToCookData';
import CurrentlyCookingTable from '../Currrently Cooking Table/CurrentlyCookingTable';

const WantsToCookTable = ({wantToCookTable, currentlyCookingTable, totalPreparingTime, totalCalories, handleRemoveFromWantsToCookTable,handleAddInCurrentlyCookingTable}) => {

    return (
        <div>
            <h3>Want To Cook: {wantToCookTable.length}</h3>
            <WantsToCookData 
            wantToCookTable={wantToCookTable} 
            handleRemoveFromWantsToCookTable={handleRemoveFromWantsToCookTable}
            handleAddInCurrentlyCookingTable={handleAddInCurrentlyCookingTable}
             ></WantsToCookData>
            
            <h3>Currently Cooking: {currentlyCookingTable.length}</h3>
            <CurrentlyCookingTable 
            currentlyCookingTable={currentlyCookingTable}
            totalPreparingTime={totalPreparingTime}
            totalCalories={totalCalories}
            ></CurrentlyCookingTable>
        </div>
    );
};

WantsToCookTable.propTypes = {
    wantToCookTable: PropTypes.array
};

export default WantsToCookTable;