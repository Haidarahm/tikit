import { create } from "zustand";
import { fetchAllServices, getServiceDetails } from "../apis/services";

export const useServicesStore = create((set, get) => ({
  services: [],
  serviceDetails: {}, // key: serviceId -> details object
  lang: undefined,
  loading: false,
  error: null,

  setLang: (lang) => set({ lang }),

  // Fetch list of services
  loadServices: async (lang) => {
    const effectiveLang = lang ?? get().lang ?? "en";
    set({ loading: true, error: null });
    try {
      const data = await fetchAllServices(effectiveLang);
      set({
        services: Array.isArray(data) ? data : data?.data ?? [],
        loading: false,
      });
    } catch (err) {
      set({ error: err?.message || "Failed to load services", loading: false });
    }
  },

  // Fetch single service details
  loadServiceDetails: async (id, lang) => {
    if (!id) return;
    const effectiveLang = lang ?? get().lang ?? "en";
    set({ loading: true, error: null });
    try {
      const data = await getServiceDetails(id, effectiveLang);
      set((state) => ({
        serviceDetails: { ...state.serviceDetails, [id]: data?.data ?? data },
        loading: false,
      }));
    } catch (err) {
      set({
        error: err?.message || "Failed to load service details",
        loading: false,
      });
    }
  },
}));
