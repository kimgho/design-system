import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';
import { css } from '@styled-system/css';

const meta = {
  title: 'Component/Badge',
  component: Badge,
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

export const Variants: Story = {
  args: {
    children: 'Variant',
  },
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'row', gap: '6' })}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
};

export const Selected: Story = {
  args: {
    children: '선택여부',
  },
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <div className={css({ display: 'flex', flexDirection: 'row', gap: '6' })}>
        <Badge variant="primary" selected={true}>
          Primary
        </Badge>
        <Badge variant="secondary" selected={true}>
          Secondary
        </Badge>
        <Badge variant="outline" selected={true}>
          Outline
        </Badge>
        <Badge variant="destructive" selected={true}>
          Destructive
        </Badge>
      </div>
      <div className={css({ display: 'flex', flexDirection: 'row', gap: '6' })}>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    children: 'Size',
  },
  render: () => (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <div className={css({ display: 'flex', flexDirection: 'row', gap: '6' })}>
        <Badge variant="primary" size="sm">
          Primary
        </Badge>
        <Badge variant="secondary" size="sm">
          Secondary
        </Badge>
        <Badge variant="outline" size="sm">
          Outline
        </Badge>
        <Badge variant="destructive" size="sm">
          Destructive
        </Badge>
      </div>
      <div className={css({ display: 'flex', flexDirection: 'row', gap: '6' })}>
        <Badge variant="primary" size="md">
          Primary
        </Badge>
        <Badge variant="secondary" size="md">
          Secondary
        </Badge>
        <Badge variant="outline" size="md">
          Outline
        </Badge>
        <Badge variant="destructive" size="md">
          Destructive
        </Badge>
      </div>
      <div className={css({ display: 'flex', flexDirection: 'row', gap: '6' })}>
        <Badge variant="primary" size="lg">
          Primary
        </Badge>
        <Badge variant="secondary" size="lg">
          Secondary
        </Badge>
        <Badge variant="outline" size="lg">
          Outline
        </Badge>
        <Badge variant="destructive" size="lg">
          Destructive
        </Badge>
      </div>
    </div>
  ),
};
