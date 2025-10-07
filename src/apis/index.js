import { api } from "../config/backend";

// POST /api/work  (send lang in body; defaults to "en")
export const fetchAllWorks = async (lang) => {
  const response = await api.get("/api/works", { lang: lang ?? "en" });
  return response.data;
};

// GET /api/works/{id}/cases
export const fetchAllCases = async (id) => {
  const response = await api.get(`/api/works/${id}/cases`);
  return response.data;
};


