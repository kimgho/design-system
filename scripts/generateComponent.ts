import fs from 'fs';
import path from 'path';

const componentName = process.argv[2];

if (!componentName) {
  console.error('컴포넌트 이름을 입력해주세요.');
  console.error('사용법: pnpm run gen <ComponentName>');
  process.exit(1);
}

if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error('컴포넌트 이름은 PascalCase로 입력해주세요. (예: Button, InputField)');
  process.exit(1);
}

const componentDir = path.join(process.cwd(), 'src/components', componentName);

if (fs.existsSync(componentDir)) {
  console.error(`${componentName} 컴포넌트가 이미 존재합니다.`);
  process.exit(1);
}

const componentTemplate = `import { css } from '@styled-system/css';
import type { ComponentProps } from 'react';

export type ${componentName}Props = ComponentProps<'div'> & {
  // props 정의
};

export const ${componentName} = ({ className, ...props }: ${componentName}Props) => {
  return (
    <div className={className} {...props}>
      ${componentName}
    </div>
  );
};
`;

const storyTemplate = `import type { Meta, StoryObj } from '@storybook/react-vite';
import { ${componentName} } from './${componentName}';
import { css } from '@styled-system/css';

const meta = {
  title: 'Component/${componentName}',
  component: ${componentName},
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className={css({ m: 10 })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
`;

const indexTemplate = `export { ${componentName} } from './${componentName}';
export type { ${componentName}Props } from './${componentName}';
`;

fs.mkdirSync(componentDir, { recursive: true });
fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentTemplate);
fs.writeFileSync(path.join(componentDir, `${componentName}.stories.tsx`), storyTemplate);
fs.writeFileSync(path.join(componentDir, 'index.ts'), indexTemplate);

console.log(`   - ${componentName} 컴포넌트가 생성되었습니다.`);
console.log(`   - src/components/${componentName}/${componentName}.tsx`);
console.log(`   - src/components/${componentName}/${componentName}.stories.tsx`);
console.log(`   - src/components/${componentName}/index.ts`);
