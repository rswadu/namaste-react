import { logoUrl } from "../utils/constants";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img className="logoImg" src={logoUrl} alt="" />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
