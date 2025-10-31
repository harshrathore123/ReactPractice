import { createSlice } from "@reduxjs/toolkit";

export const CounterSlicing = createSlice({
    name:"counter",
    
    initialState:{
        count:0,
    },
    
    reducers:{
        //increment,decrement,reset
        inc:(state)=>{
            state.count += 1;
        },

        dec:(state)=>{
            state.count -= 1;
        },

        reset:()=>{
            count = 0;
        }

    }
})

export const {inc,dec,reset} = CounterSlicing.actions;
export default CounterSlicing.reducer;