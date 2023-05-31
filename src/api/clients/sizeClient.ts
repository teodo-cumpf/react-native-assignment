import apiInstance from '../instances/apiInstance';

import { Size, IdType } from '../../types';
import { PaginationRequestDTO, PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getSizes(payload: PaginationRequestDTO): Promise<PaginationResponseDTO<Size[]>> {
    const response = await apiInstance.get(`/sizes?currentPage=${payload.currentPage}`);

    return response.data;
}

export async function getSizeById(payload: IdType): Promise<Size> {
    const response = await apiInstance.get(`/sizes/${payload.id}`);

    return response.data;
}
