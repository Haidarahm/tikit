import { create } from "zustand";
import { fetchAllWorks, fetchAllCases } from "../apis";

export const useWorkStore = create((set, get) => ({
  works: [],
  cases: {}, // key: workId -> cases array
  lang: undefined,
  selectedWorkId: undefined,
  loading: false,
  error: null,

  setLang: (lang) => set({ lang }),
  setSelectedWork: (id) => set({ selectedWorkId: id }),

  // Fetch list of works
  loadWorks: async (lang) => {
    const effectiveLang = lang ?? get().lang;
    set({ loading: true, error: null });
    try {
      const data = await fetchAllWorks(effectiveLang ? { lang: effectiveLang } : {});
      set({ works: Array.isArray(data) ? data : data?.data ?? [], loading: false });
    } catch (err) {
      set({ error: err?.message || "Failed to load works", loading: false });
    }
  },

  // Fetch cases for a work id
  loadCases: async (id) => {
    if (!id) return;
    set({ loading: true, error: null });
    try {
      const data = await fetchAllCases(id);
      set((state) => ({
        cases: { ...state.cases, [id]: Array.isArray(data) ? data : data?.data ?? [] },
        loading: false,
      }));
    } catch (err) {
      set({ error: err?.message || "Failed to load cases", loading: false });
    }
  },
}));


