import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registerandlogin from "./Registerandlogin";
import Home from "./Home.jsx";
import SignIn from "./SignIn.jsx";
import Otplogin from "./Otplogin.jsx";
import ForgotPassword from "./ForgetPassword.jsx";
import Dashboard from "./Dashboard.jsx";
import ResetPassword from "./ResetPassword.jsx";
import Address from "./Address.jsx";
import Studentlist from "./Studentlist.jsx";
// import Teacher from "./Teacher.jsx";
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
import Wrapper from "./Components/Wrapper.jsx";
import AddStudent from "./Components/AddStudent.jsx";
import StudentFamily from "./Components/StudentFamily.jsx";
import TeacherForm1 from "./Components/TeacherForm1.jsx";
import TeacherForm2 from "./Components/TeacherForm2.jsx";
import Bank from "./Components/Bank.jsx";
import ClassList from "./ClassList.jsx";
import ClassWiseStudentList from "./ClassWiseStudentList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/teacherform1",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <TeacherForm1 />,
      },
    ],
  },
  {
    path: "/teacherform2/:id",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <TeacherForm2 />,
      },
    ],
  },
  {
    path: "/registerandlogin",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Registerandlogin />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/otplogin",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Otplogin />,
      },
    ],
  },         
  {
    path: "/forgotpassword",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <ForgotPassword />,
      },
    ],
  },          
  {
    path: "/dashboard",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },    
  {
    path: "/resetpassword",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <ResetPassword />,
      },
    ],
  },      
  {
    path: "/address",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Address />,
      },
    ],
  },
  {
    path: "/studentlist/:id?",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Studentlist />,
      },
    ],
  },
  {
    path: "/sponsorlist",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Sponsorlist />,
      },
    ],
  },
  {
    path: "/studentprofile/:id",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Studentprofile />,
      },
    ],
  },
  {
    path: "/sponsorprofile/:id",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Sponsorprofile />,
      },
    ],
  },          
  {
    path: "/mapsponsorstudentlist/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <MapSponsorStudentList />,
      },
    ],
  },
  {
    path: "/studentprofile/:id",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Studentprofile />,
      },
    ],
  },          
  {
    path: "/teacherlist",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <TeacherList />,
      },
    ],
  },
  {
    path: "/teacherprofile/:id",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <TeacherProfile />,
      },
    ],
  },
  {
    path: "/addstudent",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <AddStudent />,
      },
    ],
  },    
  {
    path: "/studentfamily",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <StudentFamily />,
      },
    ],
  },         
  {
    path: "/bank",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Bank />,
      },
    ],
  },         
  {
    path: "/classlist",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <ClassList />,
      },
    ],
  },         
  {
    path: "/classwisestudentlist",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <ClassWiseStudentList />,
      },
    ],
  },         
]);

function Loginpassword() {
  return <RouterProvider router={router} />;
}

export default Loginpassword;
