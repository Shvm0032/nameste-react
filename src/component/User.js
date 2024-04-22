import { useEffect, useState } from "react";
import useUserhook from "../utils/useUserhook";

const User = (props) => {
  // const { name, location, email } = props;
  const  gitData = useUserhook(0); 

  const fetchData = async () => {
    const data = await fetch(GITHUB_USER_DATA);
    const json = await data.json();
    setGitData(json)
    // console.log(json);
  };

  const {name,location,company,avatar_url,bio,id} = gitData;

  return (
    <div className="user-card p-5 border border-solid border-gray-500 w-[500px] rounded-lg">
      <img className="rounded-md" src={avatar_url}/>
      <h2 className="p-3 text-lg">Id : <span className="text-fuchsia-700">{id}</span></h2>
      <h2 className="p-3">Name : <span className="text-fuchsia-700">{name}</span></h2>
      <h2 className="p-3">Bio : <span className="text-fuchsia-700">{bio}</span></h2>
      <h2 className="p-3">Location :  <span className="text-fuchsia-700">{location}</span></h2>
      <h3 className="p-3">Company :  <span className="text-fuchsia-700">{company}</span></h3>
    </div>
  );
};

export default User;
