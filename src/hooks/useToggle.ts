import { useState } from 'react';

type UseToggle = [boolean, () => void];

const useToggle = (): UseToggle => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen(prevState => !prevState);
    }

    return [isOpen, onToggle];
}

export default useToggle;
