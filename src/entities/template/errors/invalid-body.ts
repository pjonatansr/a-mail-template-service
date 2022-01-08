import { IDomainError } from 'src/common/types';

export class InvalidBodyError extends Error implements IDomainError {
    constructor() {
        super('The body is invalid.');
        this.name = 'InvalidBodyError';
    }
}
