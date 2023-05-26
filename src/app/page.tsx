'use client'
// https://api.github.com/

import Container from "@/components/Container";
import FormAddRepo from "@/components/FormAddRepo";
import TitlePage from "@/components/TitlePage";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Home() {

  const [repo, setRepo] = useState('')
  const [repositories, setRepositories] = useState([])
  

  return (
    <>
    <ToastContainer/>
    <Container >

      <TitlePage title="Meus repositórios"/>

      <FormAddRepo setRepositories={setRepositories} repo={repo} setRepo={setRepo}/>

    </Container>
    </>
  )
}
