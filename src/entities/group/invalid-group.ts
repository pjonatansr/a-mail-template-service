import { IDomainError } from 'src/common/types';

export class InvalidGroupError extends Error implements IDomainError {
    constructor() {
        super('The group is invalid.');
        this.name = 'InvalidGroupError';
    }
}
