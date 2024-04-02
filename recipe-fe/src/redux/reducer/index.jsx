import { combineReducers } from "redux";
import auth from "./auth";
import recipes from "./recipes";
import recipes_post from "./recipes_post";
import users from "./users";

const rootReducers = combineReducers({
    auth,
    recipes,
    recipes_post,
    users,
});

export default rootReducers;
