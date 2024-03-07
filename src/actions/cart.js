import api from "../services/api";

const get = async () => {
    try {
        const response = await api.get('/cart/get');
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

const update = async (data) => {
    try {
        const response = await api.put('/cart/update', data);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

const remove = async (data) => {
    try {
        const response = await api.delete('/cart/delete', {data});
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}
const create = async (data) => {
    try {
        const response = await api.post('/cart/create', data);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

export default {
    get, update, remove, create
}