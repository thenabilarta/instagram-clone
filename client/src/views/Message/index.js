/* eslint-disable array-callback-return */
import { useState, useEffect, Fragment } from "react";
import { Row, Button } from "antd";
import axios from "axios";
import { MessageOutlined, SendOutlined } from "@ant-design/icons";
import Navbar from "../../components/Navbar";
import styles from "./message.module.css";
import { readCookie } from "../../utils/utils";
import socket from "../../socket";
import moment from "moment";
import { useSelector } from "react-redux";

function Message() {
  const [hasMessage, setHasMessage] = useState(false);
  const [userList, setUserList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [chosedChat, setChosedChat] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchUser();
    socket.connect();
    socket.on("private message", (res) => {
      const msgData = [];
      let dayData = [];
      let currentDay;
      res.forEach((r, index) => {
        console.log("a", moment(r.date, "DD-MM-YYYYTHH-mm-ss"));
        console.log("b", moment(r.date, currentDay));
        console.log(
          "c",
          moment(r.date, "DD-MM-YYYYTHH-mm-ss").isSame(currentDay, "year")
        );
        if (index === 0) {
          console.log("index0");
          currentDay = moment(r.date, "DD-MM-YYYYTHH-mm-ss").format(
            "DD-MM-YYYY"
          );

          dayData.push(r);
        } else {
          console.log(index);
          const curdate = moment(r.date, "DD-MM-YYYYTHH-mm-ss").format(
            "DD-MM-YYYY"
          );
          if (moment(curdate).isSame(currentDay, "day")) {
            console.log("SAME DAY");
            dayData.push(r);
          } else {
            currentDay = moment(r.date, "DD-MM-YYYYTHH-mm-ss").format(
              "DD-MM-YYYY"
            );
            msgData.push(dayData);
            dayData = [];
            dayData.push(r);
          }
        }
      });
      console.log("msgData", msgData);
      setMessageList(msgData);
      // setMessageList(res);
    });
  }, []);

  const auth = useSelector((state) => state.auth);

  function getUserProfileImage(id) {
    let src;
    userList.map((u) => {
      if (u.id === id) {
        src = u.profilePictureSRC;
      }
    });
    return src;
  }

  const fetchUser = () => {
    axios
      .get("http://localhost:5000/api/users", {
        headers: {
          Authorization: `Bearer ${readCookie("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUserList(res.data);
      });
  };

  const renderChatBox = () => {
    return (
      <>
        {messageList.map((m, index) => {
          return m.map((d, index2) => {
            if (
              d._to === auth.id.toString() &&
              d._from === chosedChat.toString()
            ) {
              return (
                <Fragment key={index2}>
                  {index2 === 0 && (
                    <div className={styles.date}>
                      {moment(d.date, "DD-MM-YYYYTHH-mm-ss").format("LLL")}
                    </div>
                  )}
                  <div className={styles.chat} key={index}>
                    <div className={styles.profileImageWrapper}>
                      <img
                        src={getUserProfileImage(parseInt(d._from))}
                        alt=""
                        className={styles.profileImage}
                      />
                    </div>
                    <div className={styles.text}>{d.content}</div>
                  </div>
                </Fragment>
              );
            }

            if (
              d._from === auth.id.toString() &&
              d._to === chosedChat.toString()
            ) {
              return (
                <Fragment key={index2}>
                  {index2 === 0 && (
                    <div className={styles.date}>
                      {moment(d.date, "DD-MM-YYYYTHH-mm-ss").format("LLL")}
                    </div>
                  )}
                  <div className={styles.chatUser} key={index}>
                    <div className={styles.textUser}>{d.content}</div>
                  </div>
                </Fragment>
              );
            }
          });
          // if (
          //   d._to === auth.id.toString() &&
          //   d._from === chosedChat.toString()
          // ) {
          //   return (
          //     <Fragment key={index}>
          //       <div className={styles.date}>
          //         {moment(d.date, "DD-MM-YYYYTHH-mm-ss").format("LLL")}
          //       </div>
          //       <div className={styles.chat} key={index}>
          //         <div className={styles.profileImageWrapper}>
          //           <img
          //             src={getUserProfileImage(parseInt(d._from))}
          //             alt=""
          //             className={styles.profileImage}
          //           />
          //         </div>
          //         <div className={styles.text}>{d.content}</div>
          //       </div>
          //     </Fragment>
          //   );
          // }

          // if (
          //   d._from === auth.id.toString() &&
          //   d._to === chosedChat.toString()
          // ) {
          //   return (
          //     <Fragment key={index}>
          //       <div className={styles.date}>
          //         {moment(d.date, "DD-MM-YYYYTHH-mm-ss").format("LLL")}
          //       </div>
          //       <div className={styles.chatUser} key={index}>
          //         <div className={styles.textUser}>{d.content}</div>
          //       </div>
          //     </Fragment>
          //   );
          // }
        })}
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="mainWrapper">
        <div className={styles.messageWrapper}>
          <div className={styles.leftWrapper}>
            <Row className={styles.leftHeader}>username</Row>
            <Row className={styles.leftTitle}>Messages</Row>
            <div className={styles.userListWrapper}>
              {userList.map((u) => {
                if (u.id !== auth.id) {
                  return (
                    <div
                      className={styles.userListBox}
                      style={{
                        cursor: "pointer",
                        backgroundColor:
                          chosedChat === u.id ? "#efefef" : "#fff",
                      }}
                      key={u.id}
                      onClick={() => {
                        setChosedChat(u.id);
                        setHasMessage(true);
                      }}
                    >
                      <div className={styles.profilePictureWrapper}>
                        <img src={u.profilePictureSRC} alt="" />
                      </div>
                      <div className={styles.userListChat}>
                        <p>{u.username}</p>
                        <p>Active Today</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className={styles.rightWrapper}>
            {!hasMessage ? (
              <div className={styles.messageBanner}>
                <MessageOutlined className={styles.icon} />
                <p className={styles.h1}>Your Messages</p>
                <p className={styles.h2}>
                  Send private messages to your friend
                </p>
                <Button type="primary" onClick={() => setHasMessage(true)}>
                  Send Message
                </Button>
              </div>
            ) : (
              <>
                <Row
                  className={styles.rightHeader}
                  onClick={() => setHasMessage(false)}
                >
                  username
                </Row>
                <div className={styles.chatbox}>
                  {/* <div className={styles.date}>August 15, 1946 10:16 am</div>
                  <div className={styles.chatUser}>
                    <div className={styles.textUser}>Lorem, ipsum dolor.</div>
                  </div> */}
                  {renderChatBox()}
                  {/* <div className={styles.chat}>
                    <div className={styles.profileImage}></div>
                    <div className={styles.text}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Minus sed sunt dolor tenetur deleniti quos ipsum
                      architecto, et nisi cupiditate voluptatum vitae dolorem
                      ad, ut perferendis sequi nemo, ullam explicabo!
                    </div>
                  </div>
                  <div className={styles.chat}>
                    <div className={styles.profileImage}></div>
                    <div className={styles.text}>
                      Lorem ipsum, dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className={styles.chatUser}>
                    <div className={styles.textUser}>Lorem, ipsum dolor.</div>
                  </div>
                  <div className={styles.chat}>
                    <div className={styles.profileImage}></div>
                    <div className={styles.text}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Minus sed sunt dolor tenetur deleniti quos ipsum
                      architecto, et nisi cupiditate voluptatum vitae dolorem
                      ad, ut perferendis sequi nemo, ullam explicabo!
                    </div>
                  </div>
                  <div className={styles.chat}>
                    <div className={styles.profileImage}></div>
                    <div className={styles.text}>
                      Lorem ipsum, dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className={styles.chatUser}>
                    <div className={styles.textUser}>Lorem, ipsum dolor.</div>
                  </div> */}
                </div>
                <div className={styles.chatInputWrapper}>
                  <div className={styles.chatInput}>
                    <input
                      type="text"
                      className={styles.input}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message..."
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          socket.emit("private message", {
                            content: message,
                            from: auth.id,
                            to: chosedChat,
                            date: moment().format("DD-MM-YYYYTHH-mm-ss"),
                          });
                          setMessage("");
                        }
                      }}
                    />
                    <SendOutlined
                      className={styles.sendIcon}
                      onClick={() => {
                        socket.emit("private message", {
                          content: message,
                          from: auth.id,
                          to: chosedChat,
                          date: moment().format("DD-MM-YYYYTHH-mm-ss"),
                        });
                        setMessage("");
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
