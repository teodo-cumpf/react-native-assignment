import { View, Image } from 'react-native';

import { AppText } from '../../../../../components/typography';
import { ContentWrapper } from '../../../../../components/templates';

import { pin } from '../../../../../utility/imageExporter';

import { Location } from '../../../../../types';

import styles from './LocationBoxStyles';

interface LocationBoxProps {
    location: Location
}

const LocationBox = (props: LocationBoxProps) => {
    const { location } = props;

    return (
        <ContentWrapper>
            <AppText isHeader>{location.name}</AppText>
            <View style={styles.flex_row}>
                <Image source={pin} style={styles.pin_icon}/>
                <AppText>{location.address}</AppText>
            </View>
        </ContentWrapper>
    );
}

export default LocationBox;
