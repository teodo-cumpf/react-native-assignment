import apiInstance from '../instances/apiInstance';

import { Base, IdType } from '../../types';
import { PaginationRequestDTO, PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getBases(payload: PaginationRequestDTO): Promise<PaginationResponseDTO<Base[]>> {
    const response = await apiInstance.get(`/bases?currentPage=${payload.currentPage}`);

    return response.data;
}

export async function getBaseById(payload: IdType): Promise<Base> {
    const response = await apiInstance.get(`/bases/${payload.id}`);

    return response.data;
}
