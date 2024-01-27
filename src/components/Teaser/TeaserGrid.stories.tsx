import {Meta, StoryObj} from '@storybook/react'
import TeaserGrid from "./TeaserGrid";

const meta = {
  title: 'Components/TeaserGrid',
  component: TeaserGrid,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TeaserGrid>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  },
}