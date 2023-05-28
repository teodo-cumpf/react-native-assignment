import { loadAsync } from "expo-font";
import { useEffect, useState } from "react";

const fetchFonts = () => {
    return loadAsync({
        'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
        'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
        'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
    });
};

const useInitializeFonts = () => {
    const [fontsLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        fetchFonts().then(() => setFontLoaded(true));
    }, []);

    return [fontsLoaded];
}

export default useInitializeFonts;
