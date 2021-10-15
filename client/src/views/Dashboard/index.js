import React, { useLayoutEffect, useState } from "react";
import {
  HeartOutlined,
  CommentOutlined,
  MessageOutlined,
  BookOutlined,
} from "@ant-design/icons";
import styles from "./dashboard.module.css";
import oldtrafford from "../../assets/oldtrafford.jpg";
import kacangpanjang from "../../assets/kacangpanjang.jpg";

function index() {
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

  function ShowRightProfile(props) {
    const [width] = useWindowSize();
    let offset = (width - 935) / 2;

    if (width > 613 + 293 + 28) {
      return (
        <div
          className={styles.rightWrapper}
          style={{
            left: 613 + offset + 28,
          }}
        >
          <div className={styles.rightWrapperHeader}>
            <div className={styles.rightWrapperHeaderImageWrapper}>
              <img src={kacangpanjang} alt="" />
            </div>
            <div className={styles.rightWrapperHeaderText}>
              <p>@kacangpanjang</p>
              <p>Kacang panjang Official</p>
            </div>
          </div>
          <div className={styles.rightWrapperFooter}>
            <p>
              About Help Press API Jobs Privacy Terms Locations Top Accounts
              Hashtags Language
            </p>
            <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
          </div>
        </div>
      );
    }
  }

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.leftWrapper}>
        <div className={styles.storyWrapper}>
          <div className={styles.story}>
            <div className={styles.storyLine}>
              <div className={styles.storyImage}>
                <img src={kacangpanjang} alt="" />
              </div>
            </div>
            <div className={styles.storyUsername}>
              <p>kacangpanjang</p>
            </div>
          </div>
        </div>
        <div className={styles.feedWrapper}>
          <div className={styles.feedHeader}>
            <div className={styles.feedHeaderImageWrapper}>
              <img src={kacangpanjang} alt="" />
            </div>
            <p className={styles.feedUsername}>kacangpanjang</p>
          </div>
          <div className={styles.feed}>
            <img src={oldtrafford} alt="" />
          </div>
          <div className={styles.feedFooter}>
            <div className={styles.feedFooterIconWrapper}>
              <div>
                <HeartOutlined className={styles.feedFooterIcon} />
                <CommentOutlined className={styles.feedFooterIcon} />
                <MessageOutlined className={styles.feedFooterIcon} />
              </div>
              <div>
                <BookOutlined className={styles.feedFooterIcon} />
              </div>
            </div>
            <div className={styles.feedFooterText}>
              <div>20 likes</div>
              <div>
                <strong>anonim</strong> Joke Mingguan
              </div>
              <div>9 HOURS AGO</div>
              <div>Add a comment...</div>
            </div>
          </div>
        </div>
      </div>
      {ShowRightProfile()}
    </div>
  );
}

export default index;
