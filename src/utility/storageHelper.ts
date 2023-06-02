import AsyncStorage from '@react-native-async-storage/async-storage';

import { OrderData, Cart } from '../types';

const CART_KEY = '@cart';
const TOKEN_KEY = '@token';
const ORDER_KEY = '@orderData';

export async function setTokenToStorage(token: string){
    return await AsyncStorage.setItem(TOKEN_KEY, token);
}

export async function getTokenFromStorage(){
    return await AsyncStorage.getItem(TOKEN_KEY);
}

export async function removeTokenFromStorage(){
    return await AsyncStorage.removeItem(TOKEN_KEY);
}

export async function setOrderToCart(orders: Cart[]){
    return await AsyncStorage.setItem(CART_KEY, JSON.stringify(orders));
}

export async function getOrdersFromCart(): Promise<Cart[]> {
    const storageItems = await AsyncStorage.getItem(CART_KEY);

    if(storageItems)
        return JSON.parse(storageItems);
    
    return [];
}

export async function removeOrdersFromCart(){
    return await AsyncStorage.removeItem(CART_KEY)
}

export async function setOrderDataToStorage(data: OrderData){
    return AsyncStorage.setItem(ORDER_KEY, JSON.stringify(data));
}
