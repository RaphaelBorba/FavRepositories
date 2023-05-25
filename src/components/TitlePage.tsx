import { Github } from "lucide-react"

interface TitlePageProps {
    title: string
}

export default function TitlePage({title}: TitlePageProps){

    return (
        <div className="flex items-center gap-8">
            <Github strokeWidth={3} size={30}/>
            <h1 className="text-3xl font-bold">{title}</h1>
        </div>
    )
}