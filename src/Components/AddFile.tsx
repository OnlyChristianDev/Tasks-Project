import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize, faMinimize, faX  } from '@fortawesome/free-solid-svg-icons';

export const removeHidden = () => {
    const hidden : any = document.querySelector(".hidden");
    const blurBackground : any = document.querySelector(".hidden-blur");
    hidden.classList.remove('hidden');
    blurBackground.classlist.add("blur-background")
    blurBackground.classList.remove('hidden-blur');
}

export function AddFile(){
    return (
        <div className='flex items-center justify-center'>
            <div className='hidden-blur'></div>
            <div className='bg-[#F6F5F8] z-[999] hidden shadow rounded-md w-[650px] h-[600px]'>
                <div className='flex justify-between pt-6 pl-4 pr-4'>
                    <div>
                        <h1 className='font-medium'>CRIE SUA TAREFA</h1>
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <FontAwesomeIcon icon={faWindowMinimize} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faMinimize} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faX} />  
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}
