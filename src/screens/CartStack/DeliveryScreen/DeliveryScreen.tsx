import * as yup from 'yup';
import { Formik } from 'formik';
import { useContext } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CartContext, OrderContext } from '../../../context';

import { AppButton } from '../../../components/buttons';
import { AppText } from '../../../components/typography';
import { DetailsForm, PurchaseSummary } from './components';
import { ScreenWrapper } from '../../../components/templates'

import { APP_BUTTON_TYPE } from '../../../components/buttons/AppButton/types';

import styles from './DeliveryScreenStyles';

const formInitalData = {
    fullName: '',
    address: '',
    phoneNumber: '',
    paymentMethod: '',
    note: ''
}

const DeliveryScreen = () => {
    const { cartItems } = useContext(CartContext);
    const { purchaseAnOrder } = useContext(OrderContext);
    
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const handleSubmitForm = () => {
        purchaseAnOrder(cartItems);
    } 

    const validationSchema = yup.object().shape({
        fullName: yup.string().required('Please input your name'),
        address: yup.string().required('Please input your address'),
        phoneNumber: yup.string().required('Please input your number'),
        paymentMethod: yup.string().required('Please chosee a payment method')
    });

    return (
        <ScreenWrapper>
            <ScrollView contentContainerStyle={styles.scoll_wrapper}>
                <AppText isHeader>Delivery details</AppText>

                <Formik
                    initialValues={formInitalData}
                    validationSchema={validationSchema}
                    onSubmit={() => handleSubmitForm()}
                >
                    {(props) => (
                        <>
                            <DetailsForm formikProps={props}/>
                            <PurchaseSummary/>
            
                            <AppButton
                                text='Back to Cart'
                                type={APP_BUTTON_TYPE.TERTIARY}
                                onPress={() => navigation.goBack()}
                            />
                            <AppButton
                                text="Place Order"
                                type={APP_BUTTON_TYPE.SECONDARY}
                                onPress={() => props.handleSubmit()}
                            />
                        </>
                    )}
                </Formik>
            </ScrollView>
        </ScreenWrapper>
    );
}

export default DeliveryScreen;
