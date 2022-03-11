import { Registry, Server } from 'miragejs';
import { AnyFactories, AnyModels } from 'miragejs/-types';
import todoRouts from './todos';


export default function routes(this: Server<Registry<AnyModels, AnyFactories>>): void {
  this.namespace = "api";
  todoRouts.call(this);
}