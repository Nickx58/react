import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

export const fetchUser = (id) => (dispatch) => {
  _fetchUsers(id, dispatch);
};

const _fetchUsers = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
});
