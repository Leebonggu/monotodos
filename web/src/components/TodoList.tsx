import React from 'react'
import { Todo } from '../types'
import { map } from '@todo/fp'


interface Props {
  list: Todo[],
  toggle: (idx: number, iter: Todo[]) => void
}
function TodoList({ list, toggle }: Props) {
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
    list) as unknown as React.ReactElement
  )
}

export default TodoList