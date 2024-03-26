import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useParams, useOutletContext, useLocation, useNavigate, Link } from 'react-router-dom'

import { EntityType, ICharacter, IEpisode, ILocation } from 'types/service/mock'
import service from 'service/http.service'
import ItemCard from 'components/itemCard'

interface IProps {
    type: EntityType
}

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
        service.getById(type, +id)
            .then(item => {
                setItem(item)
                setIsLoading(false)
            })
            .catch(() => {
                navigate('/notFound')
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
            <div className="col-12">
                <ItemCard {...item} />
            </div>
        </>
    )
}