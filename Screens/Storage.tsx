import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key : string, value : string)  =>  {
    try {
      console.log('StoreData', key, 'dgtg', value);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@'+key, jsonValue);
   
    } catch (e) {
      console.log(e);
    }
  };
  
  export const getData = async (key:string) =>  {
    try {
      console.log('value', key);
      const jsonValue =  await AsyncStorage.getItem('@'+key);
      console.log(JSON.stringify(jsonValue));
      return jsonValue != null ? JSON.parse(jsonValue)  : [];
    } catch (e) {
      // error reading value
    }
  };