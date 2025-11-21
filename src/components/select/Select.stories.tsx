// src/components/select/Select.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';
import { css } from '@styled-system/css';

const meta = {
  title: 'Component/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '옵션 선택',
    placeholder: '항목을 선택하세요',
    description: '설명 텍스트입니다.',
    children: (
      <>
        <option value="1">옵션 1</option>
        <option value="2">옵션 2</option>
      </>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'row', gap: '6', width: '100%' })}>
      <Select size="sm" label="Small (sm)" placeholder="Small size">
        <option>Option</option>
      </Select>
      <Select size="md" label="Medium (md)" placeholder="Medium size">
        <option>Option</option>
      </Select>
      <Select size="lg" label="Large (lg)" placeholder="Large size">
        <option>Option</option>
      </Select>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'row', gap: '6', width: '100%' })}>
      <Select label="기본 (Default)" placeholder="선택하세요">
        <option>Option</option>
      </Select>

      <Select label="필수 항목 (Required)" required placeholder="필수 선택입니다">
        <option>Option</option>
      </Select>

      <Select label="에러 상태 (Error)" errorText="올바르지 않은 선택입니다." placeholder="다시 선택하세요">
        <option>Option</option>
      </Select>

      <Select label="비활성화 (Disabled)" disabled placeholder="선택 불가">
        <option>Option</option>
      </Select>
    </div>
  ),
};
