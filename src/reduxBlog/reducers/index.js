import { combineReducers } from "redux";
import PostReducers from "./postReducers";
import UsersReducers from "./usersReducers";

export default combineReducers({
  posts: PostReducers,
  users: UsersReducers,
});
