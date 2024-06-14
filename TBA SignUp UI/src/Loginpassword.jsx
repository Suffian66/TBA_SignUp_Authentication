import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registerandlogin from "./Registerandlogin";
import Home from "./Home.jsx";
import SignIn from "./SignIn.jsx";
import Otplogin from "./Otplogin.jsx";
import ForgotPassword from "./ForgetPassword.jsx";
import Dashboard from "./Dashboard.jsx";
import ResetPassword from "./ResetPassword.jsx";
import Address from "./Address.jsx";
import Studentlist from "./Studentlist.jsx";
import Teacher from "./Teacher.jsx";

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
            <Route path="/forgot-password" element= {<ForgotPassword/>}/>
            <Route path="/dashboard" element= {<Dashboard/>}/>
            <Route path="/reset-password" element= {<ResetPassword/>}/>
            <Route path="/address" element= {<Address/>}/>
            <Route path="/studentlist" element= {<Studentlist/>}/>
            <Route path="/teacher" element= {<Teacher/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Loginpassword;
