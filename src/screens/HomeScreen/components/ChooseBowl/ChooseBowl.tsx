import { View } from 'react-native';

import { AppButton, RadioButton } from '../../../../components/buttons';
import { ContentWrapper } from '../../../../components/templates';
import { AppText } from '../../../../components/typography';

import { APP_BUTTON_TYPE } from '../../../../components/buttons/AppButton/types';

import { arrow_right } from '../../../../utility/imageExporter';

import styles from './ChooseBowlStyles';

const ChooseBowl = () => {
    return (
        <>
            <ContentWrapper>
                <AppText style={styles.title}>
                    {"Test heading"}
                </AppText>
                <AppText style={styles.description}>
                    {"Test description"}
                </AppText>
                <View style={styles.form_wrapper}>
                    <RadioButton onPress={() => { }} primaryText='Test' />
                    <RadioButton onPress={() => { }} primaryText='Test' />
                    <RadioButton onPress={() => { }} primaryText='Test' />
                    <RadioButton onPress={() => { }} primaryText='Test' />

                </View>
            </ContentWrapper>
            <View style={styles.button_wrapper}>
                <AppButton onPress={() => { }} text='Next' icon={arrow_right} type={APP_BUTTON_TYPE.PRIMARY} />
            </View>
        </>
    );
}

export default ChooseBowl;