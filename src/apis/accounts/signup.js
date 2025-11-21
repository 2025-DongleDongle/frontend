import api from "../api";

// userData는 account + dispatch 데이터 전체를 담은 객체
export const signup = async (userData) => {
  try {
    const response = await api.post("/accounts/signup/", userData);
    return response.data;  
    // { message: "...", data: {id, username, nickname, gender, homeUniversity, dispatch} }
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};