import {
    home,
    star,
    cart,
    home_active,
    star_active,
    cart_active
} from "../utility/imageExporter";

import { STACK_NAMES } from "./types";

export function renderBottomNavigationIcon(currentScreen: STACK_NAMES, isFocused: boolean) {
    return NAVIGATION_ICON[currentScreen](isFocused);
}

const NAVIGATION_ICON = {
    [STACK_NAMES.HOME_STACK]: (isFocused: boolean) => isFocused ? home_active : home,
    [STACK_NAMES.FAVOURITE_STACK]: (isFocused: boolean) => isFocused ? star_active : star,
    [STACK_NAMES.CART_STACK]: (isFocused: boolean) => isFocused ? cart_active : cart,
}
