import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Group, List } from '@mantine/core'
import { ICharacter, IEpisode, ILocation } from '@/type/service/mock'

type EntityKey = keyof (ICharacter | ILocation | IEpisode)

export default function ItemCard(props: ICharacter | ILocation | IEpisode) {

    function getListItem(key: EntityKey) {
        return `${key}: ${props[key]}`
    }

    return (
        <Card shadow="sm" padding="md" radius="md" withBorder>
            <Card.Section>
                {
                    'image' in props
                    &&
                    <Link to={props.id.toString()}>
                        <Image src={props.image} alt={props.name}/>
                    </Link>
                }
            </Card.Section>
            <Card.Section>
                <Group mt="xs" mb="xs">
                    <Link
                        to={props.id.toString()}
                        label={<h3>{props.name}</h3>}
                    />
                </Group>
                <List listStyleType="none" withPadding={true}>
                    {
                        Object.keys(props)
                            .filter(key => !['name', 'image'].includes(key))
                            .map((key, i) => {
                                return (
                                    <List.Item key={i}>
                                        {getListItem(key as EntityKey)}
                                    </List.Item>
                                )
                            })
                    }
                </List>
            </Card.Section>
        </Card>
    )
}
