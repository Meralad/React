import {Link} from 'react-router-dom';
import {Form, Input, Button} from 'antd';

const LoginPage = () => {
    return(
        <div>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
         <Form.Item
      wrapperCol={{
        offset: 1,
      }}
     > 
        <h1>Authorization</h1>
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
        <Input placeholder="Login" />
      </Form.Item>
      <Form.Item
        name="password"
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

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>

      <Form.Item
      wrapperCol={{
        offset: 5,
      }}
     > 
        <p>Or <Link to='register'>register now!</Link></p>
     </Form.Item>
    </Form>
    </div>
  );
    
}

export default LoginPage