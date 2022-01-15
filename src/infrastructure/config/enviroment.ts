import { IEnviroment } from 'src/common/types/types';

import * as constants from './constants';

const getEnvironment = ((): IEnviroment => {
    const environment: IEnviroment = {
        database: {
            dialect: process.env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.MONGO,
            url: process.env.DATABASE_URI || '',
        },
    };

    return environment;
})();

export { getEnvironment as environment };
