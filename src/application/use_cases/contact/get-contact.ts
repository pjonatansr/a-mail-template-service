import { Contact } from '@entities/contact';
import { IContact, IRepository, ContactOrError } from '@types';

const GetContact = async (
    { _id: id }: IContact,
    repository: IRepository<Contact>,
): Promise<Contact | Error> => {
    const contactOrError: ContactOrError = await repository.get(id);

    return contactOrError.value;
};

export default GetContact;
