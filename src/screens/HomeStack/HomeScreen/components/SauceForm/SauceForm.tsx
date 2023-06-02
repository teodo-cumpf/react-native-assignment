import { View } from 'react-native';
import { useContext, useEffect } from 'react';

import { SauceContext } from '../../../../../context';

import { RadioButton } from '../../../../../components/buttons';
import { AppText } from '../../../../../components/typography';

import { Sauce } from '../../../../../types';

import styles from './SauceFormStyles';
import ingredientsStyles from '../ChooseIngredients/ChoseIngredientsStyle';

interface ChooseSauceProps {
    errorMessage?: string;
    selectedValueId?: number;
    onSelect: (value: Sauce) => void;
}

const ChooseSauce = (props: ChooseSauceProps) => {
    const { onSelect, selectedValueId, errorMessage } = props;

    const { getSauces, sauces } = useContext(SauceContext);

    useEffect(() => {
        if (!sauces.length)
            getSauces();
    }, [sauces]);

    return (
        <View style={styles.container}>
            <AppText style={styles.title}>Pick a sauce</AppText>
            <View style={styles.form_wrapper}>
                {sauces.map(sauce =>
                    <RadioButton
                        key={sauce.id}
                        onPress={() => onSelect(sauce)}
                        primaryText={sauce.name}
                        isSelected={selectedValueId === sauce.id}
                    />
                )}
            </View>
            {errorMessage && (
                <View style={ingredientsStyles.error_wrapper}>
                    <AppText style={ingredientsStyles.star_color}>* </AppText>
                    <AppText style={ingredientsStyles.error_text}>{errorMessage}</AppText>
                </View>
            )}
        </View>
    );
}

export default ChooseSauce;
