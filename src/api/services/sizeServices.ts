import * as sizeClient from '../clients/sizeClient';

import { formatApiError } from '../../utility/apiErrorHandler';

import { Size } from '../../types';
import { FormatedResponse, PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getSizes(currentPage: number): Promise<FormatedResponse<PaginationResponseDTO<Size[]>>> {
    try {
        const payload = { currentPage };

        const result = await sizeClient.getSizes(payload);

        return [result, null];
    } catch (error: any) {
        return [null, formatApiError(error)];
    }
}

export async function getSizeById(id: number): Promise<FormatedResponse<Size>> {
    try {
        const payload = { id };

        const result = await sizeClient.getSizeById(payload);

        return [result, null];
    } catch (error: any) {
        return [null, formatApiError(error)];
    }
}
