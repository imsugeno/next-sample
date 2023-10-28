import { NextPage } from 'next'
import styled from 'styled-components'

type ButtonProps = {
    color: string,
    backgroundColor: string
}

const Button = styled.button<ButtonProps>`
    color: ${props => props.color};
    background: ${props => props.backgroundColor};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${props => props.color};
    border-radius: 3px;
`;

const Page: NextPage = () => {
    return (
        <div>
            <Button backgroundColor='transparent' color='#FF0000'>Hello</Button>
            <Button backgroundColor='#1E90FF' color='#FFFFFF'>World</Button>
        </div>
    )
}

export default Page