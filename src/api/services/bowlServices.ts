import * as bowlClient from '../clients/bowlClient';

import { formatApiError } from '../../utility/apiErrorHandler';

import { Bowl } from '../../types';
import { FormatedResponse, PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getBowls(currentPage: number): Promise<FormatedResponse<PaginationResponseDTO<Bowl[]>>> {
    try {
        const payload = { currentPage };

        const result = await bowlClient.getBowls(payload);

        return [result, null];
    } catch (error: any) {
        return [null, formatApiError(error)];
    }
}

export async function getBowlById(id: number): Promise<FormatedResponse<Bowl>> {
    try {
        const payload = { id };

        const result = await bowlClient.getBowlById(payload);

        return [result, null];
    } catch (error: any) {
        return [null, formatApiError(error)]
    }
}
