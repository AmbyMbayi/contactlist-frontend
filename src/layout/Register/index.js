import React from "react";
import {
  Form,
  Button,
  Grid,
  Header as SemanticHeader,
  Segment,
} from "semantic-ui-react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const RegisterUI = ({
  form: { onChange, form, registerFormValid, onSubmit, loading, fieldErrors },
}) => {
  return (
    <div>
      <Header />

      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Sign up here</SemanticHeader>
          <Segment>
            <Form>
              <Form.Field>
                <Form.Input
                  name="username"
                  placeholder="Username"
                  label="Username"
                  type="text"
                  value={form.username || ""}
                  onChange={onChange}
                  error={
                    fieldErrors.username && {
                      content: fieldErrors.username,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  name="firstName"
                  placeholder="First Name"
                  label="First Name"
                  type="text"
                  value={form.firstName || ""}
                  onChange={onChange}
                  error={
                    fieldErrors.first_name && {
                      content: fieldErrors.first_name,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  name="lastName"
                  placeholder="Last Name"
                  label="Last Name"
                  type="text"
                  value={form.lastName || ""}
                  onChange={onChange}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  name="email"
                  placeholder="Email"
                  label="Email"
                  type="email"
                  value={form.email || ""}
                  onChange={onChange}
                  error={
                    fieldErrors.email && {
                      content: fieldErrors.email,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  name="password"
                  placeholder="password"
                  label="Password"
                  type="password"
                  value={form.password || ""}
                  onChange={onChange}
                  error={
                    fieldErrors.password && {
                      content: fieldErrors.password,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>

              <Button
                onClick={onSubmit}
                primary
                type="submit"
                disabled={registerFormValid || loading}
                loading={loading}
              >
                Submit
              </Button>
            </Form>
            <Segment>
              Aleady Have an Account? <Link to="/auth/login">Login</Link>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default RegisterUI;
