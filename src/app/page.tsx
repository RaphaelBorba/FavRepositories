'use client'
// https://api.github.com/

import FormAddRepo from "@/components/FormAddRepo";
import TitlePage from "@/components/TitlePage";

export default function Home() {

  
  return (
    
    <main className="flex h-fit w-[600px] flex-col gap-10 rounded-lg bg-white p-10">
      <TitlePage title="Meus repositórios"/>
      <FormAddRepo/>

    </main>
  )
}
