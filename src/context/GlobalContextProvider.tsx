import { PropsWithChildren } from 'react';

import { BowlContextProvider } from './apiContext/BowlContext';
import { SizeContextProvider } from './apiContext/SizeContext';
import { BaseContextProvider } from './apiContext/BaseContext';
import { ErrorContextProvider } from './appContext/ErrorContext';
import { SauceContextProvider } from './apiContext/SauceContext';
import { OrderContextProvider } from './apiContext/OrderContext';
import { IngredientContextProvider } from './apiContext/IngredientContext';
import { AuthenticationContextProvider } from './appContext/AuthenticationContex';
import { ExtraIngredientContextProvider } from './apiContext/ExtraIngredientContext';

const GlobalContextProvider = (props: PropsWithChildren) => {
    return (
        <ErrorContextProvider>
            <AuthenticationContextProvider>
                <BowlContextProvider>
                    <SizeContextProvider>
                        <BaseContextProvider>
                            <SauceContextProvider>
                                <IngredientContextProvider>
                                    <ExtraIngredientContextProvider>
                                        <OrderContextProvider>
                                            {props.children}
                                        </OrderContextProvider>
                                    </ExtraIngredientContextProvider>
                                </IngredientContextProvider>
                            </SauceContextProvider>
                        </BaseContextProvider>
                    </SizeContextProvider>
                </BowlContextProvider>
            </AuthenticationContextProvider>
        </ErrorContextProvider>
    );
}

export default GlobalContextProvider;
