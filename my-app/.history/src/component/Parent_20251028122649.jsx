import Child from "./Child";
import { createContext } from "react";
export default function Parent(){
    const MessageContext = createContext();
    return(
        <MessageContext.Provider value="Harsh Rathore">
        <Child/>
        </MessageContext.Provider>
    )
}