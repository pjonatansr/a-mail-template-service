import { IDatabaseError } from 'src/common/types';

export class DatabaseError extends Error implements IDatabaseError {
    public readonly instance: unknown;

    constructor(message: string, instance: unknown) {
        super(message);
        this.name = 'DatabaseError';
        this.instance = instance;
    }
}
