import { Contact } from '@entities/contact';
import { IRepository, ContactOrError } from '@types';

const ListContacts = async (
    repository: IRepository,
): Promise<Contact[] | Error> => {
    const contactOrError: ContactOrError = await repository.list();

    return contactOrError.value;
};

export default ListContacts;
