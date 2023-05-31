import apiInstance from '../instances/apiInstance';

import { Sauce, IdType } from '../../types';
import { PaginationRequestDTO, PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getSauces(payload: PaginationRequestDTO): Promise<PaginationResponseDTO<Sauce[]>> {
    const response = await apiInstance.get(`/sauces?currentPage=${payload.currentPage}`);

    return response.data;
}

export async function getSauceById(payload: IdType): Promise<Sauce> {
    const response = await apiInstance.get(`/sauces/${payload.id}`);

    return response.data;
}
