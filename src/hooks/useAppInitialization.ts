import { useState, useContext, useEffect, useCallback } from 'react'

import { AuthenticationContext, OrderContext } from '../context';

import useInitializeFonts from './useInitializeFonts';
import { getTokenFromStorage } from '../utility/storageHelper';

import config from '../../config';

const useAppInitialization = () => {
    const { orderData, getAndStoreDataFromStorage } = useContext(OrderContext);
    const { token, setToken, storeJwtToken } = useContext(AuthenticationContext);

    const [isAppLoaded, setIsAppLoaded] = useState<boolean>(false);

    const [fontsLoaded] = useInitializeFonts();

    const handleTokenInit = useCallback(async () => {
        const tokenFromStorage = await getTokenFromStorage();

        if(tokenFromStorage) 
            return setToken(tokenFromStorage);

        storeJwtToken(config.jwt_token);
    }, [setToken, storeJwtToken]);

    useEffect(() => {
        if(!orderData.bowl)
            getAndStoreDataFromStorage();
    }, []);

    useEffect(() => {
        if(!token)
            handleTokenInit()
    }, [token, handleTokenInit]);

    useEffect(() => {
        if(token && fontsLoaded)
            setIsAppLoaded(true);
    }, [token, fontsLoaded]);

    return [isAppLoaded];
}

export default useAppInitialization;
