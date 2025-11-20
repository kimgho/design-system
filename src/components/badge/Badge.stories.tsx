import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';
import { css } from '@styled-system/css';

const meta = {
  title: 'Component/Badge',
  component: Badge,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className={css({ m: 10 })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '뱃지입니다',
  },
};
export const Selected: Story = {
  args: {
    children: '뱃지입니다.',
    selected: true,
  },
};
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '뱃지입니다',
  },
};

export const Danger: Story = {
  args: {
    variant: 'destructive',
    children: '뱃지입니다.',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: '뱃지입니다.',
  },
};
