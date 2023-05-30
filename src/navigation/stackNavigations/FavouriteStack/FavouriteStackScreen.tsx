import { createStackNavigator } from '@react-navigation/stack';

import { FavouriteScreen } from '../../../screens';

import { SCREEN_NAMES, SCREEN_OPTIONS } from '../../constants';

const FavouriteStackScreen = () => {
    const FavouriteStack = createStackNavigator();

    return (
        <FavouriteStack.Navigator screenOptions={SCREEN_OPTIONS}>
            <FavouriteStack.Screen
                name={SCREEN_NAMES.FAVOURITE_STACK.FAVOURITE}
                component={FavouriteScreen}
            />
        </FavouriteStack.Navigator>
    );
}

export default FavouriteStackScreen;
