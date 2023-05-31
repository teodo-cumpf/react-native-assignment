import { ErrorDTO } from '../api/dtoTypes/sharedDTOs';

export function formatApiError(error: any): ErrorDTO{
    return error.response.data;
}
