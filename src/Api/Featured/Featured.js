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
