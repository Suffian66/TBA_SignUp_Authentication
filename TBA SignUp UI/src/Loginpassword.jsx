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
import Wrapper from "./Components/Wrapper.jsx";
import AddStudent from "./Components/AddStudent.jsx";
import StudentFamily from "./Components/StudentFamily.jsx";
import TeacherForm1 from "./Components/TeacherForm1.jsx";
import TeacherForm2 from "./Components/TeacherForm2.jsx";
import Bank from "./Components/Bank.jsx";
import ClassList from "./ClassList.jsx";
import ClassWiseStudentList from "./ClassWiseStudentList.jsx";
import StudentUpdate from "./Components/StudentUpdate.jsx";
import AddressTeacher from "./AddressTeacher.jsx";
import AddressStudent from "./AddressStudent.jsx";
import UpdateStudentFamily from "./Components/UpdateStudentFamily.jsx";
import StudentAttendance from "./StudentAttandance.jsx";
import SponsorUpdate from "./Components/SponsorUpdate.jsx";
import UpdateStudentAttendance from "./Components/UpdateStudentAttandance.jsx";
import AddStudentAttendance from "./Components/AddStudentAttendance.jsx";

import UpdateSponsorCart from "./Components/UpdateSponsorCart.jsx";
import TeacherAttendance from "./TeacherAttendance.jsx";



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
    path: "/teacherform2",
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
    path: "/addressteacher",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <AddressTeacher />,
      },
    ],
  },
  {
    path: "/addressstudent",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <AddressStudent />,
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
    path: "/updatesponsorcart/:studentId/:id",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <UpdateSponsorCart />,
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
    path: "/sponsorupdate/:id",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <SponsorUpdate/>,
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
    path: "/studentprofile/:id/:sponsorId?",
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
    path: "/classlist/:id?",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <ClassList />,
      },
    ],
  },         
  {
    path: "/classwisestudentlist/:id?/:className",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <ClassWiseStudentList />,
      },
    ],
  }, 
  {
    path: "/attendance-student",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <StudentAttendance />,
      },
    ],
  }, 
  {
    path: "/attendance-teacher",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <TeacherAttendance />,
      },
    ],
  }, 
  {
    path: "/update-attendance-student",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <UpdateStudentAttendance />,
      },
    ],
  }, 
  {
    path: "/add-attendance-student",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <AddStudentAttendance />,
      },
    ],
  }, 
  {

    path:"/studentupdate/:id",
    element:<StudentUpdate/>,        
  } ,
  {

    path:"/studentfamilyupdate/:studentFamilyId",
    element:<UpdateStudentFamily/>,        
  } 
]);

function Loginpassword() {
  return <RouterProvider router={router} />;
}

export default Loginpassword;
