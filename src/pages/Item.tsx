import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {Button, Box} from '@mantine/core'

import { EntityType } from '@/type/list'
import { ICharacter, IEpisode, ILocation } from '@/type/service/mock'
import ICharacterResponse from '@/type/list/character'
import ILocationResponse from '@/type/list/location'
import IEpisodeResponse from '@/type/list/episode'

import Layout from '@/layouts'

import DynamicComponent from '@/components/hoc/DynamicComponent'
import ErrorBoundary from '@/components/hoc/ErrorBoundary'

import service from '@/service/http.service'
import normalizeEntity from '@/util/normalizeEntity'

interface IProps {
    type: EntityType
}

type EntityResponse = ICharacterResponse | ILocationResponse | IEpisodeResponse
type Entity = ICharacter | ILocation | IEpisode

export default function Item({type}: IProps) {
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [item, setItem] = useState({} as Entity)

    // const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) return
        setIsLoading(true)
        service.get(`${type}/${id}`)
            .then((response) => {
                const responseItem = response.data as EntityResponse
                setItem(normalizeEntity(type, responseItem) as Entity)
            })
            .catch(() => {
                navigate('/notFound')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [type])

    if (isLoading) {
        return <Layout.Loading/>
    }

    return (
        <>
            <Box>
                <Button variant="filled">
                    <Link className="btn btn-primary" to=".." style={{color: '#FFF'}}>
                        &lt; Back
                    </Link>
                </Button>
            </Box>
            <Box>
                <ErrorBoundary>
                    <DynamicComponent element="ItemCard" {...item} />
                </ErrorBoundary>
            </Box>
        </>
    )
}
