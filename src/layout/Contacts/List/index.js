import React from "react";
import {
  Placeholder,
  List,
  Image,
  Container,
  Message,
  Header,
} from "semantic-ui-react";
import contacts from "../../../context/reducers/contacts";
import AppHeader from "../../../components/Header";
import ImageThumb from "../../../components/ImageThumb";
import Favorites from "../Favorites";

const ContactsListUI = ({
  state: {
    contacts: { loading, error, data },
  },
}) => {
  console.log("data", data);
  return (
    <div>
      <AppHeader />
      <Container>
        <Header>STARRED</Header>
        <Favorites
          favorites={data.filter((item) => item.is_favorite)}
          loading={loading}
        />
        <Header>ALL</Header>
        {loading && (
          <>
            {" "}
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </>
        )}
        {!loading && data.length === 0 && (
          <Message content="No contacts to display" />
        )}
        <List>
          {data.length > 0 &&
            data.map((contact) => (
              <List.Item key={contact.id}>
                <List.Content floated="right">
                  <span>{contact.phone_number}</span>
                </List.Content>
                <List.Content style={{ display: "flex", alignItems: "center" }}>
                  <ImageThumb
                    firstName={contact.first_name}
                    lastName={contact.last_name}
                    src={contact.contact_picture}
                    style={{ width: 45, height: 45 }}
                  />
                  <span>
                    {contact.first_name} {contact.last_name}
                  </span>
                </List.Content>
              </List.Item>
            ))}
        </List>
      </Container>
    </div>
  );
};

export default ContactsListUI;
