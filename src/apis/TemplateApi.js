import axios from 'axios';
const apiurl = import.meta.env.VITE_API_URL;

export const postData = async (URL, FormData) => {
    try {
        const response = await fetch(apiurl + URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(FormData)
        });
    } catch (error) {
        console.log(error);
    }
}