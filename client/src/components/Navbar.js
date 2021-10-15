import { useHistory } from "react-router-dom";
import styles from "./navbar.module.css";
import instagramlogo from "../assets/instagramlogo.png";
import {
  HomeOutlined,
  MessageOutlined,
  CompassOutlined,
  HeartOutlined,
  HomeFilled,
  MessageFilled,
} from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toHomePage } from "../store/actions/page";
import kacangpanjang from "../assets/kacangpanjang.jpg";

function Navbar() {
  const history = useHistory();

  const dispatch = useDispatch();

  const page = useSelector((state) => state.page);

  const onChange = (e) => {
    console.log(e);
  };

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarInnerWrapper}>
        <div className={styles.navbar}>
          <div className={styles.logoWrapper}>
            <img className={styles.logo} src={instagramlogo} alt="" />
          </div>
          <div className={styles.inputWrapper}>
            <Input placeholder="Search" allowClear onChange={onChange} />
          </div>
          <div className={styles.menuWrapper}>
            {page.page === "Home" ? (
              <HomeFilled className={styles.menuIcon} />
            ) : (
              <HomeOutlined
                className={styles.menuIcon}
                onClick={() => {
                  dispatch(toHomePage("Home"));
                  history.push("/");
                }}
              />
            )}
            {page.page === "Message" ? (
              <MessageFilled className={styles.menuIcon} />
            ) : (
              <MessageOutlined
                className={styles.menuIcon}
                onClick={() => {
                  dispatch(toHomePage("Message"));
                  history.push("/message");
                }}
              />
            )}

            <CompassOutlined className={styles.menuIcon} />
            <HeartOutlined className={styles.menuIcon} />
            <div
              className={styles.profilePicture}
              onClick={() => {
                dispatch(toHomePage("Profile"));
                history.push("/profile");
              }}
            >
              <img src={kacangpanjang} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
