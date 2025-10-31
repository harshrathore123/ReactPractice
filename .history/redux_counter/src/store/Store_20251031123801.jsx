import {configureStore} from  '@reduxjs/toolkit';
import CounterSlicing from '../counterSlice/CounterSlicing';
export default Store = configureStore({
    reducer:{
        counter:CounterSlicing,
    }
})