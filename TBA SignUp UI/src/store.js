import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import SignUpApi from "./services/SignUp";
import { Login } from "./services/Login";
import forgotPasswordApi from "./services/ForgotPassword";
import login2FA from "./services/Otplogin";


const store = configureStore({
    reducer: {
        [SignUpApi.reducerPath] : SignUpApi.reducer,
        [Login.reducerPath] : Login.reducer,[forgotPasswordApi.reducerPath] : forgotPasswordApi.reducer,
        [Login.reducerPath] : Login.reducer,
        [login2FA.reducerPath] : login2FA.reducer,
       
    },

    middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(SignUpApi.middleware).concat(Login.middleware).concat(forgotPasswordApi.middleware).concat(login2FA.middleware)

})

setupListeners(store.dispatch)

export default store;