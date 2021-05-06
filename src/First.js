import React from "react";
import Card from "./components/Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersFromGit } from "./redux/actionCreator";

export default function First() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(fetchUsersFromGit())}> Get Users </button>
      {
        users &&
        users.map(user => <Card user={user}/>)
      }
    </div>
  );
}
