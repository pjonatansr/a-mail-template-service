import { IDomainError } from 'src/common/types/types';

export class InvalidTitleError extends Error implements IDomainError {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidTitleError';
    }
}
