import { Contact } from '@entities/contact';
import { IContact, IRepository, ContactOrError } from '@types';

const GetContact = async (
    { id }: IContact,
    repository: IRepository,
): Promise<Contact | Error> => {
    const contactOrError: ContactOrError = await repository.get(id);

    return contactOrError.value;
};

export default GetContact;
