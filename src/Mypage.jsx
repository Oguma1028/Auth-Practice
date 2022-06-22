import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { useNavigate, Navigate } from "react-router-dom";

const Mypage = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login/");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/login`} />
          ) : (
            <>
              <h1>マイページ</h1>
              {/* ユーザーがログインしており、かつemailのデータがある場合 */}
              <p>{user && user.email}</p>
              {/* &&と意味は同じ */}
              <p>{user?.email}</p>
              <button onClick={logout}>ログアウト</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Mypage;
