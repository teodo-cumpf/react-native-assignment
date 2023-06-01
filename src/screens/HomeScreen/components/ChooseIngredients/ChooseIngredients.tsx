import * as yup from 'yup';
import { Formik } from 'formik';
import { View } from 'react-native';
import { useState, useMemo, useContext } from 'react';

import { OrderContext } from '../../../../context';

import SizeForm from '../SizeForm/SizeForm';
import BaseForm from '../BaseForm/BaseForm';
import SauceForm from '../SauceForm/SauceForm';
import { AppButton } from '../../../../components/buttons';
import { ContentWrapper } from '../../../../components/templates';
import OtherIngredientsForm from '../OtherIngredientsForm/OtherIngredientsForm';

import { HomeSteps } from '../../types';
import { Ingredient, OrderData, SizeType } from '../../../../types';
import { APP_BUTTON_TYPE } from '../../../../components/buttons/AppButton/types';

import { arrow_right } from '../../../../utility/imageExporter';
import { addOrRemoveByIdIfExist } from '../../../../utility/helperFunctions';

import styles from './ChoseIngredientsStyle';

const ingredientsInitalData = {
    size: {
        id: 0,
        name: '' as SizeType, 
        currency: '',                         
        price: 0,
    },
    base: {
        id: 0,
        name: '',
    },
    sauce: {
        id: 0,
        name: '',
    },
    ingredients: [] as Ingredient[],
}

interface ChooseIngredientsProps {
    onChangeStep: (step: HomeSteps) => void;
}

const ChooseIngredients = (props: ChooseIngredientsProps) => {
    const { onChangeStep } = props;

    const { updateOrderData } = useContext(OrderContext);

    const [ingredientsLimit, setIngredientsLimit] = useState(0);
    const [selectedSizeName, setSelectedSizeName] = useState<string>();

    const handleOnSubmit = (orderData: OrderData) => {
        updateOrderData(orderData);
        onChangeStep(HomeSteps.EXTRA_INGREDIENT);
    }

    const validationSchema = useMemo(() => {
        return yup.object().shape({
            size: yup.object({
                name: yup.string().required("Please pick a size")
            }),
            base: yup.object({
                name: yup.string().required("Please pick a base"),
            }),
            sauce: yup.object({
                name: yup.string().required("Please pick a sauce")
            }),
            ingredients: yup.array().max(ingredientsLimit, `You’ve chosen more ingrediants then ${selectedSizeName} size allows, please unselect some.`)
        });
    }, [ingredientsLimit, selectedSizeName]);

    return (
        <Formik
            initialValues={ingredientsInitalData}
            validationSchema={validationSchema}
            onSubmit={(values) => handleOnSubmit(values)}
        >
            {({ values, handleSubmit, setFieldValue, errors, touched }) => (
                <>
                    <ContentWrapper>
                        <SizeForm
                            selectedValueId={values.size.id}
                            setIngredientsLimit={setIngredientsLimit}
                            setSelectedSizeName={setSelectedSizeName}
                            errorMessage={touched.size ? errors.size?.name : undefined}
                            onSelect={(value) => setFieldValue("size", value)}
                        />
                        <BaseForm
                            errorMessage={touched.base?.id ? errors.base?.name : undefined}
                            selectedValueId={values.base.id}
                            onSelect={(value) => setFieldValue("base", value)}
                        />
                        <SauceForm
                            errorMessage={touched.sauce ? errors.sauce?.name : ""}
                            selectedValueId={values.sauce.id}
                            onSelect={(value) => setFieldValue("sauce", value)}
                        />
                        
                        <OtherIngredientsForm
                            selectedIds={values.ingredients.map(ingredient => ingredient.id)}
                            limit={ingredientsLimit}
                            errorMessage={touched.ingredients ? errors.ingredients : ""}
                            selectedSizeName={selectedSizeName}
                            onSelect={(value) => {
                                const selectedIds = addOrRemoveByIdIfExist(value, values.ingredients!);
                                setFieldValue("ingredients", selectedIds);
                            }}
                        />
                    </ContentWrapper>
                    <View style={styles.button_row}>
                        <View style={styles.button_wrapper}>
                            <AppButton
                                isBold
                                onPress={() => onChangeStep(HomeSteps.BOWL)}
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

export default ChooseIngredients;
