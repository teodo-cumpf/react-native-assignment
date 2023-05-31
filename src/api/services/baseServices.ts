import * as baseClient from '../clients/baseClient';

import { formatApiError } from '../../utility/apiErrorHandler';

import { Base } from '../../types';
import { FormatedResponse, PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getBases(currentPage: number): Promise<FormatedResponse<PaginationResponseDTO<Base[]>>> {
    try {
        const payload = { currentPage };

        const result = await baseClient.getBases(payload);

        return [result, null];
    } catch (error: any) {
        return [null, formatApiError(error)];
    }
}

export async function getBaseById(id: number): Promise<FormatedResponse<Base>> {
    try {
        const payload = { id };

        const result = await baseClient.getBaseById(payload);

        return [result, null];
    } catch (error: any) {
        return [null, formatApiError(error)];
    }
}
