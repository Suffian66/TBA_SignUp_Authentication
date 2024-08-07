import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wrapper from "./Components/common/Wrapper.jsx";
import Home from "./pages/Home.jsx";
import TeacherForm1 from "./Components/teacher/TeacherForm1.jsx";
import TeacherForm2 from "./Components/teacher/TeacherForm2.jsx";
import Registeration from "./pages/Registeration.jsx";
import SignIn from "./pages/SignIn.jsx";
import Otplogin from "./pages/Otplogin.jsx";
import ForgotPassword from "./pages/ForgetPassword.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import Address from "./Components/sponsor/Address.jsx";
import TeacherAddress from "./Components/teacher/TeacherAddress.jsx";
import StudentAddress from "./Components/student/StudentAddress.jsx";
import UpdateSponsorCart from "./Components/sponsor/UpdateSponsorCart.jsx";
import StudentProfile from "./Components/student/Studentprofile.jsx";
import Sponsorprofile from "./Components/sponsor/SponsorProfile.jsx";
import SponsorUpdate from "./Components/sponsor/SponsorUpdate.jsx";
import MapSponsorStudentList from "./Components/sponsor/MapSponsorStudentList.jsx";
import TeacherList from "./Components/teacher/TeacherList.jsx";
import TeacherProfile from "./Components/teacher/TeacherProfile.jsx";
import AddStudent from "./Components/student/AddStudent.jsx";
import StudentFamily from "./Components/student/StudentFamily.jsx";
import ClassList from "./Components/class/ClassList.jsx";
import ClassWiseStudentList from "./Components/class/ClassWiseStudentList.jsx";
import StudentAttendance from "./Components/student/StudentAttandance.jsx";
import UpdateStudentAttendance from "./Components/student/UpdateStudentAttandance.jsx";
import AddStudentAttendance from "./Components/student/AddStudentAttendance.jsx";
import StudentUpdate from "./Components/student/StudentUpdate.jsx";
import UpdateStudentFamily from "./Components/student/UpdateStudentFamily.jsx";
import StudentList from "./Components/student/StudentList.jsx";
import SponsorList from "./Components/sponsor/Sponsorlist.jsx";




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
        element: <Registeration />
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
        element: <TeacherAddress />,
      },
    ],
  },
  {
    path: "/addressstudent",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <StudentAddress />,
      },
    ],
  },
  {
    path: "/studentlist/:id?",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <StudentList />,
      },
    ],
  },
  {
    path: "/sponsorlist",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <SponsorList />,
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
        element: <StudentProfile />,
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

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
