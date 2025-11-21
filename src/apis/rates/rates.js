import api from "../api";

export const convertRate = async ({ from, to, amount }) => {
  try {
    const response = await api.get("/rates/convert/", {
      params: {
        from,
        to,
        amount,
      },
    });

    return response.data; 
    /*
      {
        from_currency: "...",
        to_currency: "...",
        amount: "10.00",
        converted: "14285.71"
      }
    */
  } catch (error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject({ message: "네트워크 오류가 발생했습니다." });
  }
};