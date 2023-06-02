import { Formik } from 'formik'
import { View } from 'react-native';
import { useContext, useEffect } from 'react';

import { OrderContext } from '../../../../context';

import { BowlContext } from '../../../../context';
import { AppText } from '../../../../components/typography';
import { ContentWrapper } from '../../../../components/templates';
import { AppButton, RadioButton } from '../../../../components/buttons';

import { Bowl, OrderData, OrderInputType } from '../../../../types';
import { APP_BUTTON_TYPE } from '../../../../components/buttons/AppButton/types';

import { arrow_right } from '../../../../utility/imageExporter';

import styles from './ChooseBowlStyles';

interface ChooseBowlsProps {
    onNext: () => void;
}

const initalBowlValue = {
    bowl:{
        id: 0,
        name: ""
    }
}

const formatInitalValue = (orderData: OrderData) => {
    if(orderData.bowl) 
        return {bowl: orderData.bowl};

    return initalBowlValue;
}

const ChooseBowl = (props: ChooseBowlsProps) => {
    const { onNext } = props;
 
    const { getBowls, bowls } = useContext(BowlContext);
    const { updateOrderDataByField, orderData } = useContext(OrderContext);

    const handleOnSubmit = (bowl?: OrderInputType) => {
        if(bowl){
            onNext();
            updateOrderDataByField("bowl", bowl);
        }
    }

    const isBowlSelected = (id: number, selectedBowl?: Bowl) => {
        if(selectedBowl){
            if(selectedBowl.id === id)
                return true;
        }

        return false;
    }

    useEffect(() => {
        if (!bowls.length)
            getBowls();
    }, [bowls]);

    return (
        <Formik
            enableReinitialize
            initialValues={formatInitalValue(orderData)}
            onSubmit={(values) => handleOnSubmit(values.bowl)}
        >
            {({values, handleSubmit, setFieldValue}) => (
                <>
                    <ContentWrapper>
                        <AppText style={styles.title}>
                            Make your own poke bowl
                        </AppText>
                        <AppText style={styles.description}>
                            {`Select the type of bowl your’d like, the size, add the base, sauce and all the added ingredients. We’ll take care of the rest!`}
                        </AppText>
                        <View style={styles.form_wrapper}>
                            {bowls.map(bowl => 
                                <RadioButton 
                                    key={bowl.id}
                                    primaryText={bowl.name} 
                                    onPress={() => setFieldValue("bowl", bowl)}
                                    isSelected={isBowlSelected(bowl.id, values.bowl)}
                                />
                            )}
                        </View>
                    </ContentWrapper>
                    <View style={styles.button_wrapper}>
                        <AppButton 
                            text='Next' 
                            icon={arrow_right} 
                            onPress={handleSubmit} 
                            disabled={!values.bowl?.name}
                            type={APP_BUTTON_TYPE.PRIMARY}
                        />
                    </View>
                </>
            )}
        </Formik>
    );
}

export default ChooseBowl;
