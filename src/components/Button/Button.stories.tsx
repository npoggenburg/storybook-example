import Button from './Button'
import {Meta, StoryObj} from '@storybook/react'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default button',
    variant: 'default',
  },
  parameters: {
    design: {
      type: "figspec",
      url: "https://www.figma.com/file/Q0DfBGQVjY00xhnsFlFyDM/Storybook-example?type=design&node-id=1-6&mode=design&t=tQ1Hs3bWTpiIx4mL-4",
    }
  }
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

export const OpenSpaceButton: Story = {
  args: {
    label: 'OpenSacee button',
    variant: 'secondary',
  },
}
