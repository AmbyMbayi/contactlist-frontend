import React from "react";
import Header from "../../../components/Header";
import {
  Grid,
  Header as SemanticHeader,
  Card,
  Form,
  Button,
  Select,
} from "semantic-ui-react";
import "./index.css";
import countries from "../../../utils/countries";

const CreateContact = ({ onChange }) => {
  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column className="form-column">
          <SemanticHeader>create Contact</SemanticHeader>
          <Card fluid>
            <Card.Content>
              <Form unstackable>
                <div className="contact-picture">
                  <span>choose picture</span>
                </div>
                <Form.Group widths={2}>
                  <Form.Input
                    label="First Name"
                    placeholder="First Name"
                    name="firstName"
                    onChange={onChange}
                  />
                  <Form.Input
                    label="Last Name"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    label="Country"
                    placeholder="Country"
                    name="country"
                    onChange={onChange}
                    control={Select}
                    options={countries}
                  />
                  <Form.Input
                    label="Phone Number"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Checkbox
                  label="Add to favorite"
                  name="isFavorite"
                  onChange={(e, data) => {
                    onChange(e, { name: "isFavorite", value: data.checked });
                  }}
                />
                <Button primary type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default CreateContact;
