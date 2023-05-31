import { PropsWithChildren, createContext, useCallback } from 'react';

import { ErrorDTO } from '../../api/dtoTypes/sharedDTOs';

interface ErrorContextState {
    handleError: (error: ErrorDTO | null) => void;
}

const ErrorContext = createContext<ErrorContextState>({} as ErrorContextState);

const ErrorContextProvider = (props: PropsWithChildren) => {
    const handleError = useCallback((error: ErrorDTO | null) => {
        if(error) console.warn(error.message);
    }, []);

    const providerValue = {
        handleError
    }

    return (
        <ErrorContext.Provider value={providerValue}>
            {props.children}
        </ErrorContext.Provider>
    );
}

export { ErrorContext, ErrorContextProvider };
