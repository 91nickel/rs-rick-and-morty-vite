export default interface ICharacterResponse {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
    episode: string[]
    location: {
        name: string
        url: string
    }
    origin: {
        name: string
        url: string
    }
    created: string
}
