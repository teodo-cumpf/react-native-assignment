import { View } from 'react-native';
import { useContext, useEffect } from 'react';

import { IngredientContext } from '../../../../context';

import { CheckBox } from '../../../../components/buttons';
import { AppText } from '../../../../components/typography';

import { Ingredient } from '../../../../types';

import styles from './OtherIngredientsFormStyles';
import ingredientsStyles from '../ChooseIngredients/ChoseIngredientsStyle';

interface OtherIngredientsFormProps {
    limit: number;
    selectedIds: number[];
    errorMessage?: string;
    selectedSizeName?: string;
    onSelect: (value: Ingredient) => void;
}

const OtherIngredientsForm = (props: OtherIngredientsFormProps) => {
    const { selectedIds, onSelect, limit, errorMessage, selectedSizeName } = props;

    const { getIngredients, ingredients } = useContext(IngredientContext);

    useEffect(() => {
        if (!ingredients.length)
            getIngredients();
    }, [ingredients]);

    const shouldRenderAmountMessage = () => {
        if(selectedSizeName){
            if(selectedIds?.length === limit)
                return true;
        }

        return false;
    }

    return (
        <View style={styles.container}>
            <AppText style={styles.title}>Pick other ingredients</AppText>
            <AppText style={styles.description}>Pick up to 5, 8 or 10 ingredients based on bowl size.</AppText>
            <View style={styles.form_wrapper}>
                {ingredients.map(ingredient => 
                    <CheckBox 
                        key={ingredient.id} 
                        onPress={() => onSelect(ingredient)} 
                        text={ingredient.name} 
                        disabled={selectedIds?.length >= limit}
                        isSelected={selectedIds?.includes(ingredient.id)}
                    />
                )}
            </View>
            
            {errorMessage &&
                <View style={ingredientsStyles.error_wrapper}>
                    <AppText style={ingredientsStyles.star_color}>* </AppText>
                    <AppText style={ingredientsStyles.error_text}>{errorMessage}</AppText>
                </View>
            }
            {shouldRenderAmountMessage() && 
                <View style={ingredientsStyles.error_wrapper}>
                    <AppText style={ingredientsStyles.star_color}>* </AppText>
                    <AppText style={ingredientsStyles.error_text}>{`You’ve chosen the maximum amout of ingrediants for a ${selectedSizeName} size bowl.`}</AppText>
                </View>
            }
        </View>
    );
}

export default OtherIngredientsForm;
