import { useContext } from "react"

export default function Child(){
    const message = useContext(MessageContext);
    return(
        <>
        <h1>{message}</h1>
        </>
    )
}