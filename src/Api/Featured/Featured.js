import axiosSecure from "../../Hooks/localAxios";

export const allFeatured = async () => {
  const { data } = await axiosSecure.get("/featured");
  return data;
};

// testimonials
export const testimonials = async () => {
  const { data } = await axiosSecure.get("/testimonials");
  return data;
};

// Newsletters get users
export const newsLetters = async (name) => {
  const { data } = await axiosSecure.post("/newsletters", name);
  return data;
};

// Add Classes get users
export const addClasses = async (info) => {
  const { data } = await axiosSecure.post("/classes", info);
  return data;
};
export const trainerClasses = async () => {
  const { data } = await axiosSecure.get("/classes");
  return data;
};
