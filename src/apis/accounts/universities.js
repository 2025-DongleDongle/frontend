import api from "../api";

export const universities = async () => {
  try {
    const response = await api.get("/accounts/universities/");
    return response.data;  
    // { message: "...", data: [ {id, univ_name}, ... ] }
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};