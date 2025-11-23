import { styled } from '@styled-system/jsx';

const SpacingBox = styled('div');

export type SpacingProps = {
  size: number;
  direction?: 'vertical' | 'horizontal';
};

export const Spacing = ({ size, direction = 'horizontal' }: SpacingProps) => {
  return (
    <SpacingBox
      style={
        direction === 'horizontal' ? { height: `${size}px`, width: '100%' } : { width: `${size}px`, height: '100%' }
      }
    />
  );
};
