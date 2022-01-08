import { Left } from './left';

export class Right<L, A> {
    readonly value: A;

    isLeft: () => boolean;

    isRight: () => boolean;

    constructor(value: A) {
        this.value = value;
        this.isLeft = (): this is Left<L, A> => false;
        this.isRight = (): this is Right<L, A> => true;
    }
}
