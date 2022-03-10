import React from 'react'
import { Todo, Status } from '../types'
import { map, filter } from '@todo/fp'

interface Props {
  list: Todo[],
  status: Status,
  toggle: (idx: number, iter: Todo[]) => void
}
function TodoList({ list, toggle, status }: Props) {
  const isCompleted = (s: Status) => s === 'completed';
  const filteredTodos = (todos: Todo[]) => {
    if (status !== 'total') {
      return filter((todo: Todo) => todo.completed === isCompleted(status), todos);
    }
    return todos
  }

  return (
    map((todo) => 
      <div
        key={todo.idx}
        onClick={() => toggle(todo.idx ,list)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          marginTop: '8px',
          overflowY: 'scroll',
        }}
      >
        {todo.text}
      </div>,
    filteredTodos(list)) as unknown as React.ReactElement
  )
}

export default TodoList