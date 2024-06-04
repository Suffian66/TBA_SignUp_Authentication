import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registerandlogin from "./Registerandlogin";
import Home from "./Home.jsx";
import SignIn from "./SignIn.jsx";
import Otplogin from "./Otplogin.jsx";
import ForgotPassword from "./ForgetPassword.jsx";
import Dashboard from "./Dashboard.jsx";
import ResetPassword from "./ResetPassword.jsx";

const Loginpassword = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/signup" element= {<Registerandlogin/>}/>
            <Route path="/home" element= {<Home/>}/>
            <Route path="/" element ={<SignIn/>}/>
            <Route path="/otplogin" element ={<Otplogin/>}/>
            <Route path="/forgot-password" element= {<ForgotPassword/>}/>
            <Route path="/dashboard" element= {<Dashboard/>}/>
            <Route path="/reset-password" element= {<ResetPassword/>}/>

            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Loginpassword;
