import { Left } from './left';
import { Right } from './right';

export type Either<L, A> = Left<L> | Right<A>

export const left = <L, A>(l: L): Either<L, A> => new Left<L>(l);

export const right = <L, A>(a: A): Either<L, A> => new Right<A>(a);
