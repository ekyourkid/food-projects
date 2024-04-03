import { combineReducers } from "redux";
import auth from "./auth";
import recipes from "./recipes";
import recipes_post from "./recipes_post";
import users from "./users";
import recipes_delete from "./recipes_delete";
import recipes_update from "./recipes_update";
import recipes_detail from "./recipes_detail";

const rootReducers = combineReducers({
    auth,
    recipes,
    recipes_post,
    recipes_delete,
    recipes_update,
    recipes_detail,
    users,
});

export default rootReducers;
