import { IDomainError } from '@types';

export class InvalidContactError extends Error implements IDomainError {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidContactError';
    }
}
