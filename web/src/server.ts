import { createServer, Model, Factory } from "miragejs";
import routes from './miragejs/routes';
import { Todo } from '@prisma/client'

export function makeServer({ environment = 'mock' }) {
  const server = createServer({
    environment,
    fixtures: {
      todos: [
        {
          idx: 1,
          text: '첫번째',
          createdAt: `${new Date()}`,
          completed: false,
        },
        {
          idx: 2,
          text: '두번째',
          createdAt: `${new Date()}`,
          completed: false,
        },
        {
          idx: 3,
          text: '세번째',
          createdAt: `${new Date()}`,
          completed: false,
        },
      ],
    },
    models: {
      todos: Model.extend<Partial<Todo>>({}),
    },
    routes,
  });

  return server;
}