import {
    useState,
    useContext,
    useCallback,
    createContext,
    PropsWithChildren,
} from 'react';

import * as baseService from '../../api/services/baseServices';

import { ErrorContext } from '../appContext/ErrorContext';

import { Base } from '../../types';

interface BaseContexState {
    bases: Base[];
    getBases: () => Promise<void>;
}

const BaseContext = createContext<BaseContexState>({} as BaseContexState);

const BaseContextProvider = (props: PropsWithChildren) => {
    const { handleError } = useContext(ErrorContext);

    const [bases, setBases] = useState<Base[]>([]);

    const getBases = useCallback(async () => {
        const [result, error] = await baseService.getBases();

        if (result)
            return setBases(result);

        handleError(error);
    }, [handleError]);

    const providerValue = {
        bases,
        getBases
    }

    return (
        <BaseContext.Provider value={providerValue}>
            {props.children}
        </BaseContext.Provider>
    );
}

export { BaseContext, BaseContextProvider };
