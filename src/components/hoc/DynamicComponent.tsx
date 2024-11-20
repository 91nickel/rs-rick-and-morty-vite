import { lazy, FunctionComponent, Suspense } from 'react'
import Layout from '@/layouts'

interface OwnProps {
    element: string
}

type Props = OwnProps;

function getComponent(name: string) {
    return lazy(() => import(`./../${name}`))
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
