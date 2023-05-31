import axios from 'axios';
import config from '../config';

import { getTokenFromStorage } from '../../utility/storageHelper';

const apiInstance = axios.create({baseURL: config.base_api_url});

apiInstance.interceptors.request.use(async config => {
    const token = await getTokenFromStorage();

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default apiInstance;
