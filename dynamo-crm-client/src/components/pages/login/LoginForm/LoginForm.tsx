import { Card, Form, Flex, Typography, Button, Input } from "antd";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";

import useLoginForm from "./useLoginForm";
import { APP_ROUTES } from "src/constants";

const LoginForm = () => {
  const { control, errors, handleSubmit, onSubmit } = useLoginForm();
  return (
    <Card
      style={{
        width: 400,
        maxWidth: 600,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      title="Sign In"
    >
      <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
        <Form.Item
          label="User Name"
          validateStatus={errors.user_name ? "error" : ""}
          help={errors.user_name?.message}
        >
          <Controller
            name="user_name"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input.Password {...field} />}
          />
        </Form.Item>

        <Flex justify="space-between">
          <Typography.Text>
            Don't have an account? <Link to={APP_ROUTES.signup}>Sign Up</Link>
          </Typography.Text>
          <Form.Item>
            <Button size="middle" type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </Card>
  );
};

export default LoginForm;
