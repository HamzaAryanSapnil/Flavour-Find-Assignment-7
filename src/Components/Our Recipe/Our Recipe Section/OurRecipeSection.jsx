
import PropTypes from 'prop-types';
import OurRecipeHeader from '../Our Recipe Header/OurRecipeHeader';
import OurRecipesMain from '../Our Recipe Main/OurRecipesMain';

const OurRecipeSection = props => {
    return (
        <div>
            <OurRecipeHeader></OurRecipeHeader>
            <OurRecipesMain></OurRecipesMain>
        </div>
    );
};

OurRecipeSection.propTypes = {
    
};

export default OurRecipeSection;