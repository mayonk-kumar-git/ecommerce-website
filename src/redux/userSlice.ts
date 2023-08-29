import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserInfo from "../customDatatype/UserInfo";

interface UserState {
  user: UserInfo;
  isLoggedIn: boolean;
}

interface SignUpInUserProps {
  _id: string;
  name: string;
  phone: string;
  mailId: string;
  password: string;
  address: string;
  city: string;
  country: string;
  zip: string;
}

const emptyUserInfo: UserInfo = {
  _id: "",
  name: "",
  phone: "",
  mailId: "",
  password: "",
  address: "",
  city: "",
  country: "",
  zip: "",
};

const initialState: UserState = {
  user: emptyUserInfo,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SignUpInUserProps>) => {
      const userInfo = action.payload;
      state.user._id = userInfo._id;
      state.user.name = userInfo.name;
      state.user.phone = userInfo.phone;
      state.user.mailId = userInfo.mailId;
      state.user.password = userInfo.password;
      state.user.address = userInfo.address;
      state.user.city = userInfo.city;
      state.user.country = userInfo.country;
      state.user.zip = userInfo.zip;
      //==================================================
      state.isLoggedIn = true;
    },

    removeUserInfo: (state) => {
      state.user = emptyUserInfo;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, removeUserInfo } = userSlice.actions;
export default userSlice.reducer;
