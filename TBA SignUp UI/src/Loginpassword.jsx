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
import Studentprofile from "./Components/Studentprofile.jsx";
import Sponsorlist from "./Sponsorlist.jsx";
import Sponsorprofile from "./Components/Sponsorprofile.jsx";
import MapSponsorStudentList from "./MapSponsorStudentList.jsx";
import TeacherProfile from "./Components/TeacherProfile.jsx";
import TeacherList from "./TeacherList.jsx";
import AddressForm from "./multistepform/AddressForm.jsx";
import Step2 from "./multistepform/Step2.jsx";
import Confirmation from "./multistepform/Confirmation.jsx";
import Success from "./multistepform/Success.jsx";

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
            <Route path="/studentlist/:id?" element= {<Studentlist/>}/>
            <Route path="/sponsorlist" element= {<Sponsorlist/>}/>
            <Route path="/studentprofile/:id?" element= {<Studentprofile/>}/>
            <Route path="/sponsorprofile/:id" element= {<Sponsorprofile/>}/>
            <Route path="/mapSponsorStudentList" element= {<MapSponsorStudentList/>}/>
            <Route path="/teacher-detail" element= {<Teacher/>}/>
            <Route path="/teacherlist" element= {<TeacherList/>}/>
            <Route path="/teacherprofile/:id" element= {<TeacherProfile/>}/>
            <Route path="/form" element= {<AddressForm />}/>
            <Route path="/step2" element= {<Step2 />}/>
            <Route path="/confirm" element= {<Confirmation />}/>
            <Route path="/success" element= {<Success />}/>
        

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Loginpassword;
