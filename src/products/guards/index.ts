import { PizzasGuard } from "./pizzas.guards";
import { ToppingsGuard } from "./toppings.guards";
import {PizzaExistsGuards} from "./pizza-exists.guards";

export const guards: any[] = [PizzasGuard, PizzaExistsGuards];

export * from './pizzas.guards';
export * from './pizza-exists.guards'
export * from './toppings.guards'
