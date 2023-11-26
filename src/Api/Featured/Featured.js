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

// Newsletters get & post all subscribers under home pages users
export const subscribers = async () => {
  const { data } = await axiosSecure.get("/newsletters");
  return data;
};

export const newsLetters = async (name) => {
  const { data } = await axiosSecure.post("/newsletters", name);
  return data;
};

// Add Classes && get classes
export const addClasses = async (info) => {
  const { data } = await axiosSecure.post("/classes", info);
  return data;
};
export const trainerClasses = async () => {
  const { data } = await axiosSecure.get("/classes");
  return data;
};
