import { View, TouchableOpacity, Image } from 'react-native';

import { AppText } from '../../../../components/typography';

import { arrow_cart_down, arrow_cart_up } from '../../../../utility/imageExporter';

import styles from './CounterStyles';

interface CounterProps {
    count: number;
    onCountChange: (value: React.SetStateAction<number>) => void
}

const Counter = (props: CounterProps) => {
    const { count, onCountChange } = props;

    const onDecrese = () => {
        if(count > 1)
            onCountChange(prevCount => --prevCount);
    }

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={onDecrese} style={styles.button_box}>
                <Image source={arrow_cart_down} style={styles.icon}/>
            </TouchableOpacity>
            <View style={styles.count_button}>
                <AppText style={styles.count_text}>{count}</AppText>
            </View>
            <TouchableOpacity 
                style={styles.button_box}
                onPress={() => onCountChange(prevCount => ++prevCount)}
            >
                <Image source={arrow_cart_up} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    );
};

export default Counter 
