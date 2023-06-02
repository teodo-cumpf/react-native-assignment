import { useContext } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CartContext } from '../../../../context';

import { AppButton } from '../../../../components/buttons';
import { AppText } from '../../../../components/typography';
import { ContentWrapper } from '../../../../components/templates';

import { STACK_NAMES } from '../../../../navigation/types';
import { SCREEN_NAMES } from '../../../../navigation/constants';
import { calculateTotalCartPrice } from '../../../../utility/helperFunctions';

import { APP_BUTTON_TYPE } from '../../../../components/buttons/AppButton/types';

import styles from './TotalElementStyles';

const TotalElement = () => {
    const { cartItems } = useContext(CartContext);

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <ContentWrapper>
            <View style={styles.wrapper}>
                <View style={styles.flex_row}>
                    <AppText>Subtotal</AppText>
                    <AppText isHeader>{`$${calculateTotalCartPrice(cartItems).toFixed(2)}`}</AppText>
                </View>
                <View style={styles.flex_row}>
                    <AppText>Delivery fee</AppText>
                    <AppText isHeader>$0</AppText>
                </View>
                <View style={styles.flex_row}>
                    <AppText isHeader>Total</AppText>
                    <AppText isHeader style={styles.red_text}>{`$${calculateTotalCartPrice(cartItems).toFixed(2)}`}</AppText>
                </View>
                
                <AppButton
                    text='Order More'
                    type={APP_BUTTON_TYPE.TERTIARY}
                    onPress={() => navigation.navigate(STACK_NAMES.HOME_STACK)}
                />
                <AppButton
                    text='Proceed to Checkout'
                    type={APP_BUTTON_TYPE.SECONDARY}
                    onPress={() => navigation.navigate(SCREEN_NAMES.CART_STACK.DELIVERY)}
                />
            </View>
        </ContentWrapper>
    );
}

export default TotalElement;
