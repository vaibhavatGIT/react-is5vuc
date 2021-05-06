import React from 'react'


export default function Card(props) {
  console.log(props)
  const {login, id, photo} = props.user;
  console.log('login', photo)
  return (
    <div className="card">
      <h1>{id} - {login}</h1>
      <img src={photo} style={{height:"100px", width:"100px"}}/>
    </div>
  );
}
