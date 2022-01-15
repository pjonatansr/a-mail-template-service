import { DatabaseError } from 'src/common/errors/databaseError';
import { Either, IRepository } from 'src/common/types';
import { Template } from 'src/entities/template/template';
import { isLeft } from 'src/shared/either';

const ListTemplates = async (
    { list }: IRepository,
): Promise<Either<DatabaseError, Template[]>> => {
    const templateOrError : Either<DatabaseError, Template[]> = await list();

    if (isLeft(templateOrError)) {
        return templateOrError;
    }

    return templateOrError;
};

export default ListTemplates;
