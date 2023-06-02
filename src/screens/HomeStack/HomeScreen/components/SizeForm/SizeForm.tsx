import { View } from 'react-native';
import { useContext, useEffect } from 'react';

import { OrderContext, SizeContext } from '../../../../../context';
import { RadioButton } from '../../../../../components/buttons';
import { AppText } from '../../../../../components/typography';

import { formatItemNameWithPrice } from '../../../../../utility/helperFunctions';

import { INGREDIENTS_LIMIT } from './constants';

import { Size, SizeType } from '../../../../../types';

import styles from './SizeFormStyles';
import ingredientStyles from '../ChooseIngredients/ChoseIngredientsStyle';

interface SizeFormProps {
    errorMessage?: string;
    selectedValueId?: number;
    onSelect: (value: Size) => void;
    setIngredientsLimit: (limit: number) => void;
    setSelectedSizeName: (name: string) => void;
}

const SizeForm = (props: SizeFormProps) => {
    const {
        onSelect,
        errorMessage,
        selectedValueId,
        setSelectedSizeName,
        setIngredientsLimit,
    } = props;
    const { orderData } = useContext(OrderContext);
    const { getSizes, sizes } = useContext(SizeContext);

    const getIngredientLimitFromSize = (name: SizeType) => {
        return INGREDIENTS_LIMIT[name];
    }

    const formatSecondaryText = (size: Size) => {
        const limit = getIngredientLimitFromSize(size.name);

        return `(${limit} ingredients)`;
    }

    const handleSelect = (size: Size) => {
        updateParrentState(size);
        onSelect(size);
    }

    const updateParrentState = (size: Size) => {
        const maxIngredients = getIngredientLimitFromSize(size.name);

        setIngredientsLimit(maxIngredients);
        setSelectedSizeName(size.name.toLowerCase());
    }

    useEffect(() => {
        if(orderData.size?.id)
            updateParrentState(orderData.size);
    }, []);

    useEffect(() => {
        if (!sizes.length)
            getSizes();
    }, [sizes]);

    return (
        <View style={styles.container}>
            <AppText style={styles.title}>Pick a size</AppText>
            <View style={styles.form_wrapper}>
                {sizes.map(size =>
                    <RadioButton
                        key={size.id}
                        isSelected={selectedValueId === size.id}
                        onPress={() => handleSelect(size)}
                        primaryText={formatItemNameWithPrice(size)}
                        secondaryText={formatSecondaryText(size)}
                    />
                )}
            </View>
            {errorMessage && (
                <View style={ingredientStyles.error_wrapper}>
                    <AppText style={ingredientStyles.star_color}>* </AppText>
                    <AppText style={ingredientStyles.error_text}>{errorMessage}</AppText>
                </View>
            )}
        </View>
    );
}

export default SizeForm;
