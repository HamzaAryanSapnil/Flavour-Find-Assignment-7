import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OurRecipeSection from "./Components/Our Recipe/Our Recipe Section/OurRecipeSection";
import HeaderMain from "./Components/Header Section/HeaderMain";

function App() {
  return (
    <>
     
      <HeaderMain></HeaderMain>
      <OurRecipeSection></OurRecipeSection>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
