import { ILogger } from '@types';

export class Logger implements ILogger {
    logError: (error: Error) => void;

    constructor() {
        this.logError = (error: Error): void => {
            console.log(error.message);
        };
    }
}
