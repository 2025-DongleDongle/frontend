import api from "../api";

//가계부 등록
export const createLedgerItem = async (data) => {
  try {
    const response = await api.post("/ledgers/fill/", data);
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

//가계부 수정
export const updateLedgerItem = async (ledgerId, data) => {
  try {
    const response = await api.put(`/ledgers/fill/${ledgerId}/`, data);
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

//가계부 삭제
export const deleteLedgerItem = async (ledgerId) => {
  try {
    const response = await api.delete(`/ledgers/fill/${ledgerId}/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

//가계부 내용 일별 조회
export const getDateLedgers = async () => {
  try {
    const response = await api.get("/ledgers/date/");
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

//가계부 내용 카테고리별 조회
export const getCategoryLedgers = async () => {
  try {
    const response = await api.get("/ledgers/category/");
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

//가계부 내용 이번달 수입/지출 조회
export const getThisMonthLedgers = async () => {
  try {
    const response = await api.get("/ledgers/thisMonth/");
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

//가계부 내용 총 기간 수입/지출 조회
export const getTotalMonthLedgers = async () => {
  try {
    const response = await api.get("/ledgers/totalMonth/");
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};