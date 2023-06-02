import { View } from 'react-native';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CartContext, OrderContext } from '../../../../context';

import { AppText } from '../../../../components/typography';
import { ContentWrapper } from '../../../../components/templates';
import { AppButton, IconButton } from '../../../../components/buttons';

import { star } from '../../../../utility/imageExporter';
import { calculateTotalPrice } from '../../../../utility/helperFunctions';

import { OrderData, Cart } from '../../../../types';
import { STACK_NAMES } from '../../../../navigation/types';
import { APP_BUTTON_TYPE } from '../../../../components/buttons/AppButton/types';

import styles from './PreviewPokeBowlStyles';
import { useToggle } from '../../../../hooks';

interface PreviewPokeBowlProps {
    onGoToCart: () => void;
} 

const PreviewPokeBowl = (props: PreviewPokeBowlProps) => {
    const { onGoToCart } = props;

    const { addOrderToCart } = useContext(CartContext);
    const { orderData } = useContext(OrderContext);
    

    const totalPrice = calculateTotalPrice(orderData);

    const [isFavourite, toggle] = useToggle();
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const formatCartItem = (orderData: OrderData) => {
        return {
            ...orderData,
            isFavourite,
            amount: 1,
        }
    }

    const onAddToCart = () => {
        const cartItem = formatCartItem(orderData)
        
        addOrderToCart(cartItem);
        onGoToCart();
    }
    
    const onGoToCheckout = () => {
        const cartItem = formatCartItem(orderData);
        
        addOrderToCart(cartItem);
        navigation.navigate(STACK_NAMES.CART_STACK);
        onGoToCart();
    }

    return (
        <>
            <ContentWrapper>
                <View style={styles.wrapper}>
                    <View style={styles.flex_row}>
                        <AppText isHeader>{`${orderData.bowl?.name}`}</AppText>
                        <AppText isHeader>{`$${orderData.size?.price.toFixed(2)}`}</AppText>
                    </View>

                    <AppText>{`${orderData.size?.name} size`}</AppText>
                    <AppText>{`${orderData.base?.name} base`}</AppText>
                    <AppText>{`${orderData.sauce?.name} sauce`}</AppText>
                    <AppText>Added ingredients:</AppText>
                    
                    <View style={styles.ingredient_wrapper}>
                        {orderData.ingredients?.map(ingredient => 
                            <AppText key={ingredient.id}>{ingredient.name}</AppText>    
                        )}
                    </View>

                    {orderData.extraIngredients?.map(ingredient => 
                        <View style={styles.flex_row} key={ingredient.id}>
                            <AppText>{ingredient.name}</AppText>
                            <AppText isHeader>{`$${ingredient.price.toFixed(2)}`}</AppText>
                        </View>    
                    )}

                    <View style={styles.divider}/>

                    <View style={styles.flex_row}>
                        <AppText style={styles.red_text}>Full Price</AppText>
                        <AppText isHeader style={styles.red_text}>
                            {`$${totalPrice.toFixed(2)}`}
                        </AppText>
                    </View>
                </View>
            </ContentWrapper>

            <View style={styles.buttons_wrapper}>
                <View style={styles.top_buttons_wrapper}>
                    <IconButton icon={star} onPress={toggle} isSelected={isFavourite}/>
                    <View style={styles.cart_button_wrapper}>
                        <AppButton
                            onPress={onAddToCart}
                            text='Add to Cart'
                            type={APP_BUTTON_TYPE.PRIMARY}
                        />

                    </View>
                </View>
                <AppButton
                    onPress={onGoToCheckout}
                    text='Go to checkout'
                    type={APP_BUTTON_TYPE.TERTIARY}
                />
            </View>
        </>
    );
}

export default PreviewPokeBowl;
