import User from "./User";
import UserClass from "./UserClass";

const About = () => {

   
  return (
    <div>
      <center>
        <h1>About Us</h1>
        <hr />
      </center>
      <div className="about-info">
        <h1>User Information :- </h1>
        <User name={"Shivam Butola (function)"} location={"Dehradun function"} email={"function@gmail.com"}/>
        {/* <UserClass name={"Shivam Butola (class)"} location={"Dehradun class"} email={"class@gmail.com"}/> */}
      </div>
    </div>
  );
};

export default About;
