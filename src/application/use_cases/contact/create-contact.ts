import { Contact } from '@entities/contact';
import { IContact, IRepository, ContactOrError } from '@types';

import { isLeft } from '@shared/either';

const CreateContact = async (
    contactData: IContact,
    repository: IRepository,
): Promise<Contact | Error> => {
    const contactOrError: ContactOrError = Contact.create(contactData);

    if (isLeft(contactOrError)) {
        return contactOrError.value;
    }

    const contact: Contact | Error = await repository.persist(
        contactOrError.value,
    );

    return contact;
};

export default CreateContact;
