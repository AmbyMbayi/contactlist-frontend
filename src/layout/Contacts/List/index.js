import React from "react";
import {
  Placeholder,
  List,
  Image,
  Container,
  Message,
} from "semantic-ui-react";
import contacts from "../../../context/reducers/contacts";
import Header from "../../../components/Header";

const ContactsListUI = ({
  state: {
    contacts: { loading, error, data },
  },
}) => {
  console.log("data", data);
  return (
    <div>
      <Header />
      <Container>
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
                  <Image
                    circular
                    width={45}
                    height={45}
                    src={contact.contact_picture}
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
