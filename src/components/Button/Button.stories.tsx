import Button from './Button'
import {Meta, StoryObj} from '@storybook/react'

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default button',
    variant: 'default',
  },
}

export const Primary: Story = {
  args: {
    label: 'Primary button',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary button',
    variant: 'secondary',
  },
}
