import { useState } from 'react';
import { View, ScrollView } from 'react-native';

import { 
    ChooseBowl, 
    PreviewPokeBowl, 
    ChooseIngredients, 
    ProgressBarIndicator,
    ChooseExtraIngredient, 
} from './components';

import { ScreenWrapper } from '../../../components/templates';

import { getNumberOfEnumValues } from '../../../utility/helperFunctions';

import { HomeSteps } from './types';

import styles from './HomeScreenStyles';

const HomeScreen = () => {
    const [activeStep, setActiveStep] = useState(HomeSteps.BOWL);
    
    const numberOfSteps = getNumberOfEnumValues(HomeSteps);

    const screenMaper = {
        [HomeSteps.BOWL]: <ChooseBowl onNext={() => setActiveStep(HomeSteps.INGREDIENT)}/>,
        [HomeSteps.INGREDIENT]: <ChooseIngredients onChangeStep={setActiveStep}/>,
        [HomeSteps.EXTRA_INGREDIENT]: <ChooseExtraIngredient onChangeStep={setActiveStep}/>,
        [HomeSteps.OVERVIEW]: <PreviewPokeBowl onGoToCart = {() => setActiveStep(HomeSteps.BOWL)}/>
    }

    return (
        <ScreenWrapper>
            <View style={styles.progress_bar_wrapper}>
                <ProgressBarIndicator
                    currentStep={activeStep}
                    numberOfSteps={numberOfSteps}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View >
                    {screenMaper[activeStep]}
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}

export default HomeScreen;
