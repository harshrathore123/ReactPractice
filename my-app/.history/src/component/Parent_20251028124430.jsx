import Child from "./Child";
import { createContext } from "react";
export const MessageContext = createContext();
export const ThemeContext = createContext();
export default function Parent(){
    return(
        <ThemeContext.Provider value="Dark">
        <MessageContext.Provider value="Harsh Rathore">
        <Child/>
        </MessageContext.Provider>
        </ThemeContext.Provider>
    )
}