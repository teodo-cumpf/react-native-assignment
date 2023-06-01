import * as baseClient from '../clients/baseClient';

import { formatApiError } from '../../utility/apiErrorHandler';

import { Base } from '../../types';
import { FormatedResponse } from '../dtoTypes/sharedDTOs';

export async function getBases(): Promise<FormatedResponse<Base[]>> {
    try {
        const result = await baseClient.getBases();

        return [result.data, null];
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
