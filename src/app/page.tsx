'use client'
// https://api.github.com/

import Container from "@/components/Container";
import FormAddRepo from "@/components/FormAddRepo";
import TitlePage from "@/components/TitlePage";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import List from "@/components/List";
import LiRepository from "@/components/LiRepository";

export default function Home() {

  const [repo, setRepo] = useState('')
  const [repositories, setRepositories] = useState(new Array())

  useEffect(()=>{

    let stringArray = localStorage.getItem('repos') as string
    
    let repArray = JSON.parse(stringArray)

    setRepositories(repArray)
  },[])

  return (
    <>
      <ToastContainer />
      <Container >

        <TitlePage title="Repositórios Favoritos" />

        <FormAddRepo repositories={repositories} setRepositories={setRepositories} repo={repo} setRepo={setRepo}/>

        {repositories[0] ?
          <List>

            {repositories.map((e, i) => {

              return <LiRepository 
              name={e.name} 
              fullName={e.full_name} 
              key={i} 
              index={i}
              repositories={repositories} 
              setRepositories={setRepositories} />
            })}
          </List>
          :
          ''
        }

      </Container>
    </>
  )
}
