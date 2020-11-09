import React, { useContext } from "react";
import { Menu, Image, Button, Icon, Input } from "semantic-ui-react";
import logo from "../../assets/images/logo.svg";
import { Link, useLocation, useHistory } from "react-router-dom";
import logout from "../../context/actions/auth/logout";
import { GlobalContext } from "../../context/Provider";
import isAuthenticated from "../../utils/isAuthenticated";
import searchContacts from "../../context/actions/contacts/searchContacts";

const Header = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { contactsDispatch: dispatch } = useContext(GlobalContext);

  const handleUserLogout = () => {
    logout(history)(dispatch);
  };
  const onChange = (e, { value }) => {
    const searchText = value.trim().replace(/" "/g, "");
    searchContacts(searchText)(dispatch);
  };
  return (
    <div>
      <Menu secondary pointing>
        <Image src={logo} width={60} />
        <Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>
          My-Contacts
        </Menu.Item>

        <Menu.Item>
          <Input placeholder="search contacts" onChange={onChange} />
        </Menu.Item>

        {pathname == "/" && (
          <Menu.Item position="right">
            <Button as={Link} to="/contacts/create" primary basic icon>
              <Icon name="add"></Icon>
              Create Contacts
            </Button>
          </Menu.Item>
        )}
        {isAuthenticated() && (
          <Menu.Item position="right">
            {" "}
            <Button onClick={handleUserLogout} color="red" basic icon>
              <Icon name="log out"></Icon>
              Logout
            </Button>
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
};

export default Header;
