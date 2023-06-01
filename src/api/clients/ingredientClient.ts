import apiInstance from '../instances/apiInstance';

import { IdType, Ingredient } from '../../types';
import { PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getIngredients(): Promise<PaginationResponseDTO<Ingredient>> {
    const response = await apiInstance.get(`/ingredients`);

    return response.data;
}

export async function getIngredientById(payload: IdType): Promise<Ingredient> {
    const response = await apiInstance.get(`/ingredients/${payload.id}`);

    return response.data;
}
