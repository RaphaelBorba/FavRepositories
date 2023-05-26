'use client'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react"
import api from "@/services/api";
import { toast } from "react-toastify";

interface FormAddRepoProps {

    repo: string;
    setRepo: Dispatch<SetStateAction<string>>;
    repositories: any[];
    setRepositories: Dispatch<SetStateAction<any[]>>;
}

export default function FormAddRepo({repositories, setRepositories, repo, setRepo }: FormAddRepoProps) {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        let arrayRep = repositories

        api.get(`/repos/${repo}`)
        .then( (e) =>{

            arrayRep.push(e.data)

            setRepositories(arrayRep)

            toast.success('Repositório adicionado!', {autoClose:1000})
        })
        .catch( (e) =>{

            console.log(e.response.data)

            toast.error('Repositório não existe!', {autoClose:1000})
        })

        setRepo('')
    }

    return (
        <form className="flex w-full justify-between gap-3" onSubmit={handleSubmit}>

            <input
                className="h-10 w-[90%] rounded-md border-[1px] border-[#bbbbbbff] pl-3 text-gray-700 focus:outline-none"
                required
                value={repo}
                onChange={(e) => setRepo(e.target.value)}
                placeholder="Adicionar Repositórios"
                type="text" />
            <button
                className="w-[40px] rounded-md bg-[#233442] text-2xl text-white duration-500 hover:bg-[#3c5469]"
                type="submit">
                +
            </button>
        </form>
    )
}