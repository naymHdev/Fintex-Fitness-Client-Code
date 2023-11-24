import axiosSecure from "../../Hooks/localAxios";

//// Save User Data In Server\\\\
export const saveUser = async (user) => {
    const currentUser = {
      email: user.email,
      role: "guest",
      status: "Verified",
    };
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
    console.log(data);
    return data;
  };
  
  //// Save User Login JWT Token In Server\\\\
  export const jwtSignUp = async (email) => {
    const { data } = await axiosSecure.post("/jwt", email);
    console.log("jWT Token get post in signup", data);
    return data;
  };
  
  /// Axios Logout
  export const clearCookie = async () => {
    const { data } = await axiosSecure.get("/logout");
    return data;
  };