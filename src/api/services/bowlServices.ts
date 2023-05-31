import * as bowlClient from '../clients/bowlClient';

import { formatApiError } from '../../utility/apiErrorHandler';

import { Bowl } from '../../types';
import { FormatedResponse } from '../dtoTypes/sharedDTOs';

export async function getBowls(): Promise<FormatedResponse<Bowl[]>> {
    try {
        const result = await bowlClient.getBowls();

        return [result.data, null];
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
