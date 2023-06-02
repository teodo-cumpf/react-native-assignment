import { ScrollView } from 'react-native';
import { useContext, useEffect } from 'react';

import { CartContext } from '../../context';

import { CartItem, TotalElement } from './components';
import { AppText } from '../../components/typography';
import { ScreenWrapper } from '../../components/templates';

import styles from './CartScreenStyles';

const CartScreen = () => {
    const { cartItems, getAndStoreCartItems } = useContext(CartContext);

    useEffect(() => {
        if(!cartItems.length)
            getAndStoreCartItems();
    }, []);

    return (
        <ScreenWrapper>
            <ScrollView contentContainerStyle={styles.list_wrapper}>
                <AppText isHeader>Cart</AppText>
                {cartItems.map((item, index) => 
                    <CartItem 
                        key={index}
                        order={item}
                        index={index}
                    />
                )}

                <TotalElement/>
            </ScrollView>
        </ScreenWrapper>
    );
}

export default CartScreen;
