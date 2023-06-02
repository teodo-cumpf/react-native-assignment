import { View } from 'react-native';

import { Cart } from '../../../types';
import { AppText } from '../../typography';

import {
    calculateTotalPrice,
    formatArrayInCommaSeparatedString,
} from '../../../utility/helperFunctions';

import styles from './OrderSummaryStyles';

interface OrderSummaryProps {
    order: Cart;
}

const OrderSummary = (props: OrderSummaryProps) => {
    const { order } = props;

    const formatIngredientsString = () => {
        const arrayOfIngredients = order.ingredients?.map(ingredient => ingredient.name);

        if(arrayOfIngredients)
            return formatArrayInCommaSeparatedString(arrayOfIngredients);
    }

    return (
        <View>
            <View style={styles.flex_row}>
                <AppText isHeader>{`${order.bowl?.name}`}</AppText>
                <AppText isHeader>{`$${(order.amount * calculateTotalPrice(order)).toFixed(2)}`}</AppText>
            </View>

            <View style={styles.ingredients}>
                <AppText>{`${order.size?.name} size`}</AppText>
                <AppText>{`${order.base?.name} base`}</AppText>
                <AppText>{`${order.sauce?.name} sauce`}</AppText>
                <AppText>{formatIngredientsString()}</AppText>
            
                {order.extraIngredients?.map(ingreedient => 
                    <AppText key={ingreedient.id}>{ingreedient.name}</AppText>    
                )}
            </View>

        </View>
    );
}

export default OrderSummary;
