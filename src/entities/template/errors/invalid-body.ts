import { IDomainError } from 'src/common/types/types';

export class InvalidBodyError extends Error implements IDomainError {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidBodyError';
    }
}
