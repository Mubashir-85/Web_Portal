import axiosInstance from "./api";

// const getExams = async() => {
//     try{
//         const response = await axiosInstance.get('/exams');
//         return response.data;
//     }catch(error){
//         console.error("Error fetching exams data:", error);
//         throw error;
//     }
// }
const getExams = async() =>{
    try{
        const response = await axiosInstance.get('/api/examsroutes');
        return response.data;
    }catch(error){
        console.error("Error fetching exams data:", error);
        throw error;
    }
}
export default getExams;

