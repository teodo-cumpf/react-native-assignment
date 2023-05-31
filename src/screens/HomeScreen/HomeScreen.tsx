import { View, ScrollView } from 'react-native';

import { ChooseBowl, ProgressBar } from './components';
import { ScreenWrapper } from '../../components/templates';

import styles from './HomeScreenStyles'
const HomeScreen = () => {
    return (
        <ScreenWrapper>
            <ProgressBar
                currentStep={1}
                numberOfSteps={4}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.choose_bowl_wrapper}>
                    <ChooseBowl/>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}

export default HomeScreen;
