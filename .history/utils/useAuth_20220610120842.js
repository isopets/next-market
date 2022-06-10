import {useRouter} from "next/router";
import jwt from "jsonwebtoken";
const secret_key = "nextmarket";
const useAuth = () => {
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/user/login");
  }
};

export default useAuth;
