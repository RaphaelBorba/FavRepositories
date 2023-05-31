import { Trash2, Menu } from "lucide-react"
import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react";
import Popout from "./Popout";

interface LiRepositoryProps {
    name: string
    fullName: string
    repositories: any;
    setRepositories: Dispatch<SetStateAction<any[]>>;
    index: number
}

export default function LiRepository({ name, fullName, repositories, setRepositories, index }: LiRepositoryProps) {

    const [popout, setPopout] = useState(false)

    const removeRepo = (array: [], index: number) => {

        let newArray = [...array]

        newArray.splice(index, 1)

        localStorage.setItem('repos', JSON.stringify(newArray))

        setRepositories(newArray)

        setPopout(false)
    }

    return (
        <>

            <li className="flex items-center justify-between px-1 py-4">

                <div className="flex items-center gap-3">

                    <Trash2 onClick={() => setPopout(true)} className="cursor-pointer" strokeWidth={2} size={26} />

                    <span className="font-bold">{fullName}</span>
                </div>

                <Link href={`/repository/${name}`}>

                    <Menu strokeWidth={2} size={26} />

                </Link>

            </li>
            {
                popout ?
                    <Popout index={index} repositories={repositories}  setPopout={setPopout} deleteFunction={removeRepo} />
                    :''}
        </>
    )
}