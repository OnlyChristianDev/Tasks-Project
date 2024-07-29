"use client"; 
import { useState } from "react"

export function Tasks() {
    const [tasks, SetTasks] = useState(3) 
    const taskNumber = () => {
        SetTasks(4)
    }
    return (
        <div className="task">
            <div className="modelTask">
                <div className="tittleTask">Á FAZER</div> <div className="pt-4 font-medium">{tasks}</div>
            </div>
            <div className="modelTask">
                <div className="tittleTask">EM ANDAMENTO</div> <div className="pt-4 font-medium">{tasks}</div>
            </div>
            <div className="modelTask">
                <div className="tittleTask">CONCLUÍDAS</div> <div className="pt-4 font-medium">{tasks}</div>
            </div>
        </div>
    )
}