import {
    useState,
    createContext,
    PropsWithChildren,
} from 'react';

import { 
    setOrderToCart,
    getOrdersFromCart,
    removeOrdersFromCart,
} from '../../utility/storageHelper';

import { Cart } from '../../types/CartTypes';

interface CartContextState {
    cartItems: Cart[];

    removeAllOrders: () => void;
    getAndStoreCartItems: () => void;
    addOrderToCart: (order: Cart) => void;
    removeOrderFromCart: (index: number) => void;
    updateOrderItem: (cart: Cart, index: number) => void;
}

const CartContext = createContext<CartContextState>({} as CartContextState);

const CartContextProvider = (props: PropsWithChildren) => {
    const [cartItems, setCartItems] = useState<Cart[]>([]);

    const getAndStoreCartItems = () => {
        getOrdersFromCart()
            .then(cartItems => setCartItems(cartItems));
    }

    const addOrderToCart = (order: Cart) => {
        setCartItems(prevState => {
            const updatedState = [...prevState, order];

            setOrderToCart(updatedState);
            return updatedState;
        });
    }

    const updateOrderItem = (cart: Cart, index: number) => {
        const cartArray = [...cartItems];

        cartArray[index] = cart;

        setCartItems(cartArray);
        setOrderToCart(cartArray);
    };

    const removeOrderFromCart = (index: number) => {
        const cartArray = [...cartItems];
        cartArray.splice(index, 1);

        setCartItems(cartArray);
        setOrderToCart(cartArray);
    }

    const removeAllOrders = () => {
        setCartItems([]);
        removeOrdersFromCart();
    }

    const providerValue = {
        cartItems,
        addOrderToCart,
        updateOrderItem,
        removeAllOrders,
        removeOrderFromCart,
        getAndStoreCartItems,
    }

    return (
        <CartContext.Provider value={providerValue}>
            {props.children}
        </CartContext.Provider>
    );
}

export { CartContext, CartContextProvider };
