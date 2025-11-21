import api from "../api";

/**
 * 전체 피드 조회 (기본 정렬: 최신순)
 * GET /feeds/
 */
export const getFeeds = async () => {
  try {
    const response = await api.get("/feeds/");
    return response.data; // { message, data: [...] }
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

/**
 * 인기순 정렬
 * GET /feeds/?sort=popular
 */
export const getPopularFeeds = async () => {
  try {
    const response = await api.get("/feeds/", {
      params: { sort: "popular" },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

/**
 * 검색 기능
 * GET /feeds/?search={query}
 */
export const searchFeeds = async (query) => {
  try {
    const response = await api.get("/feeds/", {
      params: { search: query },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

/**
 * 상세 조회
 * GET /feeds/{ledger_id}
 */
export const getFeedDetail = async (ledgerId) => {
  try {
    const response = await api.get(`/feeds/${ledgerId}/`);
    return response.data; // { message, data: {...} }
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};