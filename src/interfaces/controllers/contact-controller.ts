import { Contact } from '@entities/contact';
import CreateContact from '@use_cases/create-contact';
import ListContacts from '@use_cases/list-contacts';
import GetContact from 'src/application/use_cases/contact/get-contact';
import ContactRepository from 'src/infrastructure/repositories/contact-repository-mongo';

export class ContactController {
    private readonly contactRepository: ContactRepository;

    constructor(contactRepository: ContactRepository) {
        this.contactRepository = contactRepository;
    }

    async createContact({ body }): Promise<Contact | Error> {
        const contactCreated = await CreateContact({ ...body }, this.contactRepository);

        return contactCreated;
    }

    async getContact({ query }): Promise<Contact | Error> {
        const contact = await GetContact({ ...query }, this.contactRepository);

        return contact;
    }

    async listContacts(): Promise<Contact[] | Error> {
        const contacts = await ListContacts(this.contactRepository);

        return contacts;
    }
}
