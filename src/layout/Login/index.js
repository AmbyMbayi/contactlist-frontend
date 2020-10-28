import React from "react";
import {
  Form,
  Button,
  Grid,
  Header as SemanticHeader,
  Segment,
  Message,
} from "semantic-ui-react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const LoginUI = ({
  form: { onChange, form, loginFormValid, error, onSubmit, loading },
}) => {
  return (
    <div>
      <Header />

      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Login here</SemanticHeader>
          <Segment>
            <Form>
              {error && <Message content={error?.detail} negative />}
              <Form.Field>
                <Form.Input
                  name="username"
                  placeholder="Username"
                  label="Username"
                  type="text"
                  value={form.username || ""}
                  onChange={onChange}
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
                />
              </Form.Field>

              <Button
                onClick={onSubmit}
                primary
                type="submit"
                disabled={loginFormValid || loading}
                loading={loading}
              >
                Submit
              </Button>
            </Form>
            <Segment>
              Don't Have an Account? <Link to="/auth/register">Register</Link>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LoginUI;
