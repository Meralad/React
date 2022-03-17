import {Link} from 'react-router-dom'
import React from 'react';
import 'antd/dist/antd.css';
import { useState } from 'react';
import {
  Form,
  Select,
  Radio,
  Button,
  InputNumber,
  Input
  } from 'antd';

const { Option } = Select;

const RegisterPage = () => {
    const [checked, setChecked] = useState(false)
    
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };

return (
    <Form
      name="validate_other"
      onFinish={onFinish}
    >
         <Form.Item
      wrapperCol={{
        offset: 7,
      }}
     > 
        <h1>Register</h1>
     </Form.Item>

     <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        name="password1"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        name="password2"
        rules={[
          {
            required: true,
            message: 'Repeat your password!',
          },
        ]}
      >
        <Input
          text="password"
          placeholder="Repeat your password!"
        />
      </Form.Item>

      <Form.Item
        name="select"
        label="Country"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please select your country!',
          },
        ]}
      >
        <Select placeholder="Please select a country">
          <Option value="belarus">Belarus</Option>
          <Option value="russia">Russia</Option>
          <Option value="usa">U.S.A</Option>
        </Select>
      </Form.Item>

    <Form.Item label="Your age?">
        <InputNumber />
      </Form.Item>

      <Form.Item 
      name="radio-group" label="Your gender?:">
        <Radio.Group>
          <Radio value="man">Male</Radio>
          <Radio value="woman">Female</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Do you have any account?"> 
         <input 
         type="checkbox"
         checked={checked}
         onChange={() => setChecked(!checked)}
         />
     </Form.Item>
 
      <Form.Item
        wrapperCol={{
          offset: 7,
        }}
      >
        <Button type="primary" htmlType="submit">
            Register
        </Button>
      </Form.Item>

     <Form.Item
      wrapperCol={{
        offset: 1,
      }}
     > 
         <h4>Already have an account? <Link to='/'>Sing in</Link></h4>
     </Form.Item>
    </Form>

    );
};

export default RegisterPage