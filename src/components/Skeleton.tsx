

export default function Skeleton(){

    return(

        <section className="flex animate-pulse flex-col items-center gap-6 ">
            <div className="h-64 w-64 rounded-full bg-slate-400 transition max-[350px]:h-48 max-[350px]:w-48 "/>
            <div className="h-10 w-[50%] rounded-md bg-slate-400"/>
            <div className="h-8 w-[80%] rounded-md bg-slate-400"/>
        </section>
    )
}