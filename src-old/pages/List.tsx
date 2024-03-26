import React, { useCallback, useRef, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SimpleGrid, Button, NavLink } from '@mantine/core'
import _ from 'lodash'

import service from 'service/http.service'

import { EntityType, ICharacter, IEpisode, ILocation } from 'type/list'

import ItemCard from 'component/ItemCard'

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

    const [searchParams, setSearchParams] = useSearchParams({'sort': Sorts.created, 'order': Orders.asc})

    const sort = searchParams.get('sort') || Sorts.created
    const order = (searchParams.get('order') as Orders) || Orders.asc

    function handleSortChange() {
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
            <div>
                <Button variant="filled" onClick={handleSortChange}>
                    {order}
                </Button>
            </div>
            <SimpleGrid
                cols={{base: 1, md: 3, lg: 4}}
                spacing={{base: 10, sm: 'xl'}}
                verticalSpacing={{base: 'md', sm: 'xl'}}
            >
                {
                    sortedList.map(item => {
                        return (
                            <div key={item.id}>
                                <ItemCard  {...item} />
                            </div>
                        )
                    })
                }
            </SimpleGrid>

        </>
    )
}