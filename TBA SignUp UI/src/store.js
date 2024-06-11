import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import SignUpApi from "./services/SignUp";
import { Login } from "./services/Login";
import forgotPasswordApi from "./services/ForgotPassword";
import login2FA from "./services/Otplogin";
import { resetPasswordApi } from "./services/ResetPassword";
import AddressApi from "./services/Address";
import Studentlist from "./services/Studentlist";



const store = configureStore({
    reducer: {
        [SignUpApi.reducerPath] : SignUpApi.reducer,
        [Login.reducerPath] : Login.reducer,
        [forgotPasswordApi.reducerPath] : forgotPasswordApi.reducer,
        [login2FA.reducerPath] : login2FA.reducer,
        [resetPasswordApi.reducerPath] : resetPasswordApi.reducer,
        [AddressApi.reducerPath] : AddressApi.reducer,
        [Studentlist.reducerPath] : Studentlist.reducer,
       
       
    },

    middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(SignUpApi.middleware).concat(Login.middleware).concat(forgotPasswordApi.middleware).concat(login2FA.middleware).concat(resetPasswordApi.middleware).concat(AddressApi.middleware).concat(Studentlist.middleware),

})

setupListeners(store.dispatch)

export default store;