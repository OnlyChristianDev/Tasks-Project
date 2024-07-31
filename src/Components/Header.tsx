'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

interface HeaderProps {
    setIsVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export function Header({ setIsVisible }: HeaderProps) {

    return (
        <div className="p-5 w-full shadow h-[55px] top-0 flex items-center justify-between mb-10">
            <div className="flex gap-2">
                <div className="flex items-center justify-end">
                    <input 
                        placeholder="Busque uma tarefa" 
                        className="outline-none pl-2 w-[200px] h-9 border-2 rounded-md border-[#F6F5F8]" 
                        type="text" 
                    />
                    <FontAwesomeIcon 
                        className="text-[#F6F5F8] cursor-pointer w-4 flex mr-2 absolute" 
                        icon={faMagnifyingGlass} 
                    />
                </div>
            </div>
            <div>
                <button 
                    onClick={() => setIsVisible(prev => !prev)} 
                    className="bg-blue-600 text-white rounded-md pr-3 pt-[5px] pb-[5px] pl-3"
                >
                    Adicionar Tarefa
                </button>
            </div>
        </div>
    );
}
