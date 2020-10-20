import { AsyncStorage } from 'react-native';

const Storage = {
  async set(name, data) {
    await AsyncStorage.setItem(name, JSON.stringify(data));
  },
  async get(name) {
    const data = await AsyncStorage.getItem(name);
    if (data) {
      return {
        ok: true,
        data: JSON.parse(data),
      };
    } else {
      return {
        ok: false,
      };
    }
  },
  async remove(name) {
    await AsyncStorage.removeItem(name);
  },
  async clear() {
    await AsyncStorage.clear();
  },
};

export default Storage;
