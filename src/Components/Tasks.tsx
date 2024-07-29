export function Tasks(){
    return (
        <div className="flex gap-10 items-center justify-center">
            <div className="bg-gray-100 rounded-md  w-[33%] h-96">
                <div className="pl-4 pt-4">Á Fazer</div>
            </div>
            <div >
                <div className="pl-4 pt-4">Em andamento</div>
            </div>
            <div>
                <div className="pl-4 pt-4">Concluidas</div>
            </div>
        </div>
    )
}