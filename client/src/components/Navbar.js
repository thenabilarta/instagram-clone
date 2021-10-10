import styles from "./navbar.module.css";
import instagramlogo from "../assets/instagramlogo.png";
import {
  HomeOutlined,
  MessageOutlined,
  CompassOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

function Navbar() {
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
            <HomeOutlined className={styles.menuIcon} />
            <MessageOutlined className={styles.menuIcon} />
            <CompassOutlined className={styles.menuIcon} />
            <HeartOutlined className={styles.menuIcon} />
            <UserOutlined className={styles.menuIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
