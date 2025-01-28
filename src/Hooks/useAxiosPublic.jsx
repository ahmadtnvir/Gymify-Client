import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://gymify-server-dusky.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
