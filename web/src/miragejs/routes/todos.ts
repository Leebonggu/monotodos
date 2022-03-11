import { Registry, Server } from 'miragejs';
import { AnyModels } from 'miragejs/-types';
import { PrismaClient } from '@prisma/client';

export default function todoRouts(this: Server<Registry<AnyModels, AnyModels>>): void {
  const prisma = new PrismaClient();
  this.get('todos', (schema, request) => {
    console.log(schema);
    console.log(request);

    return {
      message: 'hello'
    }
  })
}