import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, LocationScreen } from '../../../screens';

import { SCREEN_NAMES, SCREEN_OPTIONS } from '../../constants';

const HomeStackScreen = () => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator screenOptions={SCREEN_OPTIONS}>
            <HomeStack.Screen
                name={SCREEN_NAMES.HOME_STACK.HOME}
                component={HomeScreen}
            />
            <HomeStack.Screen
                name={SCREEN_NAMES.HOME_STACK.LOCATION}
                component={LocationScreen}
            />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;
