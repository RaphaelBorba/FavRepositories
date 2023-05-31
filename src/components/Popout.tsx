import { Dispatch, SetStateAction } from "react";

interface PopoutProps {

    setPopout: Dispatch<SetStateAction<boolean>>;
    deleteFunction: any;
    repositories: any;
    index: number
}

export default function Popout({ setPopout, deleteFunction, repositories, index }:PopoutProps) {

    return (

        <section className="absolute left-0 top-0 z-10 h-screen w-screen bg-[#0000006f]">
            <div className="absolute left-1/2 top-1/2 flex h-[200px] w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg bg-white p-10 shadow-2xl">
                <span className="text-2xl font-bold">Deseja deletar este repositório?</span>
                <div className="mt-9 flex gap-9">
                    <button
                    onClick={()=>setPopout(false)}
                        className="h-12 w-32 rounded-lg border border-[#bbbbbbff] text-lg font-semibold transition hover:bg-slate-200"
                    >Não
                    </button>
                    <button
                        onClick={()=>deleteFunction(repositories, index)}
                        className="h-12 w-32 rounded-lg bg-red-600 text-lg font-semibold text-white transition hover:bg-red-700"
                    >Deletar
                    </button>
                </div>
            </div>
        </section>
    )
}