

export default function Skeleton(){

    return(

        <section className="flex animate-pulse flex-col items-center gap-6">
            <div className="h-[250px] w-[250px] rounded-full bg-slate-400"/>
            <div className="h-10 w-[50%] rounded-md bg-slate-400"/>
            <div className="h-8 w-[400px] rounded-md bg-slate-400"/>
        </section>
    )
}