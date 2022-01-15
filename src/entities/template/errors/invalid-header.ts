import { IDomainError } from 'src/common/types/types';

export class InvalidHeaderError extends Error implements IDomainError {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidHeaderError';
    }
}
