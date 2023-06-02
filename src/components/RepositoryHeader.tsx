import Image from "next/image";
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation";

interface RepositoryHeaderProps {

    imageUser: string;
    repositoryName: string;
    repositoryDescription: string;
}

export default function RepositoryHeader({ imageUser, repositoryName, repositoryDescription }: RepositoryHeaderProps) {

    const router = useRouter()

    return (

        <header className="relative flex flex-col items-center gap-6">
            
            <div className="absolute left-0 top-0">
                <ArrowLeft onClick={() => router.back()} className="cursor-pointer" strokeWidth={2} size={26} />
            </div>

            <Image src={imageUser} alt="User image" width={300} height={300} className="w-[200px] rounded-full border " />

            <h1 className="text-4xl font-bold">{repositoryName.charAt(0).toUpperCase() + repositoryName.slice(1)}</h1>

            <span className="text-center text-lg">{repositoryDescription}</span>

        </header>
    )
}