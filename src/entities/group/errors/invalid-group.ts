import { IDomainError } from 'src/common/types';

export class InvalidGroupError extends Error implements IDomainError {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidGroupError';
    }
}
