import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfig";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassWord, setRegisterPassWord] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassWord
      );
    } catch (error) {
      alert("正しく入力してください");
    }
  };

  return (
    <>
      <h1>新規登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            value={registerPassWord}
            onChange={(e) => setRegisterPassWord(e.target.value)}
          />
        </div>
        <button>登録する</button>
      </form>
    </>
  );
};

export default Register;
