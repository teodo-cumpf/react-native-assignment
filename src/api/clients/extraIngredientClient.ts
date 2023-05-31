import apiInstance from '../instances/apiInstance';

import { ExtraIngredient, IdType } from '../../types';
import { PaginationRequestDTO, PaginationResponseDTO } from '../dtoTypes/sharedDTOs';

export async function getExtraIngredients(payload: PaginationRequestDTO): Promise<PaginationResponseDTO<ExtraIngredient[]>> {
    const response = await apiInstance.get(`/extra_ingredients?currentPage=${payload.currentPage}`);

    return response.data;
}

export async function getExtraIngredientById(payload: IdType): Promise<ExtraIngredient> {
    const response = await apiInstance.get(`/extra_ingredients/${payload.id}`);

    return response.data;
}
