import {configureStore} from  '@reduxjs/toolkit';
import CounterSlicing from '../counterSlice/CounterSlicing';
export default tore = configureStore({
    reducer:{
        counter:CounterSlicing,
    }
})