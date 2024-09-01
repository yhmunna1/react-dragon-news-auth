import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="" srcset="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl font-medium">
        {moment().format("dddd, MMMM Do, YYYY")}
      </p>
    </div>
  );
};

export default Header;
