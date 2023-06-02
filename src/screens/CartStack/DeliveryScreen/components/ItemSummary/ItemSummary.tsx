import { View } from 'react-native';

import { Cart } from '../../../../../types';
import { AppText } from '../../../../../components/typography';

import styles from './ItemSummaryStyles';

interface ItemSummaryProps {
    cartItem: Cart;
}

const ItemSummary = (props: ItemSummaryProps) => {
    const { cartItem } = props;

    const calculatePriceWithAmount = () => {
        let totalAmount = 0;
        
        if(cartItem.size?.price)
            totalAmount = cartItem.amount * cartItem.size.price;

        return totalAmount.toFixed(2)
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.flex_row}>
                <AppText>{cartItem.bowl?.name}</AppText>
                <AppText>{`x${cartItem.amount}`}</AppText>
                <AppText>{`$${calculatePriceWithAmount()}`}</AppText>
            </View>
            <View style={styles.ingredients}>
                <AppText>With: </AppText>
                {cartItem.extraIngredients?.map(ingredient => 
                    <View key={ingredient.id} style={styles.flex_row}>
                        <AppText>{ingredient.name}</AppText>
                        <AppText>{`$${ingredient.price}`}</AppText>
                    </View>    
                )}
            </View>
        </View>
    );
}

export default ItemSummary;
