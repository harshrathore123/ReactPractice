import { useContext } from "react"
import { MessageContext, ThemeContext } from "./Parent";

export default function Child(){
    const message = useContext(MessageContext);
    const theme = useContext(ThemeContext);
    return(
        <>
        <h1>{message}</h1>
        </>
    )
}