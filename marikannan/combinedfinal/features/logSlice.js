import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    isAuthenticated:false
}
const logSlice=createSlice(
    {
        name:'login',
        initialState,
        reducers:{
            login(state,action){
                state.user=action.payload;
                state.isAuthenticated=true;
            },
            logout(state){
                state.user=null;
                state.isAuthenticated=false;
            },
        }
    }
);
export const {login,logout}=logSlice.actions;
export default logSlice.reducer;