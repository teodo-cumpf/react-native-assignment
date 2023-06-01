import { Formik } from 'formik';
import { View } from 'react-native';
import { useContext, useEffect } from 'react';

import { ExtraIngredientContext, OrderContext } from '../../../../context';

import { AppText } from '../../../../components/typography';
import { ContentWrapper } from '../../../../components/templates';
import { AppButton, CheckBox } from '../../../../components/buttons';
import { APP_BUTTON_TYPE } from '../../../../components/buttons/AppButton/types';

import {
    addOrRemoveByIdIfExist,
    formatItemNameWithPrice,
} from '../../../../utility/helperFunctions';
import { useGetTotalPrice } from '../../../../hooks';
import { arrow_right } from '../../../../utility/imageExporter';

import { HomeSteps } from '../../types';
import { ExtraIngredient, OrderData, OrderInputType } from '../../../../types';

import styles from './ChooseExtraIngredientStyles';

const extraIngredientsInitalData: OrderData = {
    extraIngredients: []
}

interface ChooseExtraIngredientsProps {
    onChangeStep: (step: HomeSteps) => void;
}

const ChooseExtraIngredient = (props: ChooseExtraIngredientsProps) => {
    const { onChangeStep } = props;

    const { updateOrderDataByField } = useContext(OrderContext);
    const { getExtraIngredients, extraIngredients } = useContext(ExtraIngredientContext);

    const [totalPrice] = useGetTotalPrice();

    const handleOnSubmit = (orderData: OrderInputType) => {
        updateOrderDataByField("extraIngredients", orderData);
        onChangeStep(HomeSteps.OVERVIEW);
    }

    const calculatePriceWithIngredients = (ingredients: ExtraIngredient[]) => {
        let price = totalPrice;

        ingredients.forEach(ingredient => price += ingredient.price);

        return price.toFixed(2);
    }

    useEffect(() => {
        if (!extraIngredients.length)
            getExtraIngredients();
    }, [extraIngredients]);

    return (
        <Formik
            initialValues={extraIngredientsInitalData}
            onSubmit={(values) => handleOnSubmit(values.extraIngredients!)}
        >
            {({ handleSubmit, setFieldValue, values }) => (
                <>
                    <ContentWrapper>
                        <View style={styles.container}>
                            <AppText style={styles.title}>Pick an extra ingredient</AppText>
                            <AppText style={styles.description}>Weather its more sashimi or an ingrediant you’d like to try out, feel free to add whatever you’d like.</AppText>
                            <View style={styles.form_wrapper}>
                                {extraIngredients.map(extraIngredient => 
                                    <CheckBox 
                                        key={extraIngredient.id} 
                                        onPress={() => {
                                            const selectedIds = addOrRemoveByIdIfExist(extraIngredient, values.extraIngredients!);
                                            setFieldValue("extraIngredients", selectedIds);
                                        }}
                                        isSelected={values.extraIngredients?.some(ingredient => ingredient.id === extraIngredient.id)}
                                        text={formatItemNameWithPrice(extraIngredient)} 
                                    />
                                )}
                            </View>
                        </View>
                    </ContentWrapper>
                    <View style={styles.price_wrapper}>
                        <ContentWrapper>
                            <View style={[styles.row, styles.paddingBottom]}>
                                <AppText style={styles.price_text}>Regular price</AppText>
                                <AppText style={styles.price_value}>${totalPrice.toFixed(2)}</AppText>
                            </View>
                            <View style={styles.row}>
                                <AppText style={styles.extra_ingredient_text}>Price with extra ingredients</AppText>
                                <AppText style={styles.extra_ingredient_value}>${calculatePriceWithIngredients(values.extraIngredients!)}</AppText>
                            </View>
                        </ContentWrapper>
                    </View>
                    <View style={styles.button_row}>
                        <View style={styles.button_wrapper}>
                            <AppButton
                                isBold
                                onPress={() => onChangeStep(HomeSteps.INGREDIENT)}
                                text='Back'
                                type={APP_BUTTON_TYPE.TERTIARY}
                            />
                        </View>
                        <View style={styles.button_wrapper}>
                            <AppButton
                                isBold
                                onPress={handleSubmit}
                                text='Next'
                                icon={arrow_right}
                            />
                        </View>
                    </View>
                </>
            )}
        </Formik>
    );
}

export default ChooseExtraIngredient;
