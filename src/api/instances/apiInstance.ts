import axios from 'axios';
import config from '../config';

import { getTokenFromStorage } from '../../utility/storageHelper';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODUwMTIyNDksImV4cCI6MTY4NTg3NjI0OSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoidGVvZG9yYS5jdW1wZkBnbWFpbC5jb20ifQ.aRj2JHUs6w9-tBdQSZPwDxr7BPdz5tILwCQI10QZqewB6bhepKBllRml7oSQ4PdUEYODX02TgyJZV2grGBKe41ZFrLDePolujsERbZTbycas8l-Z_Nj3F8nbPAll1E7sYuyj2iUylhEqjvatA29T1w0WEIMoNn_2fM639CRK3ICwm4LkoCMo1RsLES9mU52WShcXSMYe1YMR0TWFziGQyzqzIQ-9XxQyTmstk4v5V2Me38hqR_cEUeJ2keUAXVKcpWfM2ZjYga11IEteATpalQml0UbzWmpC3hSWbPPTl85t0B1OBmNHky-ENTUyqyzOCUto1lVqM8CE8KTINz3KGw';

const apiInstance = axios.create({
    baseURL: config.base_api_url,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

apiInstance.interceptors.request.use(async config => {
    const token = await getTokenFromStorage();

    if(token){
        config.headers.Authorization = token
    }

    return config;
});

export default apiInstance;
