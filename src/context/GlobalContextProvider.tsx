import { PropsWithChildren } from 'react';

import { ErrorContextProvider } from './appContext/ErrorContext';
import { AuthenticationContextProvider } from './appContext/AuthenticationContex';

const GlobalContextProvider = (props: PropsWithChildren) => {
    return (
        <ErrorContextProvider>
            <AuthenticationContextProvider>
                {props.children}
            </AuthenticationContextProvider>
        </ErrorContextProvider>
    );
}

export default GlobalContextProvider;
