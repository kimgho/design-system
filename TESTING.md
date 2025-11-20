# Testing Guide

This project uses **Vitest** with **React Testing Library** for comprehensive unit and integration testing.

## Test Structure

### Unit Tests
- **Location**: `src/**/*.test.tsx` and `scripts/**/*.test.ts`
- **Environment**: jsdom
- **Framework**: Vitest + React Testing Library

### Component Tests Created

#### 1. Input Component (`src/components/Input/Input.test.tsx`)
Comprehensive tests covering:
- ✅ Basic rendering with/without labels, descriptions, and errors
- ✅ Accessibility (ARIA attributes, label associations, unique IDs)
- ✅ Size variants (sm, md, lg)
- ✅ Props forwarding and ref handling
- ✅ User interactions (typing, focus, blur)
- ✅ Error states and validation
- ✅ Edge cases (ReactNode labels, empty values, rapid changes)
- ✅ Type safety checks

**Total: 30+ test cases**

#### 2. Button Component (`src/components/button/Button.test.tsx`)
Comprehensive tests covering:
- ✅ Basic rendering with different types
- ✅ Loading states with custom fallbacks
- ✅ Disabled states
- ✅ **Ref forwarding** (newly added feature)
- ✅ User interactions (clicks, keyboard events)
- ✅ Props forwarding
- ✅ Edge cases (empty children, complex children, state transitions)
- ✅ Accessibility (ARIA labels, roles, keyboard navigation)
- ✅ Type safety

**Total: 25+ test cases**

#### 3. Component Generator Script (`scripts/generateComponent.test.ts`)
Comprehensive tests covering:
- ✅ Component name validation (PascalCase)
- ✅ Template generation accuracy
- ✅ File system operations
- ✅ Component structure validation
- ✅ Story template generation
- ✅ Index file exports
- ✅ Edge cases (single char names, long names, numbers)

**Total: 15+ test cases**

## Installation

Install testing dependencies:

```bash
pnpm add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

## Running Tests

### Run all unit tests
```bash
pnpm test
```

### Watch mode (for development)
```bash
pnpm test:watch
```

### Run with UI
```bash
pnpm test:ui
```

### Generate coverage report
```bash
pnpm test:coverage
```

### Run Storybook tests
```bash
pnpm test:storybook
```

### Run all tests (unit + storybook)
```bash
pnpm test:all
```

## Test Configuration

### Vitest Config (`vite.config.ts`)
The project uses a multi-project Vitest configuration:
- **Unit tests**: jsdom environment for React component testing
- **Storybook tests**: Browser environment with Playwright for visual/interaction testing

### Setup File (`vitest.setup.ts`)
- Extends Vitest matchers with `@testing-library/jest-dom`
- Automatic cleanup after each test
- Global test environment configuration

## Writing Tests

### Component Test Template

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { YourComponent } from './YourComponent';

describe('YourComponent', () => {
  it('should render correctly', () => {
    render(<YourComponent />);
    expect(screen.getByRole('...')).toBeInTheDocument();
  });

  it('should handle user interactions', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    render(<YourComponent onClick={handleClick} />);
    await user.click(screen.getByRole('button'));
    
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### Best Practices

1. **Use semantic queries**: Prefer `getByRole`, `getByLabelText` over `getByTestId`
2. **Test user behavior**: Focus on how users interact with components
3. **Test accessibility**: Ensure ARIA attributes and keyboard navigation work
4. **Mock external dependencies**: Use `vi.fn()` for callbacks and external services
5. **Test edge cases**: Empty states, error states, loading states
6. **Keep tests isolated**: Each test should be independent

## Coverage

Coverage reports are generated in the `coverage/` directory when running `pnpm test:coverage`.

### Coverage Exclusions
- `node_modules/`
- `styled-system/` (generated code)
- `*.config.*` (configuration files)
- `**/*.stories.tsx` (Storybook stories)
- `**/*.d.ts` (TypeScript definitions)

## Continuous Integration

Tests run automatically on:
- Pull requests
- Push to main branch
- Pre-commit hooks (if configured)

## Troubleshooting

### Tests fail with import errors
Make sure all dependencies are installed:
```bash
pnpm install
```

### jsdom errors
The project uses jsdom ^25.0.1. If you encounter version conflicts, check `package.json`.

### Storybook tests not running
Ensure Storybook is properly built:
```bash
pnpm build-storybook
```

## Test Statistics

- **Total Test Files**: 3
- **Total Test Cases**: 70+
- **Coverage Target**: 80%+
- **Test Frameworks**: Vitest, React Testing Library, Playwright

## Future Improvements

- [ ] Add E2E tests with Playwright
- [ ] Add visual regression tests
- [ ] Increase coverage to 90%+
- [ ] Add performance benchmarking tests
- [ ] Add integration tests for complex workflows