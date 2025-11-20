# 🚀 Quick Start - Testing

## Step 1: Install Dependencies (REQUIRED)

```bash
pnpm add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

## Step 2: Run Tests

```bash
pnpm test
```

## Step 3: Check Coverage

```bash
pnpm test:coverage
```

## That's it! 🎉

For more details, see:
- **README_TESTS.md** - Complete overview
- **TESTING.md** - Detailed testing guide  
- **TEST_SUMMARY.md** - Test breakdown

## Test Files Created

- ✅ `src/components/Input/Input.test.tsx` (39 tests)
- ✅ `src/components/button/Button.test.tsx` (33 tests)
- ✅ `scripts/generateComponent.test.ts` (20 tests)

## Test Scripts Available

```bash
pnpm test              # Run tests once
pnpm test:watch        # Watch mode
pnpm test:ui           # UI dashboard
pnpm test:coverage     # Coverage report
pnpm test:all          # All tests
```