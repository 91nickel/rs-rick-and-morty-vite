import IEpisodeMock from "mock/types/episode"
import ILocationMock from "mock/types/location"
import ICharacterMock from "mock/types/character"

export enum EntityType {
    episode= 'episode',
    location= 'location',
    character= 'character',
}

export interface IEpisode extends Omit<IEpisodeMock, 'created'> {
    created: Date
}

export interface ILocation extends Omit<ILocationMock, 'created'> {
    created: Date
}

export interface ICharacter extends Omit<ICharacterMock, 'created'> {
    created: Date
}
