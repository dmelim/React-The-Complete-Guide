import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* This Link component works the same as the a tag,
            but guarantees the page doesen't refresh, 
            maintaining react state if needed  */}
            {/*<Link to="/welcome">Welcome</Link>*/}
            {/* This NavLink component works the same as the Link component,
            but enables the use of the activeClassName css property  */}
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
