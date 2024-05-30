import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registerandlogin from "./Registerandlogin";
import Home from "./Home.jsx";
import SignIn from "./SignIn.jsx";
import Otplogin from "./Otplogin.jsx";

const Loginpassword = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element= {<Registerandlogin/>}/>
            <Route path="/home" element= {<Home/>}/>
            <Route path="/signin" element ={<SignIn/>}/>
            <Route path="/otplogin" element ={<Otplogin/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Loginpassword;
