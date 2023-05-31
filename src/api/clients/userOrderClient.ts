import apiInstance from '../instances/apiInstance';

import { UserOrder } from '../../types';
import { MessageDTO } from '../dtoTypes/sharedDTOs';

export async function createOrder(payload: UserOrder[]): Promise<MessageDTO> {
    const response = await apiInstance.post('/create_order', payload);

    return response.data;
}
