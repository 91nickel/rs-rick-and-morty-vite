import IEpisodeMock from "type/mock/episode"
import ILocationMock from "type/mock/location"
import ICharacterMock from "type/mock/character"

export interface IEpisode extends Omit<IEpisodeMock, 'created'> {
    created: Date
}

export interface ILocation extends Omit<ILocationMock, 'created'> {
    created: Date
}

export interface ICharacter extends Omit<ICharacterMock, 'created'> {
    created: Date
}
