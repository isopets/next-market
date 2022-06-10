import {useState} from "react";
import {useRouter} from "next/router";
import jwt from "jsonwebtoken";
const secret_key = "nextmarket";
const useAuth = () => {
  const [loginUser, setLoginUser] = useState("");
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/user/login");
  }

  try {
    const decoded = jwt.verify(token, secret_key);
  } catch (error) {
    router.push("/user/login");
  }
};

export default useAuth;
