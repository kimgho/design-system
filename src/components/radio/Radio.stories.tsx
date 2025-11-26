import { Radio } from '@/components/radio/Radio';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@styled-system/css';
import { useState } from 'react';

const meta: Meta<typeof Radio.Root> = {
  component: Radio.Root,
  title: 'Component/Radio',
};

export default meta;
type Story = StoryObj<typeof Radio.Root>;

const DefaultExample = () => {
  const [value, setValue] = useState('option1');

  return (
    <Radio.Root value={value} onValueChange={setValue}>
      <Radio.Label>옵션을 선택해주세요.</Radio.Label>
      <Radio.Description>최대 1개</Radio.Description>
      <Radio.Item value="option1">
        <Radio.Control />
        <Radio.Indicator />
        <Radio.Text>옵션 1</Radio.Text>
      </Radio.Item>

      <Radio.Item value="option2">
        <Radio.Control />
        <Radio.Indicator />
        <Radio.Text>옵션 2</Radio.Text>
      </Radio.Item>

      <Radio.Item value="option3">
        <Radio.Control />
        <Radio.Indicator />
        <Radio.Text>옵션 3</Radio.Text>
      </Radio.Item>
    </Radio.Root>
  );
};

export const Default: Story = {
  render: () => <DefaultExample />,
};

const SizesExample = () => {
  const [valueSm, setValueSm] = useState('option1');
  const [valueMd, setValueMd] = useState('option1');
  const [valueLg, setValueLg] = useState('option1');

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '8' })}>
      <Radio.Root size="sm" value={valueSm} onValueChange={setValueSm}>
        <div className={css({ display: 'flex', flexDirection: 'row', gap: '2', alignItems: 'center' })}>
          <Radio.Label>Small Size</Radio.Label>
          <Radio.Description className={css({ fontSize: 'xs' })}>Small size</Radio.Description>
        </div>

        <Radio.Item value="option1">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 1</Radio.Text>
        </Radio.Item>

        <Radio.Item value="option2">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 2</Radio.Text>
        </Radio.Item>
      </Radio.Root>

      <Radio.Root size="md" value={valueMd} onValueChange={setValueMd}>
        <div className={css({ display: 'flex', flexDirection: 'row', gap: '2', alignItems: 'center' })}>
          <Radio.Label>Medium Size</Radio.Label>
          <Radio.Description className={css({ fontSize: 'xs' })}>Medium size</Radio.Description>
        </div>

        <Radio.Item value="option1">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 1</Radio.Text>
        </Radio.Item>

        <Radio.Item value="option2">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 2</Radio.Text>
        </Radio.Item>
      </Radio.Root>

      <Radio.Root size="lg" value={valueLg} onValueChange={setValueLg}>
        <div className={css({ display: 'flex', flexDirection: 'row', gap: '2', alignItems: 'center' })}>
          <Radio.Label>Large Size</Radio.Label>
          <Radio.Description className={css({ fontSize: 'xs' })}>Large size</Radio.Description>
        </div>

        <Radio.Item value="option1">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 1</Radio.Text>
        </Radio.Item>

        <Radio.Item value="option2">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 2</Radio.Text>
        </Radio.Item>
      </Radio.Root>
    </div>
  );
};

export const Sizes: Story = {
  render: () => <SizesExample />,
};

const OrientationExample = () => {
  const [valueVertical, setValueVertical] = useState('option1');
  const [valueHorizontal, setValueHorizontal] = useState('option1');

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '8' })}>
      <Radio.Root orientation="vertical" value={valueVertical} onValueChange={setValueVertical}>
        <div className={css({ display: 'flex', flexDirection: 'row', gap: '2', alignItems: 'center' })}>
          <Radio.Label>수직 라디오</Radio.Label>
          <Radio.Description className={css({ fontSize: 'xs' })}>(default)</Radio.Description>
        </div>

        <Radio.Item value="option1">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 1</Radio.Text>
        </Radio.Item>

        <Radio.Item value="option2">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 2</Radio.Text>
        </Radio.Item>

        <Radio.Item value="option3">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 3</Radio.Text>
        </Radio.Item>
      </Radio.Root>

      <Radio.Root orientation="horizontal" value={valueHorizontal} onValueChange={setValueHorizontal}>
        <div className={css({ display: 'flex', flexDirection: 'row', gap: '2', alignItems: 'center' })}>
          <Radio.Label>수평 라디오</Radio.Label>
          <Radio.Description className={css({ fontSize: 'xs' })}>(orientation="horizontal")</Radio.Description>
        </div>
        <Radio.Item value="option1">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 1</Radio.Text>
        </Radio.Item>

        <Radio.Item value="option2">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 2</Radio.Text>
        </Radio.Item>

        <Radio.Item value="option3">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 3</Radio.Text>
        </Radio.Item>
      </Radio.Root>
    </div>
  );
};

export const Orientation: Story = {
  render: () => <OrientationExample />,
};

const StatesExample = () => {
  const [invalidValue, setInvalidValue] = useState('');
  const [requiredValue, setRequiredValue] = useState('option1');
  const [disabledValue, setDisabledValue] = useState('option1');

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '8' })}>
      <Radio.Root invalid value={invalidValue} onValueChange={setInvalidValue}>
        <Radio.Label>유효하지 않은 상태</Radio.Label>

        <Radio.Item value="option1">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 1</Radio.Text>
        </Radio.Item>

        <Radio.Item value="option2">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 2</Radio.Text>
        </Radio.Item>

        <Radio.Description>다시 선택해주세요.</Radio.Description>
      </Radio.Root>

      <Radio.Root required value={requiredValue} onValueChange={setRequiredValue}>
        <Radio.Label>필수 상태</Radio.Label>

        <Radio.Item value="option1">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 1</Radio.Text>
        </Radio.Item>

        <Radio.Item value="option2">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 2</Radio.Text>
        </Radio.Item>

        <Radio.Description>필수인 경우 *가 붙습니다.</Radio.Description>
      </Radio.Root>

      <Radio.Root value={disabledValue} onValueChange={setDisabledValue}>
        <Radio.Label>부분 선택 불가</Radio.Label>

        <Radio.Item value="option1">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 1 (Enabled)</Radio.Text>
        </Radio.Item>

        <Radio.Item value="option2" disabled>
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 2 (Disabled)</Radio.Text>
        </Radio.Item>

        <Radio.Item value="option3">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 3 (Enabled)</Radio.Text>
        </Radio.Item>

        <Radio.Description>일부 옵션 불가</Radio.Description>
      </Radio.Root>

      <Radio.Root disabled value={disabledValue} onValueChange={setDisabledValue}>
        <Radio.Label>전체 선택 불가</Radio.Label>

        <Radio.Item value="option1">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 1</Radio.Text>
        </Radio.Item>

        <Radio.Item value="option2">
          <Radio.Control />
          <Radio.Indicator />
          <Radio.Text>옵션 2</Radio.Text>
        </Radio.Item>

        <Radio.Description>전체 그룹 불가</Radio.Description>
      </Radio.Root>
    </div>
  );
};

export const States: Story = {
  render: () => <StatesExample />,
};
