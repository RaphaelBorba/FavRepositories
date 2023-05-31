'use client'
import { Dispatch, FormEvent, SetStateAction, useState } from "react"
import api from "@/services/api";
import { toast } from "react-toastify";
import { Loader2, Plus } from "lucide-react"

interface FormAddRepoProps {

    repo: string;
    setRepo: Dispatch<SetStateAction<string>>;
    repositories: any[];
    setRepositories: Dispatch<SetStateAction<any[]>>;
}

export default function FormAddRepo({ repositories, setRepositories, repo, setRepo }: FormAddRepoProps) {

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        setLoading(true)

        await new Promise(r => setTimeout(r, 500))

        let arrayRep = [...repositories]

        api.get(`/repos/${repo}`)
            .then((e) => {

                if (checkExistRepo(repo, repositories)) {

                    toast.error('Repositório já adicionado!', { autoClose: 1000 })
                } else {

                    arrayRep.push(e.data)

                    setRepositories(arrayRep)

                    toast.success('Repositório adicionado!', { autoClose: 1000 })
                }

            })
            .catch((e) => {

                console.log(e.response.data)

                toast.error('Repositório não existe!', { autoClose: 1000 })
            })

        setLoading(false)
        setRepo('')
    }

    const checkExistRepo = (name: string, repositories: { full_name: string }[]) => {

        for (let i in repositories) {

            if (repositories[i].full_name === name && repositories[0]) return true
        }
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
                className={`flex w-[40px] items-center justify-center rounded-md bg-[#233442] text-2xl text-white duration-500 hover:bg-[#3c5469] ${loading ? 'opacity-20' : ''}`}
                disabled={loading}
                type="submit">
                {
                    loading ?
                        <Loader2 className="animate-spin" strokeWidth={3} size={20} />
                        :
                        <Plus strokeWidth={3} size={20} />
                }
            </button>
        </form>
    )
}