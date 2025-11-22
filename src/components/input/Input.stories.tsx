import { Input } from '@/components/input/Input';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@styled-system/css';

const meta: Meta<typeof Input> = {
  title: 'Component/Input',
  component: Input,
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

export const Status: Story = {
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <Input size="sm" label="Default(No Status)" placeholder="Default(No Status)" description="기본" />
      <Input size="sm" label="Required" placeholder="required" required={true} description="필수" />
      <Input size="sm" label="Invalid" placeholder="invalid" errorText="에러 메시지입니다" />
      <Input size="sm" label="Disable" placeholder="disable" disabled={true} description="비활성" />
    </div>
  ),
};

export const Sizes: Story = {
  args: {},
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
  ),
};
