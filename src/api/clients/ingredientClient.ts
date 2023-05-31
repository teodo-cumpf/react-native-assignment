import apiInstance from '../instances/apiInstance';

import { IdType, Ingredient } from '../../types';
import { PaginationRequestDTO, PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getIngredients(payload: PaginationRequestDTO): Promise<PaginationResponseDTO<Ingredient[]>> {
    const response = await apiInstance.get(`/ingredients?currentPage=${payload.currentPage}`);

    return response.data;
}

export async function getIngredientById(payload: IdType): Promise<Ingredient> {
    const response = await apiInstance.get(`/ingredients/${payload.id}`);

    return response.data;
}
