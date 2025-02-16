import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value); // JSON 문자열로 변환
    await AsyncStorage.setItem(key, jsonValue);
    console.log("데이터 저장 완료:", key);
  } catch (error) {
    console.error("데이터 저장 실패:", error);
  }
};

export const loadData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : null; // JSON 객체로 변환
  } catch (error) {
    console.error("데이터 불러오기 실패:", error);
    return null;
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("데이터 삭제 완료:", key);
  } catch (error) {
    console.error("데이터 삭제 실패:", error);
  }
};

