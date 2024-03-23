import Banner from "./Banner";
import NavBar from "./NavBar";


const HeaderMain = () => {
    return (
        <div className="container mx-auto space-y-12 mt-8" >
           <NavBar></NavBar> 
           <Banner></Banner>
        </div>
    );
};

export default HeaderMain;