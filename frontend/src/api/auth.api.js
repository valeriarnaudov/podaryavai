import api from "./axios";

export const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  localStorage.setItem("token", res.data.accessToken);
  return res.data.user;
};
