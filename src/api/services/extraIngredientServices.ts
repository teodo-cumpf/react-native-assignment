import * as extraIngredientsClient from '../clients/extraIngredientClient';

import { formatApiError } from '../../utility/apiErrorHandler';

import { ExtraIngredient } from '../../types';
import { FormatedResponse, PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getExtraIngredients(currentPage: number): Promise<FormatedResponse<PaginationResponseDTO<ExtraIngredient[]>>> {
    try {
        const payload = { currentPage };

        const result = await extraIngredientsClient.getExtraIngredients(payload);

        return [result, null]
    } catch (error: any) {
        return [null, formatApiError(error)]
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
