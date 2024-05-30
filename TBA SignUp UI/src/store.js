import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import SignUpApi from "./services/SignUp";
import { Login } from "./services/Login";
import forgotPasswordApi from "./services/ForgotPassword";


const store = configureStore({
    reducer: {
        [SignUpApi.reducerPath] : SignUpApi.reducer,
        [Login.reducerPath] : Login.reducer,[forgotPasswordApi.reducerPath] : forgotPasswordApi.reducer,
       
    },

    middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(SignUpApi.middleware).concat(Login.middleware).concat(forgotPasswordApi.middleware)


})

setupListeners(store.dispatch)

export default store;