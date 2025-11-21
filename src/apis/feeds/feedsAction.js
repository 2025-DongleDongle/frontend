import api from "../api";

/* ================================
    📌 스크랩 (Scrap)
================================ */

/**
 * 스크랩 추가
 * POST /feeds/{ledger_id}/scrap/
 */
export const addScrap = async (ledgerId) => {
  try {
    const response = await api.post(`/feeds/${ledgerId}/scrap/`);
    return response.data;
    // { message, data: {...} } 또는 "이미 스크랩된 항목입니다."
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

/**
 * 스크랩 삭제
 * DELETE /feeds/{ledger_id}/scrap/
 */
export const removeScrap = async (ledgerId) => {
  try {
    const response = await api.delete(`/feeds/${ledgerId}/scrap/`);
    return response.data;
    // { message, data: null } 또는 "스크랩된 항목이 아닙니다."
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

/**
 * 내 스크랩 목록 조회
 * GET /feeds/scraps/
 */
export const getMyScraps = async () => {
  try {
    const response = await api.get("/feeds/scraps/");
    return response.data;
    // { message, data: [...] }
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};


/* ================================
    📌 좋아요 (Favorites)
================================ */

/**
 * 좋아요 추가
 * POST /feeds/{ledger_id}/favorites/
 */
export const addFavorite = async (ledgerId) => {
  try {
    const response = await api.post(`/feeds/${ledgerId}/favorites/`);
    return response.data;
    // { message, data }
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

/**
 * 좋아요 삭제
 * DELETE /feeds/{ledger_id}/favorites/
 */
export const removeFavorite = async (ledgerId) => {
  try {
    const response = await api.delete(`/feeds/${ledgerId}/favorites/`);
    return response.data;
    // { message, data: null }
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};
