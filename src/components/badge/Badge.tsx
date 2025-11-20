import { badgeRecipe } from '@/theme/recipes/badge';
import { styled } from '@styled-system/jsx';
import { cx } from '@styled-system/css';
import type { ComponentProps, RecipeVariantProps } from '@styled-system/types';
import type { ReactNode } from 'react';

type BadgeVariants = RecipeVariantProps<typeof badgeRecipe>;

const BaseBadge = styled('div', badgeRecipe);

export type BadgeProps = ComponentProps<'div'> &
  BadgeVariants & {
    children: ReactNode;
    selected?: boolean;
  };

export const Badge = ({ className, variant, size, selected, children, onClick, ...props }: BadgeProps) => {
  const isInteractive = !!onClick;

  return (
    <BaseBadge
      className={cx(className)}
      variant={variant}
      selected={selected === undefined ? 'null' : selected}
      size={size}
      onClick={onClick}
      role={isInteractive ? 'button' : undefined}
      aria-pressed={isInteractive ? selected : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      {...props}
    >
      {children}
    </BaseBadge>
  );
};
