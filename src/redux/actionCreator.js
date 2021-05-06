import { FETCH_USERS } from "./actionTypes";
import axios from "axios";

export const fetchUser = data => {
  return {
    type: FETCH_USERS,
    payload: data
  };
};

export const fetchUsersFromGit = () => {
  return dispatch => {
    axios
      .get("https://api.github.com/users")
      .then(res => {
        const users = res.data.map(u => ({
          login: u.login,
          id: u.id,
          photo: u.avatar_url
        }));
        console.log('USERS:', users)
        dispatch(fetchUser(users));
      })
      .catch(err => console.log(err.message));
  };
};
