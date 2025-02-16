import { atom } from "recoil";
import { UserInfo } from "../../api/auth";

type RegisterInfo = {
  username?: string;
  password?: string;
  email?: string;
  uid?: string;
};

export const registerInfoState = atom({
  key: "registerInfoState",
  default: null,
});