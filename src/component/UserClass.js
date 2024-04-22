import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
    userInfo :{
    name:"Dummy",
    location:"Default",
    company:"dump",
    bio:"tp",
    avatar_url:" https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png"
   
    }
    };
  }
  async componentDidMount() {
    //API CALL//
    const data = await fetch("https://api.github.com/users/Shvm0032");
    const json = await data.json();
    this.setState({
        userInfo:json,
    });
    // console.log(json);
  }

  render() {
    // const { name, location, email } = this.props;
    const {name,location,company,bio,avatar_url} = this.state.userInfo;
   
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h3>Company : {company}</h3>
        <h3>Bio : {bio}</h3>
      </div>
    );
  }
}
export default UserClass;
