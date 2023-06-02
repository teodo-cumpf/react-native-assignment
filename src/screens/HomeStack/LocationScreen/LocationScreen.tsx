import { View } from 'react-native'

import { AppText } from '../../../components/typography';
import { ScreenWrapper } from '../../../components/templates'

import { Location } from '../../../types';
import { LocationBox } from './components';

import styles from './LocationScreenStyles';

const locations: Location[] = [
    {name: 'Los Angeles', address: '3705 Felosa Drive'},
    {name: 'Los Angeles', address: '260 Sumner Street'},
    {name: 'San Francisco', address: '4954 Thompson Drive'},
    {name: 'Oakland', address: '1819 Cliffird Street'},
]

const LocationScreen = () => {
    return (
        <ScreenWrapper>
            <AppText isHeader>Our locations</AppText>

            <View style={styles.list_wrapper}>
                {locations.map((location, i) => <LocationBox location={location} key={i}/>)}
            </View>
        </ScreenWrapper>
    );
}

export default LocationScreen;
