import { useEffect, useState } from "react";
import useUserhook from "../utils/useUserhook";

const User = (props) => {
  // const { name, location, email } = props;
  const  gitData = useUserhook(0); 

  const fetchData = async () => {
    const data = await fetch(GITHUB_USER_DATA);
    const json = await data.json();
    setGitData(json)
    console.log(json);
  };

  const {name,location,company,avatar_url,bio,id} = gitData;

  return (
    <div className="user-card">
      <img src={avatar_url}/>
      <h2>Id : {id}</h2>
      <h2>Name : {name}</h2>
      <h2>Bio : {bio}</h2>
      <h2>Location : {location}</h2>
      <h3>Company : {company}</h3>
    </div>
  );
};

export default User;
