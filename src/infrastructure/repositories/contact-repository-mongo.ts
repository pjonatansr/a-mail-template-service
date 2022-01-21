import { Contact } from '@entities/contact';
import ContactRepository from '@entities/contact-repository';
import MongooseContact from '@schema/contact';
import { IContact, ContactOrError } from '@types';

import { Right } from '@shared/either';

export class ContactRepositoryMongo extends ContactRepository {
    async persist(contact: Contact): Promise<ContactOrError> {
        try {
            const mongooseContact = new MongooseContact({
                ...contact,
            });

            const result = { contact: null };
            await mongooseContact
                .save()
                .then((contactData: unknown): void => {
                    result.contact = contactData;
                });

            return Right<Contact>(result.contact);
        } catch (e) {
            this.logger.logError(e);
            return this.getError({
                method: 'persist',
                target: contact,
            });
        }
    }

    async get(_id: string): Promise<ContactOrError> {
        try {
            const mongooseContact: IContact = await MongooseContact.findById(
                _id,
            );

            const contactOrError: ContactOrError = Contact.create(mongooseContact);

            return contactOrError;
        } catch (e) {
            this.logger.logError(e);
            return this.getError({
                method: 'persist',
                target: _id,
            });
        }
    }

    async list(): Promise<ContactOrError[]> {
        try {
            const contacts = await MongooseContact.find();
            const contactsOrErrors: ContactOrError[] = (
                contacts
            ).map((contact: IContact) => Contact.create(contact));

            return contactsOrErrors;
        } catch (e) {
            this.logger.logError(e);
            return this.getError({
                method: 'persist',
            });
        }
    }
}

export default ContactRepositoryMongo;
