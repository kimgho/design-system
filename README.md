# Design System

React + TypeScript + PandaCSS 기반 개인 디자인 시스템

## Tech Stack

- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **PandaCSS** - CSS-in-JS (zero runtime)
- **Vite** - 빌드 도구
- **Storybook** - 컴포넌트 문서화

## Getting Started

```bash
# 의존성 설치
pnpm install

# PandaCSS codegen
pnpm panda codegen

# 개발 서버
pnpm dev

# Storybook
pnpm storybook
```

## Project Structure

```
src/
  components/     # UI 컴포넌트
  stories/        # Storybook stories
styled-system/    # PandaCSS 생성 파일 (자동 생성)
```

## Import Aliases

```tsx
import { css } from '@styled-system/css';
import { Button } from '@/components/Button';
```
