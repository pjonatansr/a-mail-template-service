import { Right } from './right';

export class Left<L, A> {
    readonly value: L;

    isLeft: () => boolean;

    isRight: () => boolean;

    constructor(value: L) {
        this.value = value;
        this.isLeft = (): this is Left<L, A> => true;
        this.isRight = (): this is Right<L, A> => false;
    }
}
