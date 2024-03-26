import ICharacterResponse from 'type/list/character'

export default interface ICharacterMock extends Omit<ICharacterResponse, 'location' | 'origin' | 'episode'> {
}
