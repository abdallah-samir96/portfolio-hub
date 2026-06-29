
import {configureStore, createSlice} from '@reduxjs/toolkit';

const slice=createSlice({
 name:'profile',
 initialState:{
   dark:false
 },
 reducers:{
   toggleTheme:(state)=>{state.dark=!state.dark;}
 }
});

export const {toggleTheme}=slice.actions;

export default configureStore({
 reducer:{profile:slice.reducer}
});
