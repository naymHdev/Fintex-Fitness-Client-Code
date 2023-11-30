import axiosSecure from "../../Hooks/localAxios";

//// Save User Data In Server\\\\
export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "member",
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/user/${user?.email}`, currentUser);
  // console.log(data);
  return data;
};

/// Profile Section ////
export const updateUser = async (email) => {
  const { data } = await axiosSecure.patch(`/user/${email}`);
  return data;
}

//// Save User Login JWT Token In Server\\\\
export const jwtSignUp = async (email) => {
  const { data } = await axiosSecure.post("/jwt", email);
  console.log("jWT Token get post in signup", data);
  return data;
};

/// Axios Logout with browser cookie wise =============>
export const clearCookie = async () => {
  const { data } = await axiosSecure.get("/logout");
  return data;
};

///Dashboard Trainer  Route && Fnd Role Wise User ==============>
export const getRole = async (email) => {
  const { data } = await axiosSecure.get(`/user/${email}`);
  return data?.role;
};
