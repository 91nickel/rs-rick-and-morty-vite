import { Entity, EntityResponse, EntityType } from 'type/list'
import ICharacterResponse from 'type/list/character'
import { ICharacter, IEpisode, ILocation } from 'type/list'
import ILocationResponse from 'type/list/location'
import IEpisodeResponse from 'type/list/episode'

export default function normalizeEntity(type: EntityType, responseObject: EntityResponse): Entity {
    if (type === EntityType.character) {
        const obj = responseObject as ICharacterResponse
        return (Object.keys(obj) as Array<keyof ICharacterResponse>)
            .reduce((agr, key) => {
                if (key === 'location' || key === 'episode' || key === 'origin') return agr
                if (key === 'created') return {...agr, created: new Date(obj.created)}
                return {...agr, [key]: obj[key]}
            }, {} as ICharacter) as ICharacter
    } else if (type === EntityType.location) {
        const obj = responseObject as ILocationResponse
        return (Object.keys(obj) as Array<keyof ILocationResponse>)
            .reduce((agr, key) => {
                if (key === 'residents') return agr
                if (key === 'created') return {...agr, created: new Date(obj.created)}
                return {...agr, [key]: obj[key]}
            }, {} as ILocation) as ILocation
    } else if (type === EntityType.episode) {
        const obj = responseObject as IEpisodeResponse
        return (Object.keys(obj) as Array<keyof IEpisodeResponse>)
            .reduce((agr, key) => {
                if (key === 'characters') return agr
                if (key === 'created') return {...agr, created: new Date(obj.created)}
                return {...agr, [key]: obj[key]}
            }, {} as IEpisode) as IEpisode
    } else {
        throw new Error(`type ${type} not found`)
    }
}
