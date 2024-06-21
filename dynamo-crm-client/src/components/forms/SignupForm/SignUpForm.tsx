import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";

import useSignUpForm from "./useSignUpForm";
import { APP_ROUTES } from "../../../constants";

const { Option } = Select;

const SignUpForm = () => {
  const { control, errors, handleSubmit, onSubmit } = useSignUpForm();

  return (
    <Card style={{ maxWidth: 600, margin: "1rem auto" }} title="Sign Up">
      <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
        <Row gutter={16}>
          <Col xs={24} sm={12}>
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
          </Col>
          <Col xs={24} sm={12}>
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
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Primary Email"
              validateStatus={errors.primary_email ? "error" : ""}
              help={errors.primary_email?.message}
            >
              <Controller
                name="primary_email"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Secondary Email"
              validateStatus={errors.secondary_email ? "error" : ""}
              help={errors.secondary_email?.message}
            >
              <Controller
                name="secondary_email"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Invoice Email"
              validateStatus={errors.invoice_email ? "error" : ""}
              help={errors.invoice_email?.message}
            >
              <Controller
                name="invoice_email"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Contact Name"
              validateStatus={errors.contact_name ? "error" : ""}
              help={errors.contact_name?.message}
            >
              <Controller
                name="contact_name"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Phone"
              validateStatus={errors.phone ? "error" : ""}
              help={errors.phone?.message}
            >
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="Cell">
              <Controller
                name="cell"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item label="Zip Code">
              <Controller
                name="zip_code"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="Country">
              <Controller
                name="country"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item label="City">
              <Controller
                name="city"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="Reference">
              <Controller
                name="reference"
                control={control}
                render={({ field }) => (
                  <Select {...field}>
                    <Option value="Search Engine">Search Engine</Option>
                    <Option value="Sales Manager">Sales Manager</Option>
                    <Option value="Customer Reference">
                      Customer Reference
                    </Option>
                    <Option value="Others">Others</Option>
                  </Select>
                )}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={8}>
            <Form.Item label="Address">
              <Controller
                name="address"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item
              label="Website"
              validateStatus={errors.website ? "error" : ""}
              help={errors.website?.message}
            >
              <Controller
                name="website"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item label="State">
              <Controller
                name="state"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>
        <Flex justify="space-between">
          <Typography.Text>
            Already have an account? <Link to={APP_ROUTES.login}>Sign In</Link>
          </Typography.Text>
          <Form.Item>
            <Button size="middle" type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </Card>
  );
};

export default SignUpForm;
