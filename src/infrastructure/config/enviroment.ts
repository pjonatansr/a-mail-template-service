import { IEnviroment } from 'src/common/types';

import * as constants from './constants';

const getEnvironment = ((): IEnviroment => {
    const environment: IEnviroment = {
        database: {
            dialect: process.env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.MONGO,
            url: process.env.DATABASE_URI || '',
        },
    };

    if (process.env.NODE_ENV === 'test') {
        environment.database.driver = constants.SUPPORTED_DATABASE.IN_MEMORY;
    }

    return environment;
})();

export { getEnvironment as environment };
