import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { createRef } from 'react';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should render button with children', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toHaveTextContent('Click me');
    });

    it('should render with default type', () => {
      render(<Button>Submit</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('should render with custom type', () => {
      render(<Button type="submit">Submit</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });
  });

  describe('Loading State', () => {
    it('should show fallback text when loading', () => {
      render(<Button isLoading>Click me</Button>);
      expect(screen.getByText('로딩 중...')).toBeInTheDocument();
      expect(screen.queryByText('Click me')).not.toBeInTheDocument();
    });

    it('should show custom fallback when provided', () => {
      render(<Button isLoading fallback="Loading...">Click me</Button>);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
      expect(screen.queryByText('Click me')).not.toBeInTheDocument();
    });

    it('should disable button when loading', () => {
      render(<Button isLoading>Click me</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('should set aria-busy when loading', () => {
      render(<Button isLoading>Click me</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('should not set aria-busy when not loading', () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'false');
    });
  });

  describe('Disabled State', () => {
    it('should disable button when disabled prop is true', () => {
      render(<Button disabled>Click me</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('should set aria-disabled when disabled', () => {
      render(<Button disabled>Click me</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('should disable button when both loading and disabled', () => {
      render(<Button isLoading disabled>Click me</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('Ref Forwarding', () => {
    it('should forward ref to button element', () => {
      const ref = createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Click me</Button>);
      
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
      expect(ref.current?.textContent).toBe('Click me');
    });

    it('should allow ref methods to be called', () => {
      const ref = createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Click me</Button>);
      
      expect(ref.current?.focus).toBeDefined();
      expect(ref.current?.click).toBeDefined();
    });

    it('should handle callback refs', () => {
      const refCallback = vi.fn();
      render(<Button ref={refCallback}>Click me</Button>);
      
      expect(refCallback).toHaveBeenCalledTimes(1);
      expect(refCallback.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement);
    });

    it('should update ref on rerender', () => {
      const ref = createRef<HTMLButtonElement>();
      const { rerender } = render(<Button ref={ref}>First</Button>);
      
      const firstElement = ref.current;
      expect(firstElement?.textContent).toBe('First');
      
      rerender(<Button ref={ref}>Second</Button>);
      expect(ref.current?.textContent).toBe('Second');
    });
  });

  describe('User Interactions', () => {
    it('should call onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      
      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button');
      
      await user.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      
      render(<Button disabled onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button');
      
      await user.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should not call onClick when loading', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      
      render(<Button isLoading onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button');
      
      await user.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should handle keyboard events', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      
      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button');
      
      button.focus();
      await user.keyboard('{Enter}');
      
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('Props Forwarding', () => {
    it('should forward standard button props', () => {
      render(
        <Button
          name="submit-btn"
          value="submit"
          form="my-form"
          aria-label="Submit form"
        >
          Submit
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('name', 'submit-btn');
      expect(button).toHaveAttribute('value', 'submit');
      expect(button).toHaveAttribute('form', 'my-form');
      expect(button).toHaveAttribute('aria-label', 'Submit form');
    });

    it('should spread additional props', () => {
      render(
        <Button data-testid="custom-button" data-custom="value">
          Click me
        </Button>
      );
      
      const button = screen.getByTestId('custom-button');
      expect(button).toHaveAttribute('data-custom', 'value');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty children', () => {
      render(<Button>{''}</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should handle null fallback', () => {
      render(<Button isLoading fallback={null}>Content</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeEmptyDOMElement();
    });

    it('should handle complex children', () => {
      render(
        <Button>
          <span>Icon</span>
          <span>Text</span>
        </Button>
      );
      
      expect(screen.getByText('Icon')).toBeInTheDocument();
      expect(screen.getByText('Text')).toBeInTheDocument();
    });

    it('should maintain state during loading transition', () => {
      const { rerender } = render(<Button>Click me</Button>);
      
      rerender(<Button isLoading>Click me</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(screen.getByText('로딩 중...')).toBeInTheDocument();
      
      rerender(<Button>Click me</Button>);
      expect(button).not.toBeDisabled();
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('should handle rapid state changes', () => {
      const { rerender } = render(<Button>Initial</Button>);
      
      rerender(<Button isLoading>Initial</Button>);
      rerender(<Button disabled>Initial</Button>);
      rerender(<Button>Initial</Button>);
      
      const button = screen.getByRole('button');
      expect(button).not.toBeDisabled();
      expect(button).toHaveTextContent('Initial');
    });
  });

  describe('Accessibility', () => {
    it('should have correct role', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should support aria-label', () => {
      render(<Button aria-label="Close dialog">×</Button>);
      expect(screen.getByLabelText('Close dialog')).toBeInTheDocument();
    });

    it('should support aria-describedby', () => {
      render(
        <>
          <Button aria-describedby="help-text">Submit</Button>
          <div id="help-text">Press to submit form</div>
        </>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-describedby', 'help-text');
    });

    it('should be keyboard accessible', () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });
  });

  describe('Type Safety', () => {
    it('should accept submit type', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('should accept reset type', () => {
      render(<Button type="reset">Reset</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });

    it('should accept button type', () => {
      render(<Button type="button">Button</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });
  });
});