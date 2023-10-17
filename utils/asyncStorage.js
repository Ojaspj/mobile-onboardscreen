import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // save error
    console.log("Error:.", error);
  }

  console.log("Done.");
};

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    // read error
    console.log("Error:.", error);
  }

  console.log("Done.");
};

export const removeItem = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
    console.log("Error:.", error);

    }
  
    console.log('Done.')
  }