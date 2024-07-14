import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderValidationSchema } from "./useOrderForm";
import { Input, Select, Checkbox, Button, Form, Row, Col, Flex } from "antd";
import TextArea from "antd/es/input/TextArea";

const { Option } = Select;

const OrderForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrder>({
    resolver: zodResolver(orderValidationSchema),
  });

  const onSubmit = (data: IOrder) => {
    console.log(data);
  };

  return (
    <Form
      onFinish={handleSubmit(onSubmit)}
      layout="vertical"
      className="order-form"
    >
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            label="Order Name"
            validateStatus={errors.order_name ? "error" : ""}
            help={errors.order_name?.message}
          >
            <Controller
              name="order_name"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Order Type"
            validateStatus={errors.order_type ? "error" : ""}
            help={errors.order_type?.message}
          >
            <Controller
              name="order_type"
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  <Option value="digitizing">Digitizing</Option>
                  <Option value="vector">Vector</Option>
                </Select>
              )}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Number of Colors"
            validateStatus={errors.number_of_colors ? "error" : ""}
            help={errors.number_of_colors?.message}
          >
            <Controller
              name="number_of_colors"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Digitize Properties"
        validateStatus={errors.digitize_properties ? "error" : ""}
        help={errors.digitize_properties?.message}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Controller
              name="digitize_properties.digitize_type"
              control={control}
              render={({ field }) => (
                <Select {...field} placeholder="Select Digitize Type">
                  <Option value="hat_logo">Hat Logo</Option>
                  <Option value="left_chest">Left Chest</Option>
                  <Option value="middle_left_chest">Middle Left Chest</Option>
                  <Option value="jacket_bag">Jacket Bag</Option>
                </Select>
              )}
            />
          </Col>
          <Col span={6}>
            <Controller
              name="digitize_properties.height"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Height" />}
            />
          </Col>
          <Col span={6}>
            <Controller
              name="digitize_properties.width"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Width" />}
            />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={12}>
            <Controller
              name="digitize_properties.fabric"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Fabric" />}
            />
          </Col>
          <Col span={12}>
            <Controller
              name="digitize_properties.placement"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Placement" />
              )}
            />
          </Col>
        </Row>
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Flex>
            <Form.Item
              label="Gradient"
              valuePropName="checked"
              validateStatus={errors.gradient ? "error" : ""}
              help={errors.gradient?.message}
            >
              <Controller
                name="gradient"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            </Form.Item>
            <Form.Item
              label="Rush"
              valuePropName="checked"
              validateStatus={errors.rush ? "error" : ""}
              help={errors.rush?.message}
            >
              <Controller
                name="rush"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            </Form.Item>
          </Flex>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Additional Instruction"
            validateStatus={errors.additional_instruction ? "error" : ""}
            help={errors.additional_instruction?.message}
          >
            <Controller
              name="additional_instruction"
              control={control}
              render={({ field }) => <TextArea {...field} rows={4} />}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderForm;
