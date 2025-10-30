import Child from "./Child";
import { createContext } from "react";
export const MessageContext = createContext();

export default function Parent(){
    return(
        <MessageContext.Provider value="Harsh Rathore">
        <Child/>
        </MessageContext.Provider>
    )
}