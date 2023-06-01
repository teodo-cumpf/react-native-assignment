import * as extraIngredientsClient from '../clients/extraIngredientClient';

import { formatApiError } from '../../utility/apiErrorHandler';

import { ExtraIngredient } from '../../types';
import { FormatedResponse } from '../dtoTypes/sharedDTOs';

export async function getExtraIngredients(): Promise<FormatedResponse<ExtraIngredient[]>> {
    try {
        const result = await extraIngredientsClient.getExtraIngredients();

        return [result.data, null];
    } catch (error: any) {
        return [null, formatApiError(error)];
    }
}

export async function getExtraIngredientById(id: number): Promise<FormatedResponse<ExtraIngredient>> {
    try {
        const payload = { id };

        const result = await extraIngredientsClient.getExtraIngredientById(payload);

        return [result, null];
    } catch (error: any) {
        return [null, formatApiError(error)];
    }
}
