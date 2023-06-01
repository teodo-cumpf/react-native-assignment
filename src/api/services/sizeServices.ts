import * as sizeClient from '../clients/sizeClient';

import { formatApiError } from '../../utility/apiErrorHandler';

import { Size } from '../../types';
import { FormatedResponse } from '../dtoTypes/sharedDTOs';

export async function getSizes(): Promise<FormatedResponse<Size[]>> {
    try {
        const result = await sizeClient.getSizes();

        return [result.data, null];
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
