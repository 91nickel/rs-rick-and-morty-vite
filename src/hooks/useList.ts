import React, { useEffect, useRef, useState } from 'react'
import service from 'service/http.service'

import ICharacterResponse from 'type/list/character'
import ILocationResponse from 'type/list/location'
import IEpisodeResponse from 'type/list/episode'

import { Entity, EntityResponse, EntityType } from 'type/list'
import normalizeEntity from 'util/normalizeEntity'

interface IResponseData {
    info: {
        count: number
        pages: number
        next?: string
        prev?: string
    },
    results: EntityResponse[],
}

const useList = (type: EntityType) => {
    const [page, setPage] = useState(1)
    const [list, setList] = useState([] as Entity[])
    const [isStarted, setIsStarted] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const hasMore = useRef(false)

    useEffect(function () {
        setPage(1)
        setIsError(false)
        service.get(type, {params: {page}})
            .then(({data}: { data: IResponseData }) => {
                setList(data.results.map(e => normalizeEntity(type, e)))
                hasMore.current = !!data.info.next
            })
            .catch((error) => {
                console.log(error)
                setIsError(true)
            })
            .finally(() => {
                setIsStarted(true)
                setIsLoading(false)
            })
    }, [type])

    useEffect(function () {
        if (page === 1 || !hasMore.current)
            return;

        setIsLoading(true)
        setIsError(false)
        service.get(type, {params: {page}})
            .then(({data}: { data: IResponseData }) => {
                console.log(data)
                setList(prevState => [...prevState, ...data.results.map(e => normalizeEntity(type, e))])
                hasMore.current = !!data.info.next
            })
            .catch((error) => {
                console.log(error)
                setIsError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [page])


    function next () {
        if (hasMore.current)
            setPage(prevState => prevState + 1)
    }

    return {
        list,
        next,
        isStarted,
        isLoading,
        isError,
    }
}

export default useList
