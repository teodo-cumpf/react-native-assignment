import { useContext } from 'react';
import { View } from 'react-native';

import { CartContext } from '../../context';

import NavigationIcon from './NavigationIcon';
import { AppText } from '../../components/typography';

import { STACK_NAMES } from '../types';

import styles from './BottomNavigationStyles';

interface NavigationIconProps {
    isFocused: boolean;
}

const CartIcon = (props: NavigationIconProps) => {
    const { isFocused } = props;

    const { cartItems } = useContext(CartContext);

    const numberOfItems = cartItems.length;
    const shouldDisplayAmount = cartItems.length > 0;

    const formatBoxColor = () => {
        if (isFocused) return [styles.amount_box, styles.active];

        return styles.amount_box;
    }

    return (
        <View>
            {shouldDisplayAmount &&
                <View style={formatBoxColor()}>
                    <AppText style={styles.amount_text}>{numberOfItems}</AppText>
                </View>
            }
            <NavigationIcon isFocused={isFocused} screen={STACK_NAMES.CART_STACK} />
        </View>
    );
}

export default CartIcon;
