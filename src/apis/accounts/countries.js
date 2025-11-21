import api from "../api";

export const countries = async () => {
  try {
    const response = await api.get("/accounts/countries/");
    return response.data;  
    // { message: "...", data: [ {code, label}, ... ] }
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};