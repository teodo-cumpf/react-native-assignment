import { View } from 'react-native';
import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { OrderContext } from '../../../../context';

import { AppText } from '../../../../components/typography';
import { ContentWrapper } from '../../../../components/templates';
import { AppButton, IconButton } from '../../../../components/buttons';

import { star } from '../../../../utility/imageExporter';
import useGetSingleOrderTotalPrice from '../../../../hooks/useGetTotalPrice';

import { STACK_NAMES } from '../../../../navigation/types';
import { APP_BUTTON_TYPE } from '../../../../components/buttons/AppButton/types';

import styles from './PreviewPokeBowlStyles';

interface PreviewPokeBowlProps {
    onGoToCart: () => void;
} 

const PreviewPokeBowl = (props: PreviewPokeBowlProps) => {
    const { onGoToCart } = props;

    const { orderData, addOrderToFavourites, addOrderToCart } = useContext(OrderContext);
    
    const [isFavourited, setIsFavourited] = useState(false); 

    const [totalPrice] = useGetSingleOrderTotalPrice();
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const favouriteOrder = () => {
        if(!isFavourited){
            setIsFavourited(true);
            addOrderToFavourites(orderData, totalPrice);
        }
    }

    const onAddToCart = () => {
        addOrderToCart(orderData);
        onGoToCart();
    }
    
    const onGoToCheckout = () => {
        addOrderToCart(orderData);
        navigation.navigate(STACK_NAMES.CART_STACK);
    }

    return (
        <>
            <ContentWrapper>
                <View style={styles.wrapper}>
                    <View style={styles.flex_row}>
                        <AppText style={styles.big_text}>{`${orderData.bowl?.name} poke bowl`}</AppText>
                        <AppText style={styles.big_text}>{`$${orderData.size?.price.toFixed(2)}`}</AppText>
                    </View>

                    <AppText style={styles.text}>{`${orderData.size?.name} size`}</AppText>
                    <AppText style={styles.text}>{`${orderData.base?.name} base`}</AppText>
                    <AppText style={styles.text}>{`${orderData.sauce?.name} sauce`}</AppText>
                    <AppText style={styles.text}>Added ingredients:</AppText>
                    
                    <View style={styles.ingredient_wrapper}>
                        {orderData.ingredients?.map(ingredient => 
                            <AppText style={styles.text}>{ingredient.name}</AppText>    
                        )}
                    </View>

                    {orderData.extraIngredients?.map(ingredient => 
                        <View style={styles.flex_row}>
                            <AppText style={styles.text}>{ingredient.name}</AppText>
                            <AppText style={styles.big_text}>{`$${ingredient.price.toFixed(2)}`}</AppText>
                        </View>    
                    )}

                    <View style={styles.divider}/>

                    <View style={styles.flex_row}>
                        <AppText style={[styles.text, styles.red_text]}>Full Price</AppText>
                        <AppText style={[styles.big_text, styles.red_text]}>
                            {`$${totalPrice.toFixed(2)}`}
                        </AppText>
                    </View>
                </View>
            </ContentWrapper>

            <View style={styles.buttons_wrapper}>
                <View style={styles.top_buttons_wrapper}>
                    <IconButton icon={star} onPress={favouriteOrder} isSelected={isFavourited}/>
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
