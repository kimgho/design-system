import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input Component', () => {
  describe('Rendering', () => {
    it('should render input element', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });

    it('should render with label when provided', () => {
      render(<Input label="Username" />);
      expect(screen.getByText('Username')).toBeInTheDocument();
      expect(screen.getByLabelText('Username')).toBeInTheDocument();
    });

    it('should render without label when not provided', () => {
      render(<Input />);
      const labels = screen.queryAllByRole('label');
      expect(labels).toHaveLength(0);
    });

    it('should render with description when provided', () => {
      const description = 'Enter your username';
      render(<Input description={description} />);
      expect(screen.getByText(description)).toBeInTheDocument();
    });

    it('should render with error text instead of description when both provided', () => {
      const description = 'Enter your email';
      const errorText = 'Invalid email format';
      render(<Input description={description} errorText={errorText} />);
      
      expect(screen.getByText(errorText)).toBeInTheDocument();
      expect(screen.queryByText(description)).not.toBeInTheDocument();
    });

    it('should render required indicator when required prop is true', () => {
      render(<Input label="Email" required />);
      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('should not render required indicator when required prop is false', () => {
      render(<Input label="Email" required={false} />);
      expect(screen.queryByText('*')).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should associate label with input using htmlFor and id', () => {
      render(<Input label="Email" id="email-input" />);
      const input = screen.getByLabelText('Email');
      expect(input).toHaveAttribute('id', 'email-input');
    });

    it('should generate unique id when not provided', () => {
      const { container } = render(
        <>
          <Input label="First" />
          <Input label="Second" />
        </>
      );
      const inputs = container.querySelectorAll('input');
      const firstId = inputs[0].getAttribute('id');
      const secondId = inputs[1].getAttribute('id');
      
      expect(firstId).toBeTruthy();
      expect(secondId).toBeTruthy();
      expect(firstId).not.toBe(secondId);
    });

    it('should set aria-invalid to false when no error', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-invalid', 'false');
    });

    it('should set aria-invalid to true when error text is provided', () => {
      render(<Input errorText="Error occurred" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('should maintain accessibility with disabled state', () => {
      render(<Input label="Disabled Field" disabled />);
      const input = screen.getByLabelText('Disabled Field');
      expect(input).toBeDisabled();
    });
  });

  describe('Size Variants', () => {
    it('should render with small size', () => {
      const { container } = render(<Input size="sm" />);
      const input = container.querySelector('input');
      expect(input?.className).toBeTruthy();
    });

    it('should render with medium size (default)', () => {
      const { container } = render(<Input />);
      const input = container.querySelector('input');
      expect(input?.className).toBeTruthy();
    });

    it('should render with large size', () => {
      const { container } = render(<Input size="lg" />);
      const input = container.querySelector('input');
      expect(input?.className).toBeTruthy();
    });
  });

  describe('Props Forwarding', () => {
    it('should forward standard input props', () => {
      render(
        <Input
          placeholder="Enter text"
          type="email"
          name="email"
          value="test@example.com"
          readOnly
        />
      );
      const input = screen.getByRole('textbox');
      
      expect(input).toHaveAttribute('placeholder', 'Enter text');
      expect(input).toHaveAttribute('type', 'email');
      expect(input).toHaveAttribute('name', 'email');
      expect(input).toHaveValue('test@example.com');
      expect(input).toHaveAttribute('readOnly');
    });

    it('should apply custom className to root element', () => {
      const { container } = render(<Input className="custom-class" />);
      const root = container.firstChild;
      expect(root).toHaveClass('custom-class');
    });

    it('should forward ref to input element', () => {
      const ref = vi.fn();
      render(<Input ref={ref} />);
      expect(ref).toHaveBeenCalled();
      const input = ref.mock.calls[0][0];
      expect(input).toBeInstanceOf(HTMLInputElement);
    });

    it('should handle disabled state', () => {
      render(<Input disabled />);
      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });
  });

  describe('User Interactions', () => {
    it('should handle typing input', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      
      render(<Input onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      
      await user.type(input, 'Hello');
      
      expect(handleChange).toHaveBeenCalled();
      expect(input).toHaveValue('Hello');
    });

    it('should handle blur event', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();
      
      render(<Input onBlur={handleBlur} />);
      const input = screen.getByRole('textbox');
      
      await user.click(input);
      await user.tab();
      
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('should handle focus event', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();
      
      render(<Input onFocus={handleFocus} />);
      const input = screen.getByRole('textbox');
      
      await user.click(input);
      
      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it('should not allow typing when disabled', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      
      render(<Input disabled onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      
      await user.type(input, 'Hello');
      
      expect(handleChange).not.toHaveBeenCalled();
      expect(input).toHaveValue('');
    });
  });

  describe('Error State', () => {
    it('should display error text when provided', () => {
      const errorText = 'This field is required';
      render(<Input errorText={errorText} />);
      expect(screen.getByText(errorText)).toBeInTheDocument();
    });

    it('should prioritize error text over description', () => {
      render(
        <Input
          description="Helper text"
          errorText="Error message"
        />
      );
      
      expect(screen.getByText('Error message')).toBeInTheDocument();
      expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
    });

    it('should apply invalid styles when error text exists', () => {
      render(<Input errorText="Error" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('should not apply invalid styles when no error text', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-invalid', 'false');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty string label', () => {
      render(<Input label="" />);
      const labels = screen.queryAllByRole('label');
      expect(labels).toHaveLength(0);
    });

    it('should handle ReactNode as label', () => {
      render(
        <Input
          label={
            <span>
              Custom <strong>Label</strong>
            </span>
          }
        />
      );
      expect(screen.getByText('Custom')).toBeInTheDocument();
      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('should handle ReactNode as description', () => {
      render(
        <Input
          description={
            <span>
              Help <em>text</em>
            </span>
          }
        />
      );
      expect(screen.getByText('Help')).toBeInTheDocument();
      expect(screen.getByText('text')).toBeInTheDocument();
    });

    it('should handle ReactNode as errorText', () => {
      render(
        <Input
          errorText={
            <span>
              Error <strong>occurred</strong>
            </span>
          }
        />
      );
      expect(screen.getByText('Error')).toBeInTheDocument();
      expect(screen.getByText('occurred')).toBeInTheDocument();
    });

    it('should handle all props together', () => {
      const handleChange = vi.fn();
      render(
        <Input
          label="Email Address"
          description="Enter your email"
          placeholder="email@example.com"
          required
          disabled={false}
          size="lg"
          id="email"
          name="email"
          onChange={handleChange}
        />
      );
      
      expect(screen.getByText('Email Address')).toBeInTheDocument();
      expect(screen.getByText('*')).toBeInTheDocument();
      expect(screen.getByText('Enter your email')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('email@example.com')).toBeInTheDocument();
    });

    it('should handle rapid prop changes', () => {
      const { rerender } = render(<Input errorText="Error 1" />);
      expect(screen.getByText('Error 1')).toBeInTheDocument();
      
      rerender(<Input errorText="Error 2" />);
      expect(screen.queryByText('Error 1')).not.toBeInTheDocument();
      expect(screen.getByText('Error 2')).toBeInTheDocument();
      
      rerender(<Input description="Description" />);
      expect(screen.queryByText('Error 2')).not.toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
    });

    it('should handle numeric zero as valid input value', () => {
      render(<Input type="number" value={0} readOnly />);
      const input = screen.getByRole('spinbutton');
      expect(input).toHaveValue(0);
    });

    it('should handle empty string as valid input value', () => {
      render(<Input value="" readOnly />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('');
    });
  });

  describe('Type Safety', () => {
    it('should accept valid input types', () => {
      const types = ['text', 'email', 'password', 'number', 'tel', 'url'] as const;
      
      types.forEach(type => {
        const { unmount } = render(<Input type={type} />);
        unmount();
      });
    });

    it('should accept valid autoComplete values', () => {
      render(<Input autoComplete="email" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('autoComplete', 'email');
    });
  });
});