import React, { ReactNode } from 'react'
import { ICharacter, IEpisode, ILocation } from 'type/service/mock'
import { Link } from 'react-router-dom'

type EntityKey = keyof (ICharacter | ILocation | IEpisode)

export default function ItemCard(props: ICharacter | ILocation | IEpisode) {

    function getListItem(key: EntityKey) {
        return `${key}: ${props[key]}`
    }

    return (
        <div className="card">
            {
                'image' in props
                &&
                <Link to={props.id.toString()}>
                    <img className="card-img-top" src={props.image} alt={props.name}/>
                </Link>
            }
            <div className="card-body">
                <Link to={props.id.toString()}>
                    <h5 className="card-title">
                        {props.name}
                    </h5>
                </Link>
                <ul className="list-group list-group-flush">
                    {
                        Object.keys(props)
                            .filter(key => !['name', 'image'].includes(key))
                            .map((key, i) => {
                                return (
                                    <li key={i} className="list-group-item">
                                        {getListItem(key as EntityKey)}
                                    </li>
                                )
                            })
                    }
                </ul>
            </div>
        </div>
    )
}
