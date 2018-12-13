import { AsyncStorage } from 'react-native';

const getToken = async () => {
    try {
        const values = await AsyncStorage.getItem('@token');
        if (values != null) {
            return values;
        }
        return '';
    } catch (err) {
        return '';
    }
};
export default getToken;
