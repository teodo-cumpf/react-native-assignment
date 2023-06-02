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
            <AppText>Our locations</AppText>

            <View style={styles.list_wrapper}>
                {locations.map(location => <LocationBox location={location}/>)}
            </View>
        </ScreenWrapper>
    );
}

export default LocationScreen;
