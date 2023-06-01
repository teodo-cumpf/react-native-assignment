import AsyncStorage from '@react-native-async-storage/async-storage';

import { FavouriteOrder, OrderData } from '../types';

const CART_KEY = '@cart';
const TOKEN_KEY = '@token';
const ORDER_DATA = '@orderData';
const FAVOURITES_KEY = '@favourites';

export async function setTokenToStorage(token: string){
    return await AsyncStorage.setItem(TOKEN_KEY, token);
}

export async function getTokenFromStorage(){
    return await AsyncStorage.getItem(TOKEN_KEY);
}

export async function removeTokenFromStorage(){
    return await AsyncStorage.removeItem(TOKEN_KEY);
}

export async function setFavouritesToStorage(favourites: FavouriteOrder[]){
    return await AsyncStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
}

export async function setOrderToCart(orders: OrderData[]){
    return await AsyncStorage.setItem(CART_KEY, JSON.stringify(orders));
}

export async function setOrderDataToStorage(data: OrderData){
    return AsyncStorage.setItem(ORDER_DATA, JSON.stringify(data));
}
