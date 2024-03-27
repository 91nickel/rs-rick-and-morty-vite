import React, { useCallback, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SimpleGrid, Button } from '@mantine/core'
import _ from 'lodash'

import Layout from 'layouts'
import ErrorBoundary from 'components/hoc/ErrorBoundary'
import ItemCard from 'components/ItemCard'
import Preloader from 'components/Preloader'

import useList from 'hooks/useList'

import { EntityType, ICharacter, IEpisode, ILocation } from 'type/list'

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

const List = ({type}: IListProps) => {
    const [searchParams, setSearchParams] = useSearchParams({'sort': Sorts.created, 'order': Orders.asc})
    const {list, next, isStarted, isLoading, isError} = useList(type)

    const sort = searchParams.get('sort') || Sorts.created
    const order = (searchParams.get('order') as Orders) || Orders.asc

    const observer: React.MutableRefObject<undefined | IntersectionObserver> = useRef()

    const lastNodeRef = useCallback((node: any) => {
        console.log('useCallback', type, node)
        if (isLoading) {
            console.log('#### Loading. Do nothing...')
            return
        }

        if (observer.current) {
            console.log('#### Disconnect observer')
            observer.current.disconnect()
        }

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                console.log('#### VISIBLE:', entries[0])
                next()
            }
        })

        if (node) {
            console.log('#### setting observer')
            observer.current.observe(node)
        }

    }, [type, isLoading])

    function handleSortChange() {
        setSearchParams({
            order: order === Orders.asc ? Orders.desc : Orders.asc,
            sort: Sorts.created,
        })
    }

    if (!isStarted) {
        return <Layout.Loading/>
    }

    if (isError) {
        return <Layout.Error/>
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
                    sortedList.map((item, i, arr) => {
                        return (
                            <div key={item.id} ref={i === arr.length - 1 ? lastNodeRef : null}>
                                <ErrorBoundary>
                                    <ItemCard  {...item} />
                                </ErrorBoundary>
                            </div>
                        )
                    })
                }
            </SimpleGrid>
            {isLoading && <Preloader/>}
        </>
    )
}

export default List