import { IDomainError } from '@types';

export class InvalidHeaderError extends Error implements IDomainError {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidHeaderError';
    }
}
