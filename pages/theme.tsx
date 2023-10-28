import { NextPage } from 'next'
import styled from 'styled-components'

const Text = styled.span`
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes[3]};
    margin: ${(props) => props.theme.space[2]};
`

const Page: NextPage = () => {
    return (
        <div>
            <Text>Themeから参照した色を使用</Text>
        </div>
    )
}

export default Page