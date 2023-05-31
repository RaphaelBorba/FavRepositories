import { Trash2, Menu } from "lucide-react"
import Link from "next/link"

interface LiRepositoryProps {
    name: string
    fullName: string
}

export default function LiRepository({ name, fullName }: LiRepositoryProps) {

    return (
        <li className="flex items-center justify-between px-1 py-4">
            <div className="flex items-center gap-3">
                <Trash2 strokeWidth={2} size={26} />
                <span className="font-bold">{fullName}</span>
            </div>
            <Link href={`/repository/${name}`}>
                <Menu strokeWidth={2} size={26} />
            </Link>
        </li>
    )
}