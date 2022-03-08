import { useState } from 'react';
import { BasicInput } from '@todo/design';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BasicInput />
    </div>
  )
}

export default App
