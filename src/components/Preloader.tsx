import React from 'react'
import { Group, Loader } from '@mantine/core'

function Preloader() {
    return (
        <Group justify="center">
            <Loader color="blue"/>
        </Group>
    )
}

export default Preloader
