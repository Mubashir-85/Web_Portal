import axiosInstance from "./api";

const getCourses = async (page = 1, limit = 6, search = "") => {
  const res = await axiosInstance.get(
    `/api/courseroute?page=${page}&limit=${limit}&search=${search}`,
  );
  return res.data;
};
export default getCourses;
