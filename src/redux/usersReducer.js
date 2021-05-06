import { FETCH_USERS } from "./actionTypes";

const initialState = {
  loading: false,
  users: []
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export { usersReducer };
