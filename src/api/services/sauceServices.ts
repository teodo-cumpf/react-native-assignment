import * as sauceClient from '../clients/sauceClient';

import { formatApiError } from '../../utility/apiErrorHandler';

import { Sauce } from '../../types';
import { FormatedResponse } from '../dtoTypes/sharedDTOs';

export async function getSauces(): Promise<FormatedResponse<Sauce[]>> {
    try {
        const result = await sauceClient.getSauces();
        
        return [result.data, null];
    } catch (error: any) {
        return [null, formatApiError(error)];
    }
}

export async function getSauceById(id: number): Promise<FormatedResponse<Sauce>> {
    try {
        const payload = { id };

        const result = await sauceClient.getSauceById(payload);

        return [result, null];
    } catch (error: any) {
        return [null, formatApiError(error)];
    }
}
