import { api } from "../config/backend";

// GET /api/services?lang={lang}
export const fetchAllServices = async (lang = "en") => {
  const response = await api.get("/api/services", {
    params: { lang },
  });
  return response.data;
};

// GET /api/services/{id}?lang={lang}
export const getServiceDetails = async (id, lang = "en") => {
  const response = await api.get(`/api/services/${id}`, {
    params: { lang },
  });
  return response.data;
};
