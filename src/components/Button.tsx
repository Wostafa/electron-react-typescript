import { useState } from 'react';

export default function Button() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className='counter'>
      <h1> {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
