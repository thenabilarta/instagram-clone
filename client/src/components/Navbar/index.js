import { useHistory, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import instagramlogo from "../../assets/instagramlogo.png";
import {
  HomeOutlined,
  MessageOutlined,
  HeartOutlined,
  HomeFilled,
  MessageFilled,
  PlusCircleOutlined,
  PlusCircleFilled,
} from "@ant-design/icons";
import { Input } from "antd";
import { useSelector } from "react-redux";

function Navbar() {
  const history = useHistory();

  const location = useLocation();

  const path = location.pathname;

  const state = useSelector((state) => state);

  const onChange = (e) => {
    console.log(e);
  };

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarInnerWrapper}>
        <div className={styles.navbar}>
          <div className={styles.logoWrapper}>
            <img
              onClick={() => history.push("/")}
              className={styles.logo}
              src={instagramlogo}
              alt=""
            />
          </div>
          <div className={styles.inputWrapper}>
            <Input placeholder="Search" allowClear onChange={onChange} />
          </div>
          <div className={styles.menuWrapper}>
            {path === "/" ? (
              <>
                <HomeFilled className={styles.menuIcon} />
                <input
                  type="file"
                  style={{ display: "none" }}
                  name="inputPost"
                  id="inputPost"
                  accept="image/jpeg"
                  onChange={(e) => {
                    console.log(e.target.files);
                    history.push({
                      pathname: "/create",
                      state: {
                        media: e.target.files,
                      },
                    });
                  }}
                />
                <label htmlFor="inputPost" className={styles.menuIcon}>
                  <PlusCircleOutlined />
                </label>
              </>
            ) : (
              <>
                <HomeOutlined
                  className={styles.menuIcon}
                  onClick={() => {
                    history.push("/");
                  }}
                />
              </>
            )}

            {path === "/reate" && (
              <PlusCircleFilled className={styles.menuIcon} />
            )}

            {path === "/message" ? (
              <MessageFilled className={styles.menuIcon} />
            ) : (
              <MessageOutlined
                className={styles.menuIcon}
                onClick={() => {
                  history.push("/message");
                }}
              />
            )}
            <HeartOutlined className={styles.menuIcon} />
            <div
              className={styles.profilePicture}
              onClick={() => {
                history.push("/profile");
              }}
            >
              <img src={state.auth.profilePic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
