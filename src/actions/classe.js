import api from "../services/api";

const get = async () => {
    try {
        const response = await api.get('/classe/');
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

const update = async (data) => {
    try {
        const response = await api.put('/category/update', data);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

const remove = async (data) => {
    try {
        const response = await api.delete('/classe/delete/' + data.id);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}
const create = async (data) => {
    try {
        const response = await api.post('/classe/create', data);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}
const addTimeline = async (data) => {
    try {
        const response = await api.post('/classe/add-timeline', data);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}
const addPresence = async (data) => {
    try {
        const response = await api.post('/classe/add-presence', data);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}
const deleteTimeline = async (data) => {
    try {
        const response = await api.post('/classe/remove-timeline',  data);
        return response.data;
    } catch (error) {
        return { error: error?.response?.data?.msg };
    }
}

export default {
    get, update, remove, create, addTimeline, deleteTimeline, addPresence
}