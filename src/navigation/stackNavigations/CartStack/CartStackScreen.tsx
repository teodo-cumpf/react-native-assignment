import { createStackNavigator } from '@react-navigation/stack';

import { CartScreen } from '../../../screens';

import { SCREEN_NAMES, SCREEN_OPTIONS } from '../../constants';

const CartStackScreen = () => {
    const CartStack = createStackNavigator();

    return (
        <CartStack.Navigator screenOptions={SCREEN_OPTIONS}>
            <CartStack.Screen
                name={SCREEN_NAMES.CART_STACK.CART}
                component={CartScreen}
            />
        </CartStack.Navigator>
    );
}

export default CartStackScreen;
