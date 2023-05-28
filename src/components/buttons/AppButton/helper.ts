import { APP_BUTTON_TYPE } from './types';

import styles from './AppButtonStyles';

const BUTTON_STYLE = {
    [APP_BUTTON_TYPE.PRIMARY]: [styles.button, styles.primary],
    [APP_BUTTON_TYPE.SECONDARY]: [styles.button, styles.secondary],
    [APP_BUTTON_TYPE.TERTIARY]: [styles.button, styles.tertiary],
}

const BUTTON_TEXT = {
    [APP_BUTTON_TYPE.PRIMARY]: [styles.text, styles.white_text],
    [APP_BUTTON_TYPE.SECONDARY]: [styles.text, styles.white_text],
    [APP_BUTTON_TYPE.TERTIARY]: [styles.text, styles.black_text],
}

export const formatButtonStyle = (type: APP_BUTTON_TYPE) => {
    return BUTTON_STYLE[type];
}

export const formatTextStyle = (type: APP_BUTTON_TYPE) => {
    return BUTTON_TEXT[type];
}
