import { IDomainError } from 'src/common/types';

export class InvalidHeaderError extends Error implements IDomainError {
    constructor() {
        super('The header is invalid.');
        this.name = 'InvalidHeaderError';
    }
}
