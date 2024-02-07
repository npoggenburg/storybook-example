import {Meta, StoryObj} from '@storybook/react'
import Teaser from './Teaser'
import {withGrid} from "../../../.storybook/decorators";

const meta = {
  title: 'Components/Teaser',
  component: Teaser,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Teaser>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    image: 'https://placehold.co/600x400',
    title: 'My Teaser',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
  },
}

export const Minium: Story = {
  args: {
    image: 'https://placehold.co/600x400',
    title: 'My Teaser',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
  },
}

export const Editor: Story = {
  args: {
    image: 'https://placehold.co/600x400',
    title:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
}