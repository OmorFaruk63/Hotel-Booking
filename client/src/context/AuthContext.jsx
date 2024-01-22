import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialState, reducer } from "./reducer";
import axios from "axios";

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const context = createContext();

export const authContext = () => {
  return useContext(context);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [token, setToken] = useState(getCookie("userToken"));
  const login = async (data) => {
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      dispatch({ type: "LOGIN", payload: { data: res.data.details } });
      setToken(res.data.token);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    state.user
      ? localStorage.setItem("user", JSON.stringify(state?.user))
      : null;
    setCookie("userToken", token, 10);
  }, [state?.user, token]);

  const value = { state, login, token, dispatch };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
