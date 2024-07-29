import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"
import Image from "next/image"
import logo from "/public/logo.png"
export function Header(){
    return (
        <>
        <div className="p-5 w-full h-[55px] top-0 flex items-center justify-between">
            <div className="flex gap-2">
                <div>
                    
                </div>
                <div className="flex items-center justify-end"> <input placeholder="Busque uma tarefa" className="outline-none pl-2 w-[200px] h-9 border-2 rounded-md border-b-gray-200" type="text" /> <FontAwesomeIcon className="text-gray-300 cursor-pointer w-4 flex mr-2 absolute" icon={faMagnifyingGlass} /> </div>
            </div>
            <div>
                <button className="bg-blue-600 text-white rounded-md pr-3 pt-[5px] pb-[5px] pl-3">Adcionar Tarefa</button>
            </div>
        </div>
        </>
    )
}