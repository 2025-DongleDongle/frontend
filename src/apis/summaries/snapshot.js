import api from "../api";

// 가계부 요약본 등록
export const createSnapshot = async (data) => {
  try {
    const response = await api.post("/summaries/snapshot/", data);
    return response.data; 
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

// 가계부 세부 프로필 수정
export const updateSnapshot = async (data) => {
  try {
    const response = await api.put("/summaries/snapshot/", data);
    return response.data; 
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

// 가계부 세부 프로필 조회
export const getSnapshot = async () => {
  try {
    const response = await api.get("/summaries/snapshot/");
    return response.data; 
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

//가계부 요약본 비용 조회
export const getLedgerSummary = async () => {
  try {
    const response = await api.get("/summaries/ledger-summary/");
    return response.data; 
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};