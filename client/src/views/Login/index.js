import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Row, Alert } from "antd";
import { useDispatch } from "react-redux";
import axios from "axios";
import loginBanner from "../../assets/instagramloginbanner.png";
import logo from "../../assets/loginlogo.png";
import styles from "./login.module.css";

const Login = () => {
  const [isError, setIsError] = useState(false);
  const [imageListCounter, setImageListCounter] = useState(0);

  const history = useHistory();

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    console.log(values);

    let dataToSubmit = {
      username: values.username,
      password: values.password,
    };

    axios
      .post("http://localhost:5000/api/users/login", dataToSubmit)
      .then((res) => {
        console.log(res.data);
      });

    // setIsError(false);

    // dispatch(login(dataToSubmit)).then((res) => {
    //   if (!res.payload.loggedIn) {
    //     setIsError(true);
    //   } else {
    //     document.cookie = `token=${res.payload.token};`;
    //     window.location.href = "/";
    //   }
    // });
  };

  const imageList = [
    "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
  ];

  setTimeout(() => {
    if (imageListCounter === imageList.length - 1) {
      setImageListCounter(0);
    } else {
      setImageListCounter(imageListCounter + 1);
    }
  }, 5000);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleForgotPassword = () => {
    history.push("/forgot-password");
  };
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.bannerWrapper}>
        <img className={styles.outerBanner} src={loginBanner} alt="" />
        <div className={styles.innerBanner}>
          <img src={imageList[imageListCounter]} alt="" />
        </div>
      </div>
      <div className={styles.loginBoxWrapper}>
        <div className={styles.loginBox}>
          <div className={styles.loginBoxHeader}>
            <img src={logo} alt="" />
          </div>
          <div>
            <div style={{ padding: "1rem 1.5rem 0.1rem 1.5rem" }}>
              {isError && (
                <Alert
                  style={{ margin: "0.5rem 0" }}
                  message="Username or Password not found."
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
              <Row>
                <Button
                  style={{ padding: 0, fontSize: 12, margin: "auto" }}
                  type="link"
                  onClick={handleForgotPassword}
                >
                  Forgot your password?
                </Button>
              </Row>
            </div>
          </div>
        </div>
        <div className={styles.registerBox}>
          Don't have an account?{" "}
          <strong
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              history.push("/register");
            }}
          >
            Sign up
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Login;