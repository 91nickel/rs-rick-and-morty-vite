import React from 'react'
import { Card, Image, Text, Badge, Button, Group, List, NavLink } from '@mantine/core'

import { ICharacter, IEpisode, ILocation } from 'service/types/mock'

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
                    <NavLink href={props.id.toString()} label={<Image src={props.image} alt={props.name}/>}/>
                }
            </Card.Section>
            <Card.Section>
                <Group mt="xs" mb="xs">
                    <NavLink
                        href={props.id.toString()}
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
