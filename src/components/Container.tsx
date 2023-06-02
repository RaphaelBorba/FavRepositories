export default function Container({children}:any){

    return <main className="mx-auto flex h-fit max-w-[600px] flex-col gap-10 rounded-lg bg-white p-10 shadow-2xl">{children}</main>
}