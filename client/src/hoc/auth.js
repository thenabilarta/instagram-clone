/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { auth } from "../store/actions/auth";

// eslint-disable-next-line func-names
export default function (ComposedClass, loading, setLoading) {
  const history = useHistory();

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      let isMounted = true;

      if (isMounted) {
        dispatch(auth()).then((res) => {
          if (!res.payload.isLoggedIn) {
            history.push("/login");
          }
        });
      }
      return () => {
        isMounted = false;
      };
    }, []);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return (
      <ComposedClass
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        loading={loading}
        setLoading={setLoading}
      />
    );
  }
  return AuthenticationCheck;
}
