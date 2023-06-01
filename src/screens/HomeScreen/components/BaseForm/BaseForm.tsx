import { View } from 'react-native';
import { useContext, useEffect } from 'react';

import { BaseContext } from '../../../../context/apiContext/BaseContext';

import { RadioButton } from '../../../../components/buttons';

import { Base } from '../../../../types';
import { AppText } from '../../../../components/typography';

import styles from './BaseFormStyles';
import ingredientsStyles from '../ChooseIngredients/ChoseIngredientsStyle';

interface BaseFormProps {
    errorMessage?: string;
    selectedValueId?: number;
    onSelect: (value: Base) => void;
}

const BaseForm = (props: BaseFormProps) => {
    const { onSelect, errorMessage, selectedValueId } = props;

    const { getBases, bases } = useContext(BaseContext);

    useEffect(() => {
        if (!bases.length)
            getBases();
    }, [bases]);

    return (
        <View style={styles.container}>
            <AppText style={styles.title}>Pick the base</AppText>
            <View style={styles.form_wrapper}>
                {bases.map(base =>
                    <RadioButton
                        key={base.id}
                        primaryText={base.name}
                        isSelected={selectedValueId === base.id}
                        onPress={() => onSelect(base)}
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

export default BaseForm;
