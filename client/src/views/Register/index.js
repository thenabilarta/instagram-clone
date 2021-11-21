import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button, Row, Alert, notification } from "antd";
import logo from "../../assets/loginlogo.png";
import styles from "./register.module.css";
import { REACTURL } from "../../config/env";

const Login = () => {
  const [isError, setIsError] = useState(false);

  const history = useHistory();

  const openNotificationWithIcon = (type, msg, desc) => {
    notification[type]({
      message: msg,
      description: desc,
    });
  };

  const onSubmit = (values) => {
    let dataToSubmit = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    axios
      .post(`${REACTURL}/api/users/register`, dataToSubmit)
      .then((res) => {
        console.log(res.data);
        openNotificationWithIcon("success", "Success", "User has been created");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginBoxWrapper}>
        <div className={styles.loginBox}>
          <div className={styles.loginBoxHeader}>
            <img src={logo} alt="" />
          </div>
          <div>
            <div style={{ padding: "1rem 1.5rem 0.1rem 1.5rem" }}>
              {isError && (
                <Alert
                  style={{ marginBottom: "1.5rem" }}
                  message="Username or Email already taken"
                  type="error"
                />
              )}
              <Form
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onSubmit}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Username"
                    style={{ height: 36 }}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Please input a valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Email"
                    style={{ height: 36 }}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Password"
                    style={{ height: 36 }}
                  />
                </Form.Item>
                <Form.Item>
                  <Row>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                    >
                      Submit
                    </Button>
                  </Row>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <div className={styles.registerBox}>
          Already have an account?{" "}
          <strong
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Login;
