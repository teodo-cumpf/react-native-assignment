import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@token';

export async function setTokenToStorage(token: string){
    return await AsyncStorage.setItem(TOKEN_KEY, token);
}

export async function getTokenFromStorage(){
    return await AsyncStorage.getItem(TOKEN_KEY);
}
