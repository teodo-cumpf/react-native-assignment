import { View } from 'react-native';
import { useContext, useState } from 'react';

import { CartContext } from '../../../../context';

import Counter from '../Counter/Counter';
import { IconButton } from '../../../../components/buttons';
import { OrderSummary } from '../../../../components/materials';
import { ContentWrapper } from '../../../../components/templates';

import { useToggle, useDebounce } from '../../../../hooks';
import { star, trash } from '../../../../utility/imageExporter';

import { Cart } from '../../../../types'

import styles from './CartItemStyles';

interface CartItemProps {
    index: number;
    order: Cart;
}

const CartItem = (props: CartItemProps) => {
    const { order, index } = props;

    const { removeOrderFromCart, updateOrderItem } = useContext(CartContext);

    const [amount, setAmount] = useState(order.amount);

    const [isFavourite, toggle] = useToggle();
    
    useDebounce(() => {
        const updatedData = {
            ...order,
            amount,
            isFavourite
        }

        updateOrderItem(updatedData, index);
    }, [amount, isFavourite], 400);

    return (
        <ContentWrapper>
            <OrderSummary order={order}/>
            
            <View style={styles.action_row}>
                <View style={styles.icon_buttons}>
                    <IconButton icon={star} isSelected={order.isFavourite} onPress={toggle}/>

                    <IconButton icon={trash} onPress={() => removeOrderFromCart(index)}/>
                </View>

                <Counter onCountChange={setAmount} count={amount}/>
            </View>
        </ContentWrapper>
    );
}

export default CartItem;
