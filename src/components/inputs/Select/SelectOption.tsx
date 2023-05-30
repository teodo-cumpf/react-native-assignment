import { TouchableOpacity } from 'react-native';

import { AppText } from '../../typography';

interface SelectOptionProps {
    option: string;
    onSelect: (option: string) => void;
}

const SelectOption = (props: SelectOptionProps) => {
    const { option, onSelect } = props;

    return (
        <TouchableOpacity onPress={() => onSelect(option)}>
            <AppText>{option}</AppText>
        </TouchableOpacity>
    );
}

export default SelectOption;
