import {
    useState,
    useContext,
    useCallback,
    createContext,
    PropsWithChildren,
} from 'react';

import * as sizeService from '../../api/services/sizeServices';

import { ErrorContext } from '../appContext/ErrorContext';

import { Size } from '../../types';

interface SizeContextState {
    sizes: Size[];
    getSizes: () => Promise<void>;
}

const SizeContext = createContext<SizeContextState>({} as SizeContextState);

const SizeContextProvider = (props: PropsWithChildren) => {
    const { handleError } = useContext(ErrorContext);

    const [sizes, setSizes] = useState<Size[]>([]);

    const getSizes = useCallback(async () => {
        const [result, error] = await sizeService.getSizes();

        if (result)
            return setSizes(result);

        handleError(error)
    }, [handleError]);

    const providerValue = {
        sizes,
        getSizes
    }

    return (
        <SizeContext.Provider value={providerValue}>
            {props.children}
        </SizeContext.Provider>
    );
}

export { SizeContext, SizeContextProvider };
