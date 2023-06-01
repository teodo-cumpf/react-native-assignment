import * as ingredientClient from '../clients/ingredientClient';

import { formatApiError } from '../../utility/apiErrorHandler';

import { Ingredient } from '../../types';
import { FormatedResponse } from '../dtoTypes/sharedDTOs';

export async function getIngredients(): Promise<FormatedResponse<Ingredient[]>> {
    try {
        const result = await ingredientClient.getIngredients();

        return [result.data, null];
    } catch (error: any) {
        return [null, formatApiError(error)];
    }
}

export async function getIngredientById(id: number): Promise<FormatedResponse<Ingredient>> {
    try {
        const payload = { id };

        const result = await ingredientClient.getIngredientById(payload);

        return [result, null];
    } catch (error: any) {
        return [null, formatApiError(error)];
    }
}
