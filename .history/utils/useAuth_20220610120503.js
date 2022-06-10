import {useRouter} from "next/router";
const useAuth = () => {
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (!token) {
  }
};

export default useAuth;
