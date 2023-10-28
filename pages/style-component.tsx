import { NextPage } from 'next'
import Link, { LinkProps } from 'next/link'
import styled from 'styled-components'

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
    className?: string
    children: React.ReactNode
}

const BaseLink = (props: BaseLinkProps) => {
    const { className, children, ...rest  } = props
    return (
        <Link legacyBehavior {...rest}>
            <a className={className}>{children}</a>
        </Link>
    )
}

const StyledLink = styled(BaseLink)`
    color: red;
    font-size; 2em;
`

const Page: NextPage = () => {
    return (
        <div>
            <StyledLink href="/">Go to index</StyledLink>
        </div>
    )
}

export default Page