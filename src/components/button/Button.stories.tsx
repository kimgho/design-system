import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { css } from '@styled-system/css';

const meta = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
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

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '보조 버튼',
  },
};
