import {configureStore} from  '@reduxjs/toolkit';
import CounterSlicing from '../counterSlice/CounterSlicing';
export const Store = configureStore({
    reducer:{
        counte:CounterSlicing,
    }
})