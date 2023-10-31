import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
import MDXDocument from './StyledButton.mdx'

export default {
    title: "StyledButton",
    component: StyledButton,
    parameters: {
        docs: {
            page: MDXDocument,
        },
    },
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['primary', 'success', 'transparent'],
        },
        children: {
            control: { type: 'text' },
        },
    },
} as ComponentMeta<typeof StyledButton>

const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

export const TemplateTest = Template.bind({})

TemplateTest.args = {
    variant: 'primary',
    children: 'Primary',
}