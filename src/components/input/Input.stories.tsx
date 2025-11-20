import { Input } from '@/components/input/Input';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@styled-system/css';

const meta: Meta<typeof Input> = {
  title: 'Component/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className={css({ m: 10, maxW: '500px' })}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Input라벨',
    description: '설명이 들어갑니다.',
  },
};
export const Required: Story = {
  args: {
    label: '필수 필드입니다',
    required: true,
    description: '필수 필드입니다.',
  },
};
export const Invalid: Story = {
  args: {
    label: '에러',
    errorText: '에러입니다',
  },
};
