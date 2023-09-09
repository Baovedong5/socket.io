import { useEffect } from "react";
import { getMe } from "./api";
const Me = () => {
  useEffect(() => {
    getMe().then((res) => {
      localStorage.setItem("profile", JSON.stringify(res.data.data));
    });
  }, []);

  return <>Get me successfully</>;
};

export default Me;
