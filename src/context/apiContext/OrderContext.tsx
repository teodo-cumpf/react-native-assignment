import {
    useState,
    useContext,
    createContext,
    PropsWithChildren,
} from 'react';

import * as orderService from '../../api/services/userOrderServices';

import { ErrorContext } from '../appContext/ErrorContext';

import { setOrderDataToStorage } from '../../utility/storageHelper';
import { formatCartForPurchase } from '../../utility/helperFunctions';

import { Cart, OrderData, OrderInputType } from '../../types';

interface OrderContextState {
    orderData: OrderData;
    
    purchaseAnOrder: (cartItems: Cart[]) => void;
    updateOrderData: (order: OrderData) => void;
    updateOrderDataByField: (fieldName: keyof OrderData, data: OrderInputType) => void; 
}

const initalOrderDataState: OrderData = {
    bowl: undefined,
    size: undefined,
    base: undefined,
    sauce: undefined,
    ingredients: [],
    extraIngredients: [],
}

const OrderContext = createContext<OrderContextState>({} as OrderContextState);

const OrderContextProvider = (props: PropsWithChildren) => {
    const { handleError } = useContext(ErrorContext);

    const [orderData, setOrderData] = useState<OrderData>(initalOrderDataState);

    const updateOrderDataByField = (fieldName: keyof OrderData, data: OrderInputType) => {
        setOrderData(prevState => {
            const updatedState = {
                ...prevState,
                [fieldName]: data
            }

            setOrderDataToStorage(updatedState);

            return updatedState;
        });
    }

    const updateOrderData = (data: OrderData) => {
        setOrderData(prevState => {
            const updatedState = {
                ...prevState,
                ...data
            }

            setOrderDataToStorage(updatedState);

            return updatedState;
        });
    }

    const purchaseAnOrder = async (items: Cart[]) => {
        const dataForOrder = formatCartForPurchase(items);

        const [data, error] = await orderService.create_order(dataForOrder);

        if(data) return data;

        handleError(error);
    }

    const providerValue = {
        orderData,
        purchaseAnOrder,
        updateOrderData,
        updateOrderDataByField,
    } 

    return (
        <OrderContext.Provider value={providerValue}>
            {props.children}
        </OrderContext.Provider>
    );
}

export {OrderContext, OrderContextProvider};
