import React, { useEffect, useRef, useState } from 'react';
import { Status, Todo } from './types';
import useSWR from 'swr';

import { BasicButton, BasicInput } from '@todo/design';
import { map } from '@todo/fp';
import { isGteMinLength } from '@todo/validator';

import useInput from './hooks/useInput';
import TodoList from './components/TodoList';
import { fetcher } from './fetcher';

function App() {
  const idx = useRef(0);
  const filterList = ['total', 'completed', 'notyet'];
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, handleText, setText] = useInput('');
  const [status, setStatus] = useState<Status>('total');

  const { data, error } = useSWR<Todo[]>('/api/todos', fetcher);

  const addTodo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!text) return;
    setTodos([{
      idx: idx.current,
      text,
      createdAt: `${new Date()}`,
      completed: false,
    }, ...todos]);
    idx.current += 1;
    setText('');
  };

  const toggleComplete = (idx: number) => {
    const toggledTodos = map(
      (todo) => ({
        ...todo,
        completed: todo.idx === idx ? !todo.completed : todo.completed,
      }),
      todos
    );
    setTodos(toggledTodos);
  };

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setStatus(e.target.value as Status);
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        flex: '0 0 100%',
        maxWidth: '480px',
        height: '500px',
        margin: '0 auto',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}>
        <form
          style={{
            display: 'flex'
          }}
        >
          <BasicInput value={text} onChange={handleText} />
          <BasicButton onClick={addTodo} disabled={!isGteMinLength(1)(text)}>추가</BasicButton>
            <div onChange={onChangeFilter}>
              {map(
                (f) => (
                  <React.Fragment key={f}>
                    <input type="radio" value={f} name={f} checked={status === f} readOnly/> <span>{f}</span>
                  </React.Fragment>
                ),
                filterList,
              )}
            </div>
        </form>
        {<TodoList list={todos} toggle={toggleComplete} status={status} />}
      </div>
    </div>
  );
}

export default App
