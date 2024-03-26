import React, { useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom'

import { EntityType } from 'type/list'
import { ICharacter, IEpisode, ILocation } from 'type/service/mock'
import service from 'service/http.service'

import DynamicComponent from 'component/hoc/DynamicComponent'
import ErrorBoundary from 'component/hoc/ErrorBoundary'
import ICharacterResponse from '../type/list/character'
import ILocationResponse from '../type/list/location'
import IEpisodeResponse from '../type/list/episode'
import normalizeEntity from '../util/normalizeEntity'

interface IProps {
    type: EntityType
}

type EntityResponse = ICharacterResponse | ILocationResponse | IEpisodeResponse
type Entity = ICharacter | ILocation | IEpisode

export default function Item({type}: IProps) {
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [item, setItem] = useState({} as Entity)

    const location = useLocation()
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
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div className="col-12 mb-3">
                <Link className="btn btn-primary" to=".."> &lt; Back</Link>
            </div>
            <div className="col-md-6 col-12">
                <ErrorBoundary>
                    <DynamicComponent element="ItemCard" {...item} />
                </ErrorBoundary>
            </div>
        </>
    )
}
