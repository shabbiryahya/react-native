import AsyncStorage from '@react-native-async-storage/async-storage';
const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
    console.log('error is', e);
  }

  console.log('Done.');
};

export default removeData;
