
import { useState } from "react"
import { AddFile } from "./AddFile"
import { Header } from "./Header"

export function VisibleContext(){
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return(
    <>
        <Header setIsVisible={setIsVisible} />
        <AddFile isVisible={isVisible} />
    </>
    )
}

export default VisibleContext