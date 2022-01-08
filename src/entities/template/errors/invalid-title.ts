import { IDomainError } from 'src/common/types';

export class InvalidTitleError extends Error implements IDomainError {
    constructor() {
        super('The title is invalid.');
        this.name = 'InvalidTitleError';
    }
}
