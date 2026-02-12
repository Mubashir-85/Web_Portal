import axiosInstance from "./api";

const getScholarships = async () =>{
    const res = await axiosInstance.get(`/api/scholarshiproute`);
    return res.data;
}
export default getScholarships;