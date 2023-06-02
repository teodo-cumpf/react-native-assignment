import { View } from 'react-native';
import { FormikProps } from 'formik';

import { ContentWrapper } from '../../../../../components/templates';
import { FormInput, Select, TextArea } from '../../../../../components/inputs';

import { useToggle } from '../../../../../hooks';

import styles from './DetailsFormStyles';

const paymentMethodOptions = ['Cash', 'Card'];

interface DetailsFormProps {
    formikProps: FormikProps<{
        fullName: string;
        address: string;
        phoneNumber: string;
        paymentMethod: string;
        note: string;
    }>
}

const DetailsForm = (props: DetailsFormProps) => {
    const {values, errors, handleChange, isValid} = props.formikProps;

    const [isPaymentSelectOpen, togglePaymentSelect] = useToggle();

    return (
        <ContentWrapper>
            <View style={styles.wrapper}>
                <FormInput
                    title='Full name'
                    isRequired
                    value={values.fullName}
                    showError={!isValid}
                    placeholder='Peter'
                    inputHandler={(value) => handleChange('fullName')(value)}
                    errorMessage={errors.fullName}
                />
                <FormInput
                    title='Address'
                    isRequired
                    value={values.address}
                    showError={!isValid}
                    placeholder='Peter'
                    inputHandler={(value) => handleChange('address')(value)}
                    errorMessage={errors.address}
                />
                <FormInput
                    title='Phone number'
                    isRequired
                    value={values.phoneNumber}
                    showError={!isValid}
                    placeholder='Peter'
                    inputHandler={(value) => handleChange('phoneNumber')(value)}
                    errorMessage={errors.phoneNumber}
                />
                <Select
                    value={values.paymentMethod}
                    title='Cash or card'
                    isOpen={isPaymentSelectOpen}
                    options={paymentMethodOptions}
                    placeholder='Choose a payment method'
                    showError={!isValid}
                    isRequired
                    errorMessage={errors.paymentMethod}
                    onToggle={togglePaymentSelect}
                    onSelect={(value) => handleChange('paymentMethod')(value)}
                />
                <TextArea
                    title='Note'
                    value={values.note}
                    placeholder='Write a note'
                    inputHandler={(value) => handleChange('note')(value)}
                />
            </View>
        </ContentWrapper>
    );
}

export default DetailsForm;
