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
import { useSelector } from "react-redux";
import { Fragment, useLayoutEffect, useState } from "react";

function Navbar() {
  const history = useHistory();

  const location = useLocation();

  const path = location.pathname;

  const state = useSelector((state) => state);

  console.log(state);

  // const onChange = (e) => {
  //   console.log(e);
  // }

  function useWindowSize() {
    const [size, setSize] = useState([0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const [width] = useWindowSize();

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
          {state.auth.isLoggedIn ? (
            <div className={styles.menuWrapper}>
              {path === "/" ? (
                <>
                  <HomeFilled className={styles.menuIcon} />
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

              {path === "/create" ? (
                <PlusCircleFilled className={styles.menuIcon} />
              ) : (
                <Fragment>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    name="inputPost"
                    id="inputPost"
                    accept="image/jpeg"
                    data-test="input-feed"
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
                </Fragment>
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
          ) : (
            <p
              onClick={() => {
                history.push("/login");
              }}
              style={
                width > 640
                  ? {
                      marginBottom: 0,
                      cursor: "pointer",
                    }
                  : {
                      marginBottom: 0,
                      cursor: "pointer",
                      width: "100%",
                      textAlign: "center",
                    }
              }
            >
              Login
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
