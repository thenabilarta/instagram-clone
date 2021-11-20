/* eslint-disable array-callback-return */
import { useState, useEffect, Fragment, useRef } from "react";
import { Row, Button } from "antd";
import axios from "axios";
import { MessageOutlined, SendOutlined } from "@ant-design/icons";
import Navbar from "../../components/Navbar";
import styles from "./message.module.css";
import { readCookie } from "../../utils/utils";
import moment from "moment";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

function Message() {
  const [hasMessage, setHasMessage] = useState(false);
  const [userList, setUserList] = useState([]);
  const [_messageList, _setMessageList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [chosedChat, setChosedChat] = useState(null);
  const [chosedChatUsername, setChosedChatUsername] = useState("");
  const [message, setMessage] = useState("");

  const URL = "http://localhost:5000";
  const socket = useRef(null);

  const divRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchUser();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      socket.current = io(URL, { autoConnect: false });
      socket.current.connect();
      socket.current.on("private message", (res) => {
        _setMessageList(res);
      });
      socket.current.onAny((event, ...args) => {
        console.log(event, args);
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (chosedChat) {
      userList.map((u) => {
        if (u.id === chosedChat) {
          setChosedChatUsername(u.username);
        }
      });
    }

    const msgData = [];
    let currentDate;
    _messageList.forEach((m, index) => {
      if (m._to === auth.id.toString() || m._from === auth.id.toString()) {
        if (chosedChat !== null) {
          if (
            m._to === chosedChat.toString() ||
            m._from === chosedChat.toString()
          ) {
            if (msgData.length === 0) {
              currentDate = moment(m.date, "DD-MM-YYYYTHH-mm-ss");
              msgData.push({ ...m, showDate: true });
            } else if (index !== 0) {
              if (
                moment(currentDate).isSame(
                  moment(m.date, "DD-MM-YYYYTHH-mm-ss"),
                  "day"
                )
              ) {
                msgData.push({ ...m, showDate: false });
              } else {
                currentDate = moment(m.date, "DD-MM-YYYYTHH-mm-ss");
                msgData.push({ ...m, showDate: true });
              }
            }
          }
        }
      }
    });
    setMessageList(msgData);
  }, [_messageList, auth.id, chosedChat, userList]);

  useEffect(() => {
    if (divRef.current !== null && messageList.length > 0) {
      divRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messageList]);

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
        setUserList(res.data);
      });
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
                  {chosedChatUsername}
                </Row>
                <div className={styles.chatbox}>
                  {messageList.map((d, index) => {
                    if (
                      d._to === auth.id.toString() &&
                      d._from === chosedChat.toString()
                    ) {
                      return (
                        <Fragment key={index}>
                          {d.showDate && (
                            <div className={styles.date}>
                              {moment(d.date, "DD-MM-YYYYTHH-mm-ss").format(
                                "dddd, MMMM Do YYYY"
                              )}
                            </div>
                          )}

                          <div className={styles.chat}>
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
                        <Fragment key={index}>
                          {d.showDate && (
                            <div className={styles.date}>
                              {moment(d.date, "DD-MM-YYYYTHH-mm-ss").format(
                                "dddd, MMMM Do YYYY"
                              )}
                            </div>
                          )}
                          <div className={styles.chatUser}>
                            <div className={styles.textUser}>{d.content}</div>
                          </div>
                        </Fragment>
                      );
                    }
                  })}
                  <div ref={divRef}></div>
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
                          console.log(message);
                          socket.current.emit("private message", {
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
                        socket.current.emit("private message", {
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
