import * as userOrderClient from '../clients/userOrderClient';

import { formatApiError } from '../../utility/apiErrorHandler';

import { UserOrder } from '../../types';
import { FormatedResponse, MessageDTO } from '../dtoTypes/sharedDTOs';

export async function create_order(data: UserOrder[]): Promise<FormatedResponse<MessageDTO>> {
    try {
        const result = await userOrderClient.createOrder(data);

        return [result, null]
    } catch (error: any) {
        return [null, formatApiError(error)];
    }
}
