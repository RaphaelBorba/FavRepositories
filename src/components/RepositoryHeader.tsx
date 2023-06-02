import Image from "next/image";

interface RepositoryHeaderProps {

    imageUser: string;
    repositoryName: string;
    repositoryDescription:string;
}

export default function RepositoryHeader({ imageUser, repositoryName, repositoryDescription }: RepositoryHeaderProps) {

    return (

        <header className="flex flex-col items-center gap-6">
            <Image src={imageUser} alt="User image" width={300} height={300} className="w-[200px] rounded-full border " />
            <h1 className="text-4xl font-bold">{repositoryName.charAt(0).toUpperCase() + repositoryName.slice(1)}</h1>
            <span className="text-center text-lg">{repositoryDescription}</span>

        </header>
    )
}