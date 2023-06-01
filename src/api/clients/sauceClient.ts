import apiInstance from '../instances/apiInstance';

import { Sauce, IdType } from '../../types';
import { PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getSauces(): Promise<PaginationResponseDTO<Sauce>> {
    const response = await apiInstance.get(`/sauces`);

    return response.data;
}

export async function getSauceById(payload: IdType): Promise<Sauce> {
    const response = await apiInstance.get(`/sauces/${payload.id}`);

    return response.data;
}
