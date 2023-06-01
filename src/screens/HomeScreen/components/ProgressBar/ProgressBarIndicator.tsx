import { View } from 'react-native';

import { AppText } from '../../../../components/typography';

import styles from './ProgressBarIndicatorStyle';

interface ProgressBarIndicatorProps {
    currentStep: number;
    numberOfSteps: number;
}

const ProgressBarIndicator = (props: ProgressBarIndicatorProps) => {
    const { currentStep, numberOfSteps } = props;

    const progressPercentage = (100 / numberOfSteps) * currentStep;

    return (
        <View style={styles.wrapper}>
            <View style={styles.text_wrapper}>
                <AppText style={styles.current_step_text}>{`Step ${currentStep}`}</AppText>
                <AppText style={styles.number_of_steps_text}>{` of ${numberOfSteps}`}</AppText>
            </View>

            <View style={styles.progress_bar_wrapper}>
                <View style={{ ...styles.current_step, width: `${progressPercentage}%`}} />
                <View style={styles.progress_bar} />
            </View>
        </View>
    );
}

export default ProgressBarIndicator;
