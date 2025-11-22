import { cx } from '@styled-system/css';
import { css } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import { useSelectContext } from './SelectContext';

export type SelectIconProps = Omit<ComponentProps<'svg'>, 'children'>;

const iconStyles = css({
  transition: 'transform 0.15s ease-out',
  transform: 'translateY(-50%)',
  '&[data-state="open"]': {
    transform: 'translateY(-50%) rotate(180deg)',
  },
});

export const SelectIcon = ({ className, ...props }: SelectIconProps) => {
  const { classes, isOpen } = useSelectContext();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx(classes.icon, iconStyles, className)}
      aria-hidden="true"
      data-state={isOpen ? 'open' : 'closed'}
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};
