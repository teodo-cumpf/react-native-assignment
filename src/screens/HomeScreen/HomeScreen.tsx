import { ScreenWrapper } from '../../components/templates';
import { ProgressBar } from './components';

const HomeScreen = () => {
    return (
        <ScreenWrapper>
            <ProgressBar
                currentStep={1}
                numberOfSteps={4}
            />
        </ScreenWrapper>
    );
}

export default HomeScreen;
