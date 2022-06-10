import {useRouter} from "next/router";

const secret_key = "nextmarket";
const useAuth = () => {
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/user/login");
  }
};

export default useAuth;
