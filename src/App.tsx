import { Input } from '@/components/Input/Input';
import { Button } from './components/button/Button';
import { css } from '@styled-system/css';

function App() {
  return (
    <div className={css({ m: 10, maxW: '500px', display: 'flex', flexDirection: 'column' })}>
      <Input size="md" placeholder="입력입력" label="라벨라벨" description="설명설명" required />
      <div className={css({ display: 'flex', justifyContent: 'flex-end' })}>
        <Button size="sm" variant="primary">
          제출하기
        </Button>
      </div>
    </div>
  );
}

export default App;
