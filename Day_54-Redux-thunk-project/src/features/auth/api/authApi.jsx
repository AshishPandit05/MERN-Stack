// import { api } from "../../../config/api";

// export const loginUserApi = async (credentials) => {
//   try {
//     let res = await api.post("/auth/login", credentials);
//     localStorage.setItem("accessToken", res.data.accessToken);
//     return res.data;
//   } catch (error) {
//     console.log("error in login api", error);
//   }
// };

// export const hydrateUser = async () => {
//   let token = localStorage.getItem("accessToken");
//   try {
//     let res = await api.post("/auth/me", {
//       header: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return res.data;
//   } catch (error) {
//     console.log("error in login api", error);
//   }
// };
