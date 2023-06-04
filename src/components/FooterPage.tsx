import { ChevronLeft, ChevronRight } from "lucide-react"

interface FooterPageProps {
    changePage: (action: 'increase' | 'decrease') => void;
    page: number
}

export default function FooterPage({ changePage, page }: FooterPageProps) {

    return (

        <div className="flex w-[100%] justify-between">

            <ChevronLeft onClick={() => changePage("decrease")} className={`${page === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`} strokeWidth={2} size={26} />

            <h2>{page}</h2>
            <ChevronRight onClick={() => changePage("increase")} className="cursor-pointer" strokeWidth={2} size={26} />
        </div>
    )
}