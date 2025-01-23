import axios from 'axios';
import { ROOT_DOMAIN } from "../utils/constants";

const TemplateApi = {
    getAllTemplate: async (request) => {
        const response = await axios.post(`${ROOT_DOMAIN}/template/get-template`, request, {
            header: {
                'Content-Type': 'application/json'
            }
        })
        return response;
    },
}

export default TemplateApi;