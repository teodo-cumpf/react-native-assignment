import apiInstance from '../instances/apiInstance';

import { Bowl, IdType } from '../../types';
import { PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getBowls(): Promise<PaginationResponseDTO<Bowl>> {
    const response = await apiInstance.get(`/bowls`);

    return response.data;
}

export async function getBowlById(payload: IdType): Promise<Bowl> {
    const response = await apiInstance.get(`/bowls/${payload.id}`);

    return response.data;
} 
