import {
    useState,
    useContext,
    useCallback,
    createContext,
    PropsWithChildren,
} from 'react';

import * as bowlService from '../../api/services/bowlServices';

import { ErrorContext } from '../appContext/ErrorContext';

import { Bowl } from '../../types';

interface BowlContextState {
    bowls: Bowl[];
    getBowls: () => Promise<void>;
}

const BowlContext = createContext<BowlContextState>({} as BowlContextState);

const BowlContextProvider = (props: PropsWithChildren) => {
    const { handleError } = useContext(ErrorContext);

    const [bowls, setBowls] = useState<Bowl[]>([]);

    const getBowls = useCallback(async () => {
        const [result, error] = await bowlService.getBowls();
        
        if (result)
            return setBowls(result);

        handleError(error);
    }, [handleError]);

    const providerValue = {
        bowls,
        getBowls
    }

    return (
        <BowlContext.Provider value={providerValue}>
            {props.children}
        </BowlContext.Provider>
    );
}

export { BowlContext, BowlContextProvider };
