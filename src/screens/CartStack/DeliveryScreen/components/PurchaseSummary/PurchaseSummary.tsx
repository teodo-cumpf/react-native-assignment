import { View } from 'react-native';
import { useContext } from 'react';

import { CartContext } from '../../../../../context';

import ItemSummary from '../ItemSummary/ItemSummary';
import { AppText } from "../../../../../components/typography"
import { ContentWrapper } from "../../../../../components/templates"

import { calculateTotalCartPrice } from '../../../../../utility/helperFunctions';

import styles from './PurchaseSummaryStyles';

const PurchaseSummary = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <ContentWrapper>
            <View style={styles.wrapper}>
                <AppText isHeader>Order Summary</AppText>

                {cartItems.map((item, index) => <ItemSummary cartItem={item} key={index}/>)}

                <View style={styles.divider}/>
                <View style={styles.flex_row}>
                    <AppText style={styles.red_text}>Total</AppText>
                    <AppText isHeader style={styles.red_text}>
                        {`$${calculateTotalCartPrice(cartItems).toFixed(2)}`}
                    </AppText>
                </View>
            </View>
        </ContentWrapper>
    );
}

export default PurchaseSummary;
