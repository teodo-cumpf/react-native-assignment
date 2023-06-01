import { PropsWithChildren, createContext, useState } from 'react';

import {
    setOrderToCart,
    setOrderDataToStorage,
    setFavouritesToStorage,
} from '../../utility/storageHelper';
import { generateIdFromDate } from '../../utility/helperFunctions';

import { FavouriteOrder, OrderData, OrderInputType } from '../../types';

interface OrderContextState {
    orderData: OrderData;
    cartItems: OrderData[];
    favouriteOrders: FavouriteOrder[];

    addOrderToCart: (order: OrderData) => void;
    updateOrderData: (order: OrderData) => void;
    addOrderToFavourites: (order: OrderData, totalPrice: number) => void;
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
    const [cartItems, setCartItems] = useState<OrderData[]>([]);
    const [orderData, setOrderData] = useState<OrderData>(initalOrderDataState);
    const [favouriteOrders, setFavouriteOrders] = useState<FavouriteOrder[]>([]);

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

    const addOrderToFavourites = (order: OrderData, totalPrice: number) => {
        const favouriteObject: FavouriteOrder = {
            ...order,
            id: generateIdFromDate(),
            totalPrice: totalPrice.toFixed(2)
        }

        setFavouriteOrders(prevState => {
            const updatedState = [...prevState, favouriteObject];

            setFavouritesToStorage(updatedState);
            return updatedState;
        });
    }

    const addOrderToCart = (order: OrderData) => {
        setCartItems(prevState => {
            const updatedState = [...prevState, order];

            setOrderToCart(updatedState);
            return updatedState;
        })
    }

    const providerValue = {
        orderData,
        cartItems,
        favouriteOrders,
        addOrderToCart,
        updateOrderData,
        addOrderToFavourites,
        updateOrderDataByField,
    } 

    return (
        <OrderContext.Provider value={providerValue}>
            {props.children}
        </OrderContext.Provider>
    );
}

export {OrderContext, OrderContextProvider};
