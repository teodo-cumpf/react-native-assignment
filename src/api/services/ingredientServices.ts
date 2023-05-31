import * as ingredientClient from '../clients/ingredientClient';

import { formatApiError } from '../../utility/apiErrorHandler';

import { Ingredient } from '../../types';
import { FormatedResponse, PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getIngredients(currentPage: number): Promise<FormatedResponse<PaginationResponseDTO<Ingredient[]>>> {
    try {
        const payload = { currentPage };

        const result = await ingredientClient.getIngredients(payload);

        return [result, null];
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
