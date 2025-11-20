import { buttonRecipe } from '@/theme/recipes/button';
import { styled } from '@styled-system/jsx';
import type { ComponentProps } from '@styled-system/types';
import type { ReactNode } from 'react';

const BaseButton = styled('button', buttonRecipe);

export type ButtonProps = ComponentProps<typeof BaseButton> & {
  isLoading?: boolean;
  fallback?: ReactNode;
};

export const Button = ({
  type = 'button',
  isLoading,
  disabled,
  children,
  fallback = '로딩 중...',
  ref,
  ...props
}: ButtonProps) => {
  const isBusy = isLoading || disabled;

  return (
    <BaseButton type={type} ref={ref} disabled={isBusy} aria-disabled={isBusy} aria-busy={isLoading} {...props}>
      {isLoading ? fallback : children}
    </BaseButton>
  );
};
