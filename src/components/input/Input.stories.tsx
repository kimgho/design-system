import { Input } from '@/components/input/Input';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@styled-system/css';

const meta: Meta<typeof Input.Root> = {
  title: 'Component/Input',
  component: Input.Root,
  decorators: [
    Story => (
      <div className={css({ m: 10, maxW: '500px' })}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input.Root>;

export const Default: Story = {
  render: () => (
    <Input.Root>
      <Input.Label>Input라벨</Input.Label>
      <Input.Field placeholder="입력해주세요" />
      <Input.Description>설명이 들어갑니다.</Input.Description>
    </Input.Root>
  ),
};

export const Status: Story = {
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <Input.Root size="sm">
        <Input.Label>Default(No Status)</Input.Label>
        <Input.Field placeholder="Default(No Status)" />
        <Input.Description>기본</Input.Description>
      </Input.Root>

      <Input.Root size="sm" required>
        <Input.Label>Required</Input.Label>
        <Input.Field placeholder="required" />
        <Input.Description>필수</Input.Description>
      </Input.Root>

      <Input.Root size="sm" invalid>
        <Input.Label>Invalid</Input.Label>
        <Input.Field placeholder="invalid" />
        <Input.ErrorText>에러 메시지입니다</Input.ErrorText>
      </Input.Root>

      <Input.Root size="sm" disabled>
        <Input.Label>Disable</Input.Label>
        <Input.Field placeholder="disable" />
        <Input.Description>비활성</Input.Description>
      </Input.Root>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <Input.Root size="sm">
        <Input.Label>Small</Input.Label>
        <Input.Field placeholder="Small input" />
      </Input.Root>

      <Input.Root size="md">
        <Input.Label>Medium</Input.Label>
        <Input.Field placeholder="Medium input" />
      </Input.Root>

      <Input.Root size="lg">
        <Input.Label>Large</Input.Label>
        <Input.Field placeholder="Large input" />
      </Input.Root>
    </div>
  ),
};
