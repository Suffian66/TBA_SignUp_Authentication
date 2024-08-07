import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import SignUpApi from "./services/SignUp";
import { Login } from "./services/Login";
import forgotPasswordApi from "./services/ForgotPassword";
import login2FA from "./services/Otplogin";
import { resetPasswordApi } from "./services/ResetPassword";
import AddressApi from "./services/Address";
import Studentlist from "./services/Studentlist";
import TeacherApi from "./services/Teacher";
import MapSponsorApi from "./services/MapSponsor";
import SponsorlistApi from "./services/Sponsorlist";
import MapSponsorStudentApi from "./services/MapSponsorStudent";
import LookUpApi from "./services/LookUp";
import classListApi from "./services/ClassList";
import attendanceApi from "./services/Attendance";
import teacherAttendanceApi from "./services/TeacherAttendance";



const store = configureStore({
    reducer: {
        [SignUpApi.reducerPath] : SignUpApi.reducer,
        [Login.reducerPath] : Login.reducer,
        [forgotPasswordApi.reducerPath] : forgotPasswordApi.reducer,
        [login2FA.reducerPath] : login2FA.reducer,
        [resetPasswordApi.reducerPath] : resetPasswordApi.reducer,
        [AddressApi.reducerPath] : AddressApi.reducer,
        [Studentlist.reducerPath] : Studentlist.reducer,
        [TeacherApi.reducerPath]: TeacherApi.reducer,
        [MapSponsorApi.reducerPath]: MapSponsorApi.reducer,
        [SponsorlistApi.reducerPath]: SponsorlistApi.reducer,
        [MapSponsorStudentApi.reducerPath]: MapSponsorStudentApi.reducer,
        [LookUpApi.reducerPath]: LookUpApi.reducer,
        [MapSponsorStudentApi.reducerPath]: MapSponsorStudentApi.reducer,  
        [classListApi.reducerPath]:classListApi.reducer,
        [attendanceApi.reducerPath]:attendanceApi.reducer,
        [teacherAttendanceApi.reducerPath]:teacherAttendanceApi.reducer,

     
       
    },

    middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(SignUpApi.middleware).concat(Login.middleware).concat(forgotPasswordApi.middleware).concat(login2FA.middleware).concat(resetPasswordApi.middleware).concat(AddressApi.middleware).concat(Studentlist.middleware).concat(TeacherApi.middleware).concat(MapSponsorApi.middleware).concat(SponsorlistApi.middleware).concat(MapSponsorStudentApi.middleware).concat(LookUpApi.middleware).concat(MapSponsorStudentApi.middleware).concat(classListApi.middleware).concat(attendanceApi.middleware).concat(teacherAttendanceApi.middleware),

})

setupListeners(store.dispatch)

export default store;