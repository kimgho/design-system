import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';
import { css } from '@styled-system/css';

const meta = {
  title: 'Component/Select',
  component: Select.Root,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Select.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'select' },
  render: () => (
    <Select.Root placeholder="항목을 선택하세요">
      <Select.Label>옵션 선택</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>
        <Select.Icon />
        <Select.Content>
          <Select.Option value="option1">옵션 1</Select.Option>
          <Select.Option value="option2">옵션 2</Select.Option>
          <Select.Option value="option3">옵션 3</Select.Option>
        </Select.Content>
      </Select.Control>
      <Select.Description>설명 텍스트입니다.</Select.Description>
    </Select.Root>
  ),
};

export const Sizes: Story = {
  args: { children: 'select' },
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'row', gap: '6', width: '100%' })}>
      <Select.Root size="sm" placeholder="Small">
        <Select.Label>Small (sm)</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Icon />
          <Select.Content>
            <Select.Option value="1">Option 1</Select.Option>
            <Select.Option value="2">Option 2</Select.Option>
          </Select.Content>
        </Select.Control>
      </Select.Root>

      <Select.Root size="md" placeholder="Medium">
        <Select.Label>Medium (md)</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Icon />
          <Select.Content>
            <Select.Option value="1">Option 1</Select.Option>
            <Select.Option value="2">Option 2</Select.Option>
          </Select.Content>
        </Select.Control>
      </Select.Root>

      <Select.Root size="lg" placeholder="Large">
        <Select.Label>Large (lg)</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Icon />
          <Select.Content>
            <Select.Option value="1">Option 1</Select.Option>
            <Select.Option value="2">Option 2</Select.Option>
          </Select.Content>
        </Select.Control>
      </Select.Root>
    </div>
  ),
};

export const States: Story = {
  args: { children: 'select' },
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'row', gap: '6', width: '100%' })}>
      <Select.Root placeholder="선택하세요">
        <Select.Label>기본 (Default)</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Icon />
          <Select.Content>
            <Select.Option value="1">Option</Select.Option>
          </Select.Content>
        </Select.Control>
      </Select.Root>

      <Select.Root required placeholder="필수 선택">
        <Select.Label>필수 항목 (Required)</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Icon />
          <Select.Content>
            <Select.Option value="1">Option</Select.Option>
          </Select.Content>
        </Select.Control>
      </Select.Root>

      <Select.Root invalid placeholder="다시 선택">
        <Select.Label>에러 상태 (Error)</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Icon />
          <Select.Content>
            <Select.Option value="1">Option</Select.Option>
          </Select.Content>
        </Select.Control>
        <Select.ErrorText>올바르지 않은 선택입니다.</Select.ErrorText>
      </Select.Root>

      <Select.Root disabled placeholder="선택 불가">
        <Select.Label>비활성화 (Disabled)</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Icon />
          <Select.Content>
            <Select.Option value="1">Option</Select.Option>
          </Select.Content>
        </Select.Control>
      </Select.Root>
    </div>
  ),
};

export const WithDisabledOption: Story = {
  args: { children: 'select' },
  render: () => (
    <Select.Root placeholder="선택하세요">
      <Select.Label>비활성 옵션 포함</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>
        <Select.Icon />
        <Select.Content>
          <Select.Option value="1">사용 가능</Select.Option>
          <Select.Option value="2" disabled>
            사용 불가 (disabled)
          </Select.Option>
          <Select.Option value="3">사용 가능</Select.Option>
        </Select.Content>
      </Select.Control>
    </Select.Root>
  ),
};
