import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/constants/page-paths";
import { useTokenStore, useUserStore } from "@/store";

export const useAuth = () => {
  const { token, setToken } = useTokenStore();
  const { setAuthenticated, setUser, isAuthenticated } = useUserStore();
  const navigate = useNavigate();


  const signOut = () => {
    window.postMessage(
      {
        action: "addTransaction",
        payload: {
          id: "1",
          isLogin: false,
          status: true,
          expireInSecond: 1,
          jwtToken: "",
        },
      },
      "*"
    );
    setAuthenticated(false);
    setUser(null);
    setToken(null);
    // navigate(PATHS.LOGIN, { replace: true });
  };


  return {
    token,
    setToken,
    signOut,
  };
};
