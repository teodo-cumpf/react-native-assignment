import {
    useState,
    useContext,
    useCallback,
    createContext,
    PropsWithChildren,
} from 'react';

import * as ingredientService from '../../api/services/ingredientServices';

import { ErrorContext } from '../appContext/ErrorContext';

import { Ingredient } from '../../types';

interface IngredientContextState {
    ingredients: Ingredient[];
    getIngredients: () => Promise<void>;
}

const IngredientContext = createContext<IngredientContextState>({} as IngredientContextState);

const IngredientContextProvider = (props: PropsWithChildren) => {
    const { handleError } = useContext(ErrorContext);

    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    const getIngredients = useCallback(async () => {
        const [result, error] = await ingredientService.getIngredients();

        if (result)
            return setIngredients(result);

        handleError(error);
    }, [handleError]);

    const providerValue = {
        ingredients,
        getIngredients
    }

    return (
        <IngredientContext.Provider value={providerValue}>
            {props.children}
        </IngredientContext.Provider>
    );
}

export { IngredientContext, IngredientContextProvider };
