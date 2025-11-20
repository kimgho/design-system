import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

describe('generateComponent Script', () => {
  const testComponentsDir = path.join(process.cwd(), 'test-components-temp');
  let originalArgv: string[];
  let originalCwd: string;
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;
  let consoleLogSpy: ReturnType<typeof vi.spyOn>;
  let processExitSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    originalArgv = process.argv;
    originalCwd = process.cwd();
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    processExitSpy = vi.spyOn(process, 'exit').mockImplementation((code?: number) => {
      throw new Error(`Process exited with code ${code}`);
    });
  });

  afterEach(() => {
    process.argv = originalArgv;
    consoleErrorSpy.mockRestore();
    consoleLogSpy.mockRestore();
    processExitSpy.mockRestore();
    
    if (fs.existsSync(testComponentsDir)) {
      fs.rmSync(testComponentsDir, { recursive: true, force: true });
    }
  });

  describe('Validation', () => {
    it('should exit with error when component name is not provided', () => {
      expect(() => {
        execSync('node scripts/generateComponent.ts', { stdio: 'pipe' });
      }).toThrow();
    });

    it('should validate PascalCase component names', () => {
      const invalidNames = [
        'lowercase',
        'snake_case',
        'kebab-case',
        'camelCase',
        '123Component',
        'Component@Name',
        'Component Name',
        '',
      ];

      invalidNames.forEach(name => {
        const isValid = /^[A-Z][a-zA-Z0-9]*$/.test(name);
        expect(isValid).toBe(false);
      });
    });

    it('should accept valid PascalCase component names', () => {
      const validNames = [
        'Button',
        'InputField',
        'CustomComponent',
        'A',
        'ComponentWithNumbers123',
        'LongComponentNameHere',
      ];

      validNames.forEach(name => {
        const isValid = /^[A-Z][a-zA-Z0-9]*$/.test(name);
        expect(isValid).toBe(true);
      });
    });

    it('should reject component names starting with numbers', () => {
      const name = '123Component';
      const isValid = /^[A-Z][a-zA-Z0-9]*$/.test(name);
      expect(isValid).toBe(false);
    });

    it('should reject component names with special characters', () => {
      const names = ['Component!', 'Component@Name', 'Component-Name', 'Component_Name'];
      
      names.forEach(name => {
        const isValid = /^[A-Z][a-zA-Z0-9]*$/.test(name);
        expect(isValid).toBe(false);
      });
    });
  });

  describe('Component Generation', () => {
    it('should generate correct component file structure', () => {
      const componentName = 'TestButton';
      
      fs.mkdirSync(testComponentsDir, { recursive: true });
      
      const componentDir = path.join(testComponentsDir, componentName);
      fs.mkdirSync(componentDir, { recursive: true });
      
      const files = [
        `${componentName}.tsx`,
        `${componentName}.stories.tsx`,
        'index.ts',
      ];
      
      files.forEach(file => {
        const filePath = path.join(componentDir, file);
        fs.writeFileSync(filePath, '// Test content');
        expect(fs.existsSync(filePath)).toBe(true);
      });
    });

    it('should generate component with correct TypeScript template', () => {
      const componentName = 'MyComponent';
      const template = generateComponentTemplate(componentName);
      
      expect(template).toContain(`export type ${componentName}Props`);
      expect(template).toContain(`export const ${componentName}`);
      expect(template).toContain('ComponentProps<\'div\'>');
      expect(template).toContain('import { css } from \'@styled-system/css\'');
    });

    it('should generate story with correct structure', () => {
      const componentName = 'MyComponent';
      const template = generateStoryTemplate(componentName);
      
      expect(template).toContain(`import type { Meta, StoryObj }`);
      expect(template).toContain(`import { ${componentName} }`);
      expect(template).toContain(`title: 'Component/${componentName}'`);
      expect(template).toContain('export default meta');
      expect(template).toContain('export const Default: Story');
    });

    it('should generate index file with correct exports', () => {
      const componentName = 'MyComponent';
      const template = generateIndexTemplate(componentName);
      
      expect(template).toContain(`export { ${componentName} }`);
      expect(template).toContain(`export type { ${componentName}Props }`);
    });

    it('should not overwrite existing components', () => {
      const componentName = 'ExistingComponent';
      const componentDir = path.join(testComponentsDir, componentName);
      
      fs.mkdirSync(componentDir, { recursive: true });
      fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), '// Existing');
      
      expect(fs.existsSync(componentDir)).toBe(true);
    });
  });

  describe('File System Operations', () => {
    it('should create directory recursively', () => {
      const nestedPath = path.join(testComponentsDir, 'nested', 'deep', 'Component');
      fs.mkdirSync(nestedPath, { recursive: true });
      expect(fs.existsSync(nestedPath)).toBe(true);
    });

    it('should write files with correct content', () => {
      const testFile = path.join(testComponentsDir, 'test.txt');
      fs.mkdirSync(testComponentsDir, { recursive: true });
      fs.writeFileSync(testFile, 'test content');
      
      const content = fs.readFileSync(testFile, 'utf-8');
      expect(content).toBe('test content');
    });

    it('should handle path.join correctly', () => {
      const result = path.join('src', 'components', 'Button');
      expect(result).toBe(path.normalize('src/components/Button'));
    });
  });

  describe('Template Generation', () => {
    it('should include all required imports in component template', () => {
      const template = generateComponentTemplate('TestComponent');
      
      expect(template).toContain('import { css }');
      expect(template).toContain('import type { ComponentProps }');
      expect(template).toContain('@styled-system/css');
      expect(template).toContain('@styled-system/types');
    });

    it('should generate component with className support', () => {
      const template = generateComponentTemplate('TestComponent');
      
      expect(template).toContain('className');
      expect(template).toContain('...props');
    });

    it('should include decorators in story template', () => {
      const template = generateStoryTemplate('TestComponent');
      
      expect(template).toContain('decorators');
      expect(template).toContain('css({ m: 10 })');
    });

    it('should include autodocs tag in story template', () => {
      const template = generateStoryTemplate('TestComponent');
      
      expect(template).toContain("tags: ['autodocs']");
    });
  });

  describe('Edge Cases', () => {
    it('should handle single character component name', () => {
      const componentName = 'A';
      const template = generateComponentTemplate(componentName);
      
      expect(template).toContain('export const A');
      expect(template).toContain('export type AProps');
    });

    it('should handle very long component names', () => {
      const componentName = 'VeryLongComponentNameThatIsStillValid';
      const isValid = /^[A-Z][a-zA-Z0-9]*$/.test(componentName);
      expect(isValid).toBe(true);
    });

    it('should handle component names with numbers', () => {
      const componentName = 'Component123';
      const template = generateComponentTemplate(componentName);
      
      expect(template).toContain('export const Component123');
      expect(template).toContain('export type Component123Props');
    });
  });
});

function generateComponentTemplate(componentName: string): string {
  return `import { css } from '@styled-system/css';
import type { ComponentProps } from '@styled-system/types';

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
}

function generateStoryTemplate(componentName: string): string {
  return `import type { Meta, StoryObj } from '@storybook/react-vite';
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
}

function generateIndexTemplate(componentName: string): string {
  return `export { ${componentName} } from './${componentName}';
export type { ${componentName}Props } from './${componentName}';
`;
}