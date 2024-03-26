import React, { useCallback, useRef, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import _ from 'lodash'

import Layout from 'layout'
import ErrorBoundary from 'component/hoc/ErrorBoundary'
import ItemCard from 'component/ItemCard'
import Preloader from 'component/Preloader'

import useList from 'hook/useList'

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
            <div className="col-12 mb-3">
                <button className="btn btn-success" onClick={handleSortChange}>
                    {order}
                </button>
            </div>
            {
                sortedList.map((item, i, arr) => {
                    return (
                        <div
                            key={item.id}
                            ref={i === arr.length - 1 ? lastNodeRef : null}
                            className="col-12 col-md-4 col-lg-3 py-2">
                            <ErrorBoundary>
                                <ItemCard {...item} />
                            </ErrorBoundary>
                        </div>
                    )
                })
            }
            {
                isLoading
                &&
                <div className="col-12 d-flex justify-content-center my-3" style={{height: '100px'}}>
                    <Preloader/>
                </div>
            }
        </>
    )
}

export default List