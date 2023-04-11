import AsyncStorage from "@react-native-async-storage/async-storage";

async function storeObject(key, data){
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    }
    catch(e){
        console.log(e);
    }
}

async function getObject(key){
    try {
        const stringValue = await AsyncStorage.getItem(key);
        return JSON.parse(stringValue);
    }
    catch (error) {
        console.log(error);
    }
}

export { storeObject, getObject };