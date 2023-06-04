'use client'
import Container from "@/components/Container"
import Filter from "@/components/Filter"
import FooterPage from "@/components/FooterPage"
import Issues from "@/components/Issues"
import RepositoryHeader from "@/components/RepositoryHeader"
import Skeleton from "@/components/Skeleton"
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
    const [issues, setIssues] = useState<AxiosResponse | any | void>(null)
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [state, setState] = useState('all')

    console.log(page)
    console.log(issues)

    useEffect(() => {


        async function load() {

            const responseRepo = await api.get(`/repos/${params.owner}/${params.repos}`)

            const responsesIssues = await api.get(`/repos/${params.owner}/${params.repos}/issues`, {
                params: {
                    state,
                    per_page: 5
                }
            })

            setDataRepo(responseRepo.data)
            setIssues(responsesIssues.data)
            setLoading(false)
        }

        load()

    }, [params.owner, params.repos, state])

    useEffect(() => {

        async function loadPage() {

            const responsesIssues = await api.get(`/repos/${params.owner}/${params.repos}/issues`, {
                params: {
                    state,
                    page,
                    per_page: 5
                }
            })

            setIssues(responsesIssues.data)
        }

        loadPage()

    }, [page, params.owner, params.repos, state])

    const changePage = (action: 'increase' | 'decrease') => {

        let i = page

        if (action === 'increase') {
            i++
            setPage(i)

        } else if (action === 'decrease') {
            i--
            setPage(i)
        }
    }

    return (

        <Container>

            {
                loading ?
                    <Skeleton />
                    :
                    <>
                        <RepositoryHeader repositoryName={dataRepo.name} imageUser={dataRepo.owner.avatar_url} repositoryDescription={dataRepo.description} />
                        <Filter state={state} setState={setState}/>
                        <ul className="flex w-[100%] flex-col gap-10">

                            {
                                issues ?
                                    issues.map((e: any, i: any) => <Issues key={i} issue={e} />)
                                    :
                                    ''
                            }

                        </ul>
                        <FooterPage changePage={changePage} page={page}/>
                    </>
            }

        </Container>
    )
}