import axios from "axios";
import { URL } from "./constants";

export const handleCreateUser = async (data: any) => {
  const options: any = {
    method: "POST",
    redirect: "follow",
    url: "https://rightfix.onrender.com/user/api/v1/create",
    data: data,
  };

  const res = await axios.request(options);

  return res;
};
