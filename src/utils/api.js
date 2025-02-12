import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${apiUrl}${url}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
            },
        });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return { error: true, message: error.message };
    }
};
