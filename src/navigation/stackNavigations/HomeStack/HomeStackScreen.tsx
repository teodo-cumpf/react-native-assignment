import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../../../screens';

import { SCREEN_NAMES, SCREEN_OPTIONS } from '../../constants';

const HomeStackScreen = () => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator screenOptions={SCREEN_OPTIONS}>
            <HomeStack.Screen
                name={SCREEN_NAMES.HOME_STACK.HOME}
                component={HomeScreen}
            />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;
