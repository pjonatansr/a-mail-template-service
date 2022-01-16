import {
    Either, IErrorMessage, ILeft, IRight, Predicate,
} from '@types';

export function isLeft<A>(val: unknown): val is ILeft<A> {
    if ((val as ILeft<A>).tag === 'left') return true;
    return false;
}

export function isRight<B>(val: unknown): val is IRight<B> {
    if ((val as IRight<B>).tag === 'right') return true;
    return false;
}

export function Left<A>(val: A): ILeft<A> {
    return { value: val, tag: 'left' };
}

export function Right<B>(val: B): IRight<B> {
    return { value: val, tag: 'right' };
}

export function predicateEither<A, B>(value: B, error: A, predicate: Predicate<B>): Either<A, B> {
    if (!predicate(value)) return Left(error);
    return Right(value);
}

export function firstLeft<A, B>(val: B, predicates: Predicate<B>[], errors: A[]): Either<A, B> {
    for (let i = 0; i < predicates.length; i += 1) {
        const p = predicates[i];
        if (!p(val)) return Left(errors[i]);
    }
    return Right(val);
}

export function getInstanceOrError<T>(instanceOrError: Either<Error, T>): IErrorMessage | T {
    if (isLeft(instanceOrError)) {
        const errorMessage: IErrorMessage = {
            error: instanceOrError.value,
        };

        return errorMessage;
    }

    return instanceOrError.value;
}
