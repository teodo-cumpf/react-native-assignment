import { 
    useState, 
    useContext, 
    useCallback, 
    createContext, 
    PropsWithChildren, 
} from 'react';

import * as sauceService from '../../api/services/sauceServices';

import { ErrorContext } from '../appContext/ErrorContext';

import { Sauce } from '../../types';

interface SauceContextState {
    sauces: Sauce[];
    getSauces: () => Promise<void>;
}

const SauceContext = createContext<SauceContextState>({} as SauceContextState);

const SauceContextProvider = (props: PropsWithChildren) => {
    const { handleError } = useContext(ErrorContext);

    const [sauces, setSauces] = useState<Sauce[]>([]);

    const getSauces = useCallback(async () => {
        const [result, error] = await sauceService.getSauces();
        
        if (result)
            return setSauces(result);

        handleError(error);
    }, [handleError]);

    const providerValue = {
        sauces,
        getSauces
    }

    return (
        <SauceContext.Provider value={providerValue}>
            {props.children}
        </SauceContext.Provider>
    );
}

export { SauceContext, SauceContextProvider };
