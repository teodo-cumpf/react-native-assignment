import { OrderData } from "./UserOrderTypes";

export interface Cart extends OrderData {
    amount: number;
    isFavourite: boolean;
}
