import {configureStore} from  '@reduxjs/toolkit';
import CounterSlicing from '../counterSlice/CounterSlicing';
export default store = configureStore({
    reducer:{
        counter:CounterSlicing,
    }
})