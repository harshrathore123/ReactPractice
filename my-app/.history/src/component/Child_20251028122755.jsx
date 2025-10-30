import { useContext } from "react"
import { MessageContext } from "./Parent";

export default function Child(){
    const message = useContext(MessageContext);
    return(
        <>
        <h1>{message}</h1>
        </>
    )
}