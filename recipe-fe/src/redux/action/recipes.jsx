import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZjNTZjYWMzLWI4ZTAtNGQ4Mi1iYjUwLTA5OTMzMDYwNThiMiIsInVzZXJuYW1lIjoidGVzdDYiLCJhZGRyZXNzIjoiamFnYWthcnNhIiwiaWF0IjoxNzExNzQyNDkwLCJleHAiOjE3MTE4Mjg4OTB9.zDIEwy1cmG4ejicqdrQYkI1wa34WfgN-Jx5ijH6fxZA";

export const getRecipe = () => async (dispatch, getState) => {
    try {
        dispatch({ type: "GET_RECIPE_PENDING" });
        const res = await axios.get(base_url + "/recipes");
        dispatch({ type: "GET_RECIPE_SUCCESS", payload: res.data.data });
    } catch (err) {
        console.log(err?.message ? err.message : err);
        dispatch({ type: "GET_RECIPE_ERROR" });
    }
};

export const postRecipe = (data, navigate) => async (dispatch, getState) => {
    try {
        dispatch({ type: "POST_RECIPE_PENDING" });
        const res = await axios.post(base_url + "/recipes", data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });
        console.log("res");
        console.log(res);
        if (res.data.code)
            dispatch({ type: "POST_RECIPE_SUCCESS", payload: res.data });
        navigate("/home");
    } catch (err) {
        console.log("err");
        console.log(err);
        dispatch({
            type: "POST_RECIPE_ERROR",
            payload: err?.response?.data?.message ?? "post recipe error",
        });
    }
};
