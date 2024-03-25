import IEpisodeResponse from "./episode"
import ILocationResponse from "./location"
import ICharacterResponse from "./character"

export enum EntityType {
    episode= 'episode',
    location= 'location',
    character= 'character',
}

export interface IEpisode extends Omit<IEpisodeResponse, 'created'> {
    created: Date
}

export interface ILocation extends Omit<ILocationResponse, 'created'> {
    created: Date
}

export interface ICharacter extends Omit<ICharacterResponse, 'created' | 'episode' | 'location' | 'origin'> {
    created: Date
}

export type EntityResponse = ICharacterResponse | ILocationResponse | IEpisodeResponse

export type Entity = ICharacter | ILocation | IEpisode
