import axiosInstance from "./api";

const getDeadlines = async () => {
  try {
    const response = await axiosInstance.get('/api/deadlines');
    return response.data;
  } catch (error) {
    console.error("Error fetching deadlines:", error);
    throw error;
  }
};

export default getDeadlines;
