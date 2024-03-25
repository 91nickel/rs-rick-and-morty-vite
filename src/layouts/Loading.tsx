import React from 'react'
import { Container } from '@mantine/core'
import Preloader from '@/components/Preloader'

function Loading () {
    return (
        <Container>
            <Preloader />
        </Container>
    )
}

export default Loading
