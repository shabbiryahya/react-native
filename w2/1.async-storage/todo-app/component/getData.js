import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log('get error is', e);
  }
};
export default getData;
