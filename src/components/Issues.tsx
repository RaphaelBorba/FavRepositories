import Image from "next/image";

interface IssuesProps {

    issue: {
        user: {
            avatar_url: string,
            login: string
        },
        title: string
        html_url: string
        labels: []

    };
}

export default function Issues({ issue }: IssuesProps) {

    return (

        <li className="flex w-[100%] items-center gap-2">
            <Image src={issue.user.avatar_url} alt={issue.user.login} width={50} height={50} className="rounded-full" />
            <div>
                <span>
                    <a href={issue.html_url} target="_blank" className="flex break-all font-bold">{issue.title} </a>
                    <p>
                        Labels: 
                    {
                        issue.labels.map((label: any, i: number) => <span className="ml-1" style={{ backgroundColor: `#${label.color}` }} key={i}>{label.name}</span>)
                    }
                        </p>
                </span>
                <p className="font-bold">{issue.user.login}</p>
            </div>
        </li>
    )
}