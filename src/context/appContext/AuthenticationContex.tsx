import {
    useState,
    useCallback,
    createContext,
    PropsWithChildren,
} from 'react';

import { setTokenToStorage } from '../../utility/storageHelper';

interface AuthenticationContextState {
    token?: string;
    setToken: (token: string) => void;
    storeJwtToken: (token: string) => void;
}

const AuthenticationContext = createContext<AuthenticationContextState>({} as AuthenticationContextState);

const AuthenticationContextProvider = (props: PropsWithChildren) => {
    const [token, setToken] = useState<string | undefined>();

    const storeJwtToken = useCallback((token: string) => {
        setToken(token);
        setTokenToStorage(token);
    }, []);

    const providerValue = {
        token,
        setToken,
        storeJwtToken
    }

    return (
        <AuthenticationContext.Provider value={providerValue}>
            {props.children}
        </AuthenticationContext.Provider>
    );
}

export { AuthenticationContext, AuthenticationContextProvider};
