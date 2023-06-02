import { ScrollView } from 'react-native';
import { useContext, useEffect } from 'react';

import { CartContext } from '../../context';

import { AppText } from '../../components/typography';
import { ScreenWrapper } from '../../components/templates';

import styles from './FavouriteScreenStyles';
import { FavouriteItem } from './components';

const FavouriteScreen = () => {
    const { cartItems, getAndStoreCartItems } = useContext(CartContext);

    useEffect(() => {
        if(!cartItems.length)
            getAndStoreCartItems()
    }, []);

    return (
        <ScreenWrapper>
            <ScrollView contentContainerStyle={styles.list_wrapper}>
                <AppText isHeader>Favourites</AppText>
                {cartItems.map((item, index) => {
                    if(item.isFavourite){
                        return (
                            <FavouriteItem item={item} key={index}/>
                        );
                    }

                    return null;
                })}
            </ScrollView>
        </ScreenWrapper>
    );
}

export default FavouriteScreen;
