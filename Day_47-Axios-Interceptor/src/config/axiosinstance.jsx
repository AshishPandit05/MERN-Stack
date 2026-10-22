import axios from "axios";
export const axioInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axioInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  },
);
axioInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.log(error);
  },
);
// when we have multiple api then (some times)
// export const axioInstance2 = axios.create({
//   baseURL: "https://dummyjsonapi.com",
// });
