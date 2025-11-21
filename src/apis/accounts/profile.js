import api from "../api";

// 프로필 조회 (GET)
export const getProfile = async () => {
  try {
    const response = await api.get("/accounts/profile/");
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

// 프로필 수정 (PUT)
export const updateProfile = async (profileData) => {
  try {
    const response = await api.put("/accounts/profile/", profileData);
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};
