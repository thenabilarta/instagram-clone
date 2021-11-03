/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Input, Row } from "antd";
import { CloseOutlined, RightOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import axios from "axios";
import kacangpanjang from "../../assets/kacangpanjang.jpg";
import Navbar from "../../components/Navbar";
import styles from "./create.module.css";
import { readCookie } from "../../utils/utils";

function Create({ location }) {
  console.log(location.state.media);

  const [imageAttr, setImageAttr] = useState({});
  const [imageSRC, setImageSRC] = useState({});
  const [caption, setCaption] = useState("");

  const history = useHistory();

  const file = location.state.media[0];

  const { TextArea } = Input;

  useEffect(() => {
    setImageSRC(URL.createObjectURL(file));
    setImageAttr(file);
  }, []);

  const post = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${readCookie("token")}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    formData.append("files", imageAttr);
    formData.append("caption", caption);

    axios
      .post("http://localhost:5000/api/feeds", formData, config)
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <Navbar />
      <div className="mainWrapper">
        <div className={styles.createWrapper}>
          <div className={styles.createHeader}>
            <CloseOutlined
              className={styles.menuIcon}
              onClick={() => {
                history.push("/");
              }}
            />
            <p style={{ marginBottom: 0 }}>New Post</p>
            <strong
              onClick={() => post()}
              style={{ color: "#0095f6", cursor: "pointer" }}
            >
              Share
            </strong>
          </div>
          <div className={styles.createBody}>
            <div className={styles.profilePicture}>
              <img src={kacangpanjang} alt="" />
            </div>
            <div className={styles.inputWrapper}>
              <TextArea
                autoSize={{ minRows: 3, maxRows: 5 }}
                type="text"
                placeholder="Write a caption..."
                bordered={false}
                onChange={(e) => setCaption(e.target.value)}
              />
            </div>
            <div className={styles.postImage}>
              <img src={imageSRC} alt="" />
            </div>
          </div>
          <div className={styles.createFooter}>
            <Row className={styles.footerItem}>
              <p style={{ marginBottom: 0 }}>Add Location</p>
              <RightOutlined className={styles.menuIcon} />
            </Row>
            <Row className={styles.footerItem}>
              <p style={{ marginBottom: 0 }}>Tag People</p>
              <RightOutlined className={styles.menuIcon} />
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
