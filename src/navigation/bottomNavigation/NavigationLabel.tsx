import { AppText } from '../../components/typography';

import styles from './BottomNavigationStyles';

interface NavigationLabelProps {
    label?: string;
    isFocused?: boolean;
}

const NavigationLabel = (props: NavigationLabelProps) => {
    const { isFocused, label } = props;

    const formatLabelStyle = () => {
        if (isFocused) return [styles.label, styles.label_active];

        return styles.label;
    }

    return (
        <AppText style={formatLabelStyle()}>
            {label}
        </AppText>
    );
}

export default NavigationLabel;
