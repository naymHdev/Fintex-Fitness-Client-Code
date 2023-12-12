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

// Add Forum Post && get forums

export const fitnessForums = async () => {
  const { data } = await axiosSecure.get("/forums");
  return data;
};

export const forumsData = async (postForum) => {
  const { data } = await axiosSecure.post("/forums", postForum);
  return data;
};

// Be A Trainer Routes Post && gate
export const updateTrainer = async (id) => {
  const { data } = await axiosSecure.patch(`trainers/trainer/${id}`);
  return data;
};

export const isTrainers = async () => {
  const { data } = await axiosSecure.get("/trainers/trainer");
  return data;
};
export const deleteTrainers = async (trainerId) => {
  const { data } = await axiosSecure.delete(`/trainers/${trainerId}`);
  return data;
};

export const beTrainer = async (dataInfo) => {
  const { data } = await axiosSecure.post("/trainers", dataInfo);
  return data;
};

//// Be trainer data post in user collection
export const beTrainerPost = async (applyInfo) => {
  const { data } = await axiosSecure.post("/user", applyInfo);
  return data;
};

export const beTrainerGet = async () => {
  const { data } = await axiosSecure.get("/user");
  return data;
};

// Get User Roles
export const userRoles = async () => {
  const { data } = await axiosSecure.get("/user/trainer");
  return data;
};


// Get User challenges
export const getChallenges = async () => {
  const { data } = await axiosSecure.get("/challenge");
  return data;
};

/// Post challenges
export const postChallenges = async (content) => {
  const { data } = await axiosSecure.post("/challenge", content);
  return data;
};