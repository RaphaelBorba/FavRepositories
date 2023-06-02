'use client'
import Container from "@/components/Container"
import RepositoryHeader from "@/components/RepositoryHeader"
import api from "@/services/api"
import { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

export default function Repository({ params }: {
    params: {
        owner: string
        repos: string
    }
}) {

    const [dataRepo, setDataRepo] = useState<any>({})
    const [issues, setIssues] = useState<AxiosResponse | null | void>(null)
    const [loading, setLoading] = useState(true)

    console.log(dataRepo)
    console.log(issues)

    useEffect(() => {


        async function load() {

            const responseRepo = await api.get(`/repos/${params.owner}/${params.repos}`)

            const responsesIssues = await api.get(`/repos/${params.owner}/${params.repos}/issues`, {
                params: {
                    state: 'open',
                    per_page: 5
                }
            })

            setDataRepo(responseRepo.data)
            setIssues(responsesIssues.data)
            setLoading(false)
        }

        load()

    }, [params.owner, params.repos])

    return (

        <Container>

            {
                loading ?
                    <h1>Carregando</h1>
                    :

                    <RepositoryHeader repositoryName={dataRepo.name} imageUser={dataRepo.owner.avatar_url} repositoryDescription={dataRepo.description} />
            }

        </Container>
    )
}