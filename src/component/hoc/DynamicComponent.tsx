import React, { lazy, FunctionComponent, Suspense } from 'react'
import Layout from 'layout'

interface OwnProps {
    element: string
}

type Props = OwnProps;

function getComponent(name: string) {
    return lazy(() => import(`component/${name}`))
}

const DynamicComponent: FunctionComponent<Props> = ({element, ...props}) => {

    const Component = getComponent(element)

    return (
        <Suspense fallback={<Layout.Loading/>}>
            <Component {...props} />
        </Suspense>
    )
}

export default DynamicComponent
