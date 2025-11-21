import api from "../api";

// 예산 최초 생성 (POST)
export const createBudget = async (budgetData) => {
  try {
    const response = await api.post("/budgets/fill/", budgetData);
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

// 예산 조회 (GET)
export const getBudget = async () => {
  try {
    const response = await api.get("/budgets/fill/");
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};

// 예산 수정 (PUT)
export const updateBudget = async (budgetData) => {
  try {
    const response = await api.put("/budgets/fill/", budgetData);
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};
