import { ITemplate } from 'src/common/types';
import { Template } from 'src/entities/template/template';

const createTemplate = async (request: any): Promise<Template> => {
    const { ...templateData } :ITemplate = request.params;
    throw new Error('Method not implemented');
};

const getTemplate = async (request: unknown): Promise<Template> => {
    throw new Error('Method not implemented');
};

const listTemplate = async (request: unknown): Promise<Template[]> => {
    throw new Error('Method not implemented');
};
