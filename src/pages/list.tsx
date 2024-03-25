import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom"
import _ from 'lodash'

import service from 'service/mock'

import { EntityType, ICharacter, IEpisode, ILocation } from "service/types/mock"
import ItemCard from "components/itemCard"

interface IListProps {
    type: EntityType
}

type Entity = ICharacter | ILocation | IEpisode

enum Sorts {
    'created' = 'created',
}

enum Orders {
    'asc' = 'asc',
    'desc' = 'desc',
}

export default function List({type}: IListProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [list, setList] = useState([] as Entity[])

    const [searchParams, setSearchParams] = useSearchParams({'sort' : Sorts.created, 'order': Orders.asc})

    const sort = searchParams.get('sort') || Sorts.created
    const order = (searchParams.get('order') as Orders) || Orders.asc

    function handleSortChange () {
        setSearchParams({
            order: order === Orders.asc ? Orders.desc : Orders.asc,
            sort: Sorts.created,
        })
    }

    useEffect(() => {
        setIsLoading(true)
        service.getList(type)
            .then(list => {
                setList(list)
                setIsLoading(false)
            })
    }, [type])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const sortedList = _.orderBy(list, sort, order)

    return (
        <>
            <div className="col-12 mb-3">
                <button className="btn btn-success" onClick={handleSortChange}>
                    {order}
                </button>
            </div>
            {
                sortedList.map(item => {
                    return (
                        <div key={item.id} className="col-12 col-md-4 col-lg-3 py-2">
                            <ItemCard  {...item} />
                        </div>
                    )
                })
            }
        </>
    )
}