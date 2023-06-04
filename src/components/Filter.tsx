import { Dispatch, SetStateAction } from "react";

interface FilterProps {
    state: string;
    setState: Dispatch<SetStateAction<string>>
}

export default function Filter({ state, setState }: FilterProps) {

    return (
        <div className="flex items-center gap-2">
            <h1>Tipo das Issues:</h1>
            <div className="flex gap-4">

                <span 
                onClick={()=>setState('all')}
                className={`flex h-8 w-24 cursor-pointer items-center justify-center rounded-sm 
                bg-slate-300 transition hover:bg-slate-400 ${state === 'all' ? 'bg-sky-600 text-white' : ''}`}>
                    Todos
                </span>

                <span 
                onClick={()=>setState('open')}
                className={`flex h-8 w-24 cursor-pointer items-center justify-center rounded-sm 
                bg-slate-300 transition hover:bg-slate-400 ${state === 'open' ? 'bg-sky-600 text-white' : ''}`}>
                    Abertos
                </span>

                <span 
                onClick={()=>setState('closed')}
                className={`flex h-8 w-24 cursor-pointer items-center justify-center rounded-sm 
                bg-slate-300 transition hover:bg-slate-400 ${state === 'closed' ? 'bg-sky-600 text-white' : ''}`}>
                    Fechados
                </span>
            </div>
        </div>
    )
}