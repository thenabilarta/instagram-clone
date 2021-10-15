import loginBanner from "../../assets/instagramloginbanner.png";
import logo from "../../assets/loginlogo.png";
import styles from "./login.module.css";

function index() {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.bannerWrapper}>
        <img src={loginBanner} alt="" />
      </div>
      <div className={styles.loginBoxWrapper}>
        <div className={styles.loginBox}>
          <div className={styles.loginBoxHeader}>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
