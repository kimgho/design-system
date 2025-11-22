import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { css } from '@styled-system/css';

const meta = {
  title: 'Component/Button',
  component: Button,
  decorators: [
    Story => (
      <div className={css({ m: 10 })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: '기본 버튼',
    isLoading: false,
  },
};

export const Variants: Story = {
  args: {},
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'row', gap: '6' })}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

export const Sizes: Story = {
  args: {},
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'row', gap: '6' })}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">Icon</Button>
    </div>
  ),
};

export const States: Story = {
  args: {},
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'row', gap: '6' })}>
      <Button>Default</Button>
      <Button isLoading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};
