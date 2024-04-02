import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

export const getUsers = () => async (dispatch, getState) => {
    try {
        dispatch({ type: "GET_USERS_PENDING" });
        const res = await axios.get(base_url + "/users");
        dispatch({ type: "GET_USERS_SUCCESS", payload: res.data.data });
    } catch (err) {
        console.log(err?.message ? err.message : err);
        dispatch({ type: "GET_USERS_ERROR" });
    }
};
