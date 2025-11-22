import { cx } from '@styled-system/css';
import { css } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';
import { useEffect, useRef, type ReactNode } from 'react';
import { useSelectContext } from './SelectContext';

export type SelectContentProps = ComponentProps<'ul'> & {
  children: ReactNode;
};

const contentStyles = css({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  mt: '1',
  py: '1',
  bg: 'white',
  border: '1px solid',
  borderColor: 'gray.200',
  borderRadius: 'md',
  boxShadow: 'md',
  zIndex: 50,
  maxH: '200px',
  overflowY: 'auto',
  listStyle: 'none',
  transformOrigin: 'top',
  willChange: 'transform, opacity',
  transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
  opacity: 0,
  transform: 'translateY(-8px) scale(0.95)',
  pointerEvents: 'none',
  visibility: 'hidden',
  '&[data-state="open"]': {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
    pointerEvents: 'auto',
    visibility: 'visible',
  },
});

export const SelectContent = ({ className, children, ...props }: SelectContentProps) => {
  const { isOpen, onOpenChange } = useSelectContext();
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        const parent = ref.current.parentElement;
        if (parent && !parent.contains(event.target as Node)) {
          onOpenChange(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onOpenChange]);

  return (
    <ul
      ref={ref}
      role="listbox"
      data-state={isOpen ? 'open' : 'closed'}
      className={cx(contentStyles, className)}
      {...props}
    >
      {children}
    </ul>
  );
};
