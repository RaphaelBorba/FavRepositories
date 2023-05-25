'use client'
// https://api.github.com/

import Container from "@/components/Container";
import FormAddRepo from "@/components/FormAddRepo";
import TitlePage from "@/components/TitlePage";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Home() {

  const [repo, setRepo] = useState('')
  const [repositories, setRepositories] = useState([])
  

  return (
    
    <Container >

      <TitlePage title="Meus repositórios"/>

      <FormAddRepo setRepositories={setRepositories} repo={repo} setRepo={setRepo}/>

    </Container>
  )
}
