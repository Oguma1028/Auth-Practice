import React from "react";
import { useState } from "react";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassWord, setRegisterPassWord] = useState("");
  return (
    <>
      <h1>新規登録</h1>
      <form>
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
