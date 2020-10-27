import React from "react";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Menu secondary pointing>
        <Image src={logo} width={60} />
        <Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>
          My-Contacts
        </Menu.Item>
        <Menu.Item position="right">
          <Button as={Link} to="/contacts/create" primary basic icon>
            <Icon name="add"></Icon>
            Create Contacts
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button color="red" basic icon>
            <Icon name="log out"></Icon>
            Logout
          </Button>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
