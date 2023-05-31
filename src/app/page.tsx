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

  
  return (
    <>
      <ToastContainer />
      <Container >

        <TitlePage title="Meus repositórios" />

        <FormAddRepo repositories={repositories} setRepositories={setRepositories} repo={repo} setRepo={setRepo} />

        {repositories[0] ?
          <List>

              {repositories.map((e, i) =>{

                return <LiRepository name={e.name} fullName={e.full_name}  key={i} />
              })}
          </List>
          :
          ''
        }

      </Container>
    </>
  )
}
