import IEpisodeResponse from 'type/list/episode'

export default interface IEpisodeMock extends Omit<IEpisodeResponse, 'characters'> {
}
