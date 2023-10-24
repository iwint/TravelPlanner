import AsyncStorage from '@react-native-async-storage/async-storage';

export const addDataToStorage = (key, data) => {
  console.log('addData');
  return new Promise((resolve, reject) => {
    try {
      const newData = JSON.stringify(data);
      AsyncStorage.setItem(key, newData);
      resolve(newData);
    } catch (e) {
      reject(e);
    }
  });
};

export const getDataFromStorage = key => {
  console.log('getData');
  return new Promise((resolve, reject) => {
    try {
      AsyncStorage.getItem(key).then(data => {
        resolve(JSON.parse(data));
      });
    } catch (e) {
      reject(e);
    }
  });
};
