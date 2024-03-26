import ILocationResponse from 'type/list/location'

export default interface ILocationMock extends Omit<ILocationResponse, 'residents'> {
}
