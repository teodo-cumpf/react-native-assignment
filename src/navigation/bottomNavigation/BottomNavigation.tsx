import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { 
    HomeStackScreen, 
    CartStackScreen, 
    FavouriteStackScreen, 
} from '../stackNavigations';
import NavigationIcon from './NavigationIcon';
import NavigationLabel from './NavigationLabel';

import { STACK_NAMES } from '../types';
import { SCREEN_OPTIONS } from '../constants';

interface NavigationProp {
    focused: boolean;
} 

const BottomNavigation = () => {
    const BottomTab = createBottomTabNavigator();

    const formatScreenOptions = (screen: STACK_NAMES, label: string) => {
        return () => ({
            ...SCREEN_OPTIONS,
            tabBarLabel: ({ focused }: NavigationProp) => <NavigationLabel label={label} isFocused={focused}/>,
            tabBarIcon: ({ focused } : NavigationProp) => <NavigationIcon screen={screen} isFocused={focused}/>
        });
    }

    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name={STACK_NAMES.HOME_STACK}
                component={HomeStackScreen}
                options={formatScreenOptions(STACK_NAMES.HOME_STACK, "Home")}
            />
            <BottomTab.Screen
                name={STACK_NAMES.FAVOURITE_STACK}
                component={FavouriteStackScreen}
                options={formatScreenOptions(STACK_NAMES.FAVOURITE_STACK, "Favourites")}
            />
            <BottomTab.Screen
                name={STACK_NAMES.CART_STACK}
                component={CartStackScreen}
                options={formatScreenOptions(STACK_NAMES.CART_STACK, "Cart")}
            />
        </BottomTab.Navigator>
    );
}

export default BottomNavigation;
