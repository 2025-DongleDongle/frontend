import api from "../api";

//로그인
export const login = async ({ username, password, remember }) => {
  try {
    const response = await api.post("/accounts/login/", {
      username,
      password,
      remember,
    });

    return response.data; // { message, data: { id, username, access_token } }
  } catch (error) {
    // Django DRF 에러 형태 그대로 반환
    if (error.response) {
      return Promise.reject(error.response.data); 
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

//로그아웃
export const logout = async () => {
  try {
    const response = await api.post("/accounts/logout/");
    return response.data;  // { message: "성공적으로 로그아웃되었습니다." }
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};