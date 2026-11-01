import api from "@/lib/axios";

export const getGallery = async () => {
  const response = await api.get("/gallery");
  return response.data;
};