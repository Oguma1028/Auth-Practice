import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { Navigate } from "react-router-dom";
import { async } from "@firebase/util";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassWord, setLoginPassWord] = useState("");

  const [user, setUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassWord);
    } catch (error) {
      alert("メールアドレスまたはパスワードが違います");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  return (
    <>
      {user ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <h1>ログインページ</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input
                name="email"
                type="email"
                value={loginEmail}
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                name="password"
                type="password"
                value={loginPassWord}
                onChange={(e) => setLoginPassWord(e.target.value)}
              />
            </div>
            <button>ログイン</button>
          </form>
        </>
      )}
    </>
  );
};

export default Login;
