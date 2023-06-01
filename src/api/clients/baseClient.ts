import apiInstance from '../instances/apiInstance';

import { Base, IdType } from '../../types';
import { PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getBases(): Promise<PaginationResponseDTO<Base>> {
    const response = await apiInstance.get(`/bases`);

    return response.data;
}

export async function getBaseById(payload: IdType): Promise<Base> {
    const response = await apiInstance.get(`/bases/${payload.id}`);

    return response.data;
}
