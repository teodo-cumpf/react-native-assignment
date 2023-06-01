import {
    useState,
    useContext,
    useCallback,
    createContext,
    PropsWithChildren,
} from 'react';

import * as extraIngredientService from '../../api/services/extraIngredientServices';

import { ErrorContext } from '../appContext/ErrorContext';

import { ExtraIngredient } from '../../types';

interface ExtraIngredientContextState {
    extraIngredients: ExtraIngredient[];
    getExtraIngredients: () => Promise<void>;
}

const ExtraIngredientContext = createContext<ExtraIngredientContextState>({} as ExtraIngredientContextState);

const ExtraIngredientContextProvider = (props: PropsWithChildren) => {
    const { handleError } = useContext(ErrorContext);

    const [extraIngredients, setExtraIngredients] = useState<ExtraIngredient[]>([]);

    const getExtraIngredients = useCallback(async () => {
        const [result, error] = await extraIngredientService.getExtraIngredients();

        if (result)
            return setExtraIngredients(result);

        handleError(error);
    }, [handleError]);

    const providerValue = {
        extraIngredients,
        getExtraIngredients
    }

    return (
        <ExtraIngredientContext.Provider value={providerValue}>
            {props.children}
        </ExtraIngredientContext.Provider>
    );
}

export { ExtraIngredientContext, ExtraIngredientContextProvider };
