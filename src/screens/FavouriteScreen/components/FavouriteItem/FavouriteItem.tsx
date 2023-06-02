import { useContext } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CartContext, OrderContext } from '../../../../context';

import { OrderSummary } from '../../../../components/materials';
import { ContentWrapper } from '../../../../components/templates'
import { AppButton, IconButton } from '../../../../components/buttons';

import { star } from '../../../../utility/imageExporter';

import { Cart } from '../../../../types';
import { APP_BUTTON_TYPE } from '../../../../components/buttons/AppButton/types';
import { STACK_NAMES } from '../../../../navigation/types';

import styles from './FavouriteItemStyles';

interface FavouriteScreenProps {
    item: Cart;
}

const FavouriteScreen = (props: FavouriteScreenProps) => {
    const { item } = props;

    const { updateOrderData } = useContext(OrderContext);
    const { addOrderToCart } = useContext(CartContext)

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const onEdit = () => {
        updateOrderData(item);
        navigation.navigate(STACK_NAMES.HOME_STACK);
    }
    
    return (
        <ContentWrapper>
            <View style={styles.wrapper}>
                <OrderSummary order={item}/>
                <AppButton
                    type={APP_BUTTON_TYPE.TERTIARY}
                    text='Edit'
                    onPress={onEdit}
                />
                <View style={styles.button_row}>
                    <IconButton 
                        icon={star}
                        isSelected={item.isFavourite}
                        onPress={() => {}}
                    />
                    <View style={styles.button_wrapper}>
                        <AppButton
                            text="Add to Cart"
                            onPress={() => addOrderToCart(item)}
                        />
                    </View>
                </View>
            </View>
        </ContentWrapper>
    );
}

export default FavouriteScreen;
