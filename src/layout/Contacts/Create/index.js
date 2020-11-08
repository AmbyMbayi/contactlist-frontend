import React, { useRef } from "react";
import Header from "../../../components/Header";
import {
  Grid,
  Header as SemanticHeader,
  Card,
  Form,
  Button,
  Select,
  Icon,
  Image,
} from "semantic-ui-react";
import "./index.css";
import countries from "../../../utils/countries";
import { Prompt } from "react-router-dom";

const CreateContact = ({
  onChange,
  onSubmit,
  formInvalid,
  loading,
  formIsHalfFilled,
  onImageChange,
  tempFile,
}) => {
  const imagePickRef = useRef(null);
  const chooseImage = () => {
    if (imagePickRef.current) {
      imagePickRef.current.click();
    }
  };
  return (
    <div>
      <Prompt
        when={formIsHalfFilled}
        message={JSON.stringify({
          header: "Confirm",
          content: "You have unsaved changes, sure you want to leave?",
        })}
      />
      <Header />
      <Grid centered>
        <Grid.Column className="form-column">
          <SemanticHeader>create Contact</SemanticHeader>
          <Card fluid>
            <Card.Content>
              <Form unstackable>
                <input
                  onChange={onImageChange}
                  ref={imagePickRef}
                  type="file"
                  hidden
                />

                <div className="image-wrapper">
                  {tempFile && (
                    <Image className="contact-picture" src={tempFile} />
                  )}
                  {!tempFile && (
                    <div onClick={chooseImage} className="contact-picture">
                      <span>choose picture</span>
                    </div>
                  )}
                  <Icon name="pencil" onClick={chooseImage} />
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
                <Button
                  primary
                  type="submit"
                  onClick={onSubmit}
                  disabled={formInvalid || loading}
                  loading={loading}
                >
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
