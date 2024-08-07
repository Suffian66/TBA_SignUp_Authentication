import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import SignUpApi from "../services/api/SignUp";
import Login from "../services/api/Login";
import forgotPasswordApi from "../services/api/ForgotPassword";
import login2FA from "../services/api/Otplogin";
import AddressApi from "../services/api/Address";
import Studentlist from "../services/api/Studentlist";
import TeacherApi from "../services/api/Teacher";
import MapSponsorStudentApi from "../services/api/MapSponsorStudent";
import SponsorlistApi from "../services/api/Sponsorlist";
import MapSponsorApi from "../services/api/MapSponsor";
import LookUpApi from "../services/api/LookUp";
import classListApi from "../services/api/ClassList";
import attendanceApi from "../services/api/Attendance";
import resetPasswordApi from "../services/api/ResetPassword";




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

     
       
    },

    middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(SignUpApi.middleware).concat(Login.middleware).concat(forgotPasswordApi.middleware).concat(login2FA.middleware).concat(resetPasswordApi.middleware).concat(AddressApi.middleware).concat(Studentlist.middleware).concat(TeacherApi.middleware).concat(MapSponsorApi.middleware).concat(SponsorlistApi.middleware).concat(MapSponsorStudentApi.middleware).concat(LookUpApi.middleware).concat(MapSponsorStudentApi.middleware).concat(classListApi.middleware).concat(attendanceApi.middleware),

})

setupListeners(store.dispatch)

export default store;