import { Input } from '@/components/input/Input';
import { Button } from './components/button/Button';
import { css } from '@styled-system/css';
import { Select } from '@/components/select';

function App() {
  return (
    <div className={css({ m: 10, maxW: '500px', display: 'flex', flexDirection: 'column' })}>
      <Input size="md" placeholder="입력입력" label="라벨라벨" description="설명설명" required />
      <div className={css({ display: 'flex', justifyContent: 'flex-end' })}>
        <Button size="sm" variant="primary" isLoading={true} fallback="제출중">
          제출하기
        </Button>
      </div>
      <div className={css({ display: 'flex', justifyContent: 'center' })}>
        <Select
          size="md"
          label="옵션"
          placeholder="옵션을 선택해주세요"
          description="최대 1개 선택가능"
          required={true}
        >
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
        </Select>
      </div>
    </div>
  );
}

export default App;
