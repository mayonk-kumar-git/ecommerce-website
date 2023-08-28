import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserInfo from "../customDatatype/UserInfo";
import { auth, db } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

interface CartState {
  user: UserInfo;
  isLoggedIn: boolean;
}

interface SignUpUserProps {
  userInfo: {
    name: string;
    phone: string;
    mailId: string;
    password: string;
    address: string;
    city: string;
    country: string;
    zip: string;
  };
  setIsLoading: (arg0: boolean) => void;
}
interface SignInUserProps {
  userInfo: {
    mailId: string;
    password: string;
  };
  setIsLoading: (arg0: boolean) => void;
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

const initialState: CartState = {
  user: emptyUserInfo,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    signUpUser: (state, action: PayloadAction<SignUpUserProps>) => {
      action.payload.setIsLoading(true);
      const userInfo = action.payload.userInfo;
      createUserWithEmailAndPassword(auth, userInfo.mailId, userInfo.password)
        .then(async (response) => {
          console.log(response.user);
          state.user._id = response.user.uid;
          const ref = doc(db, "userInfoDB", response.user.uid);
          setDoc(ref, userInfo)
            .then((res) => {
              console.log("user data stored successfully");
            })
            .catch((err) => {
              console.error("error in db: ", err.message);
            });
        })
        .catch((error) => {
          console.error("error in auth: ", error.message);
        });

      state.user.name = userInfo.name;
      state.user.phone = userInfo.phone;
      state.user.mailId = userInfo.mailId;
      state.user.password = userInfo.password;
      state.user.address = userInfo.address;
      state.user.city = userInfo.city;
      state.user.country = userInfo.country;
      state.user.zip = userInfo.zip;

      action.payload.setIsLoading(false);
    },
    signInUser: (state, action: PayloadAction<SignInUserProps>) => {
      action.payload.setIsLoading(true);
      const userInfo = action.payload.userInfo;
      signInWithEmailAndPassword(auth, userInfo.mailId, userInfo.password)
        .then(async (response) => {
          console.log(response.user);
          state.user._id = response.user.uid;
          const ref = doc(db, "userInfoDB", response.user.uid);
          getDoc(ref)
            .then((res) => {
              console.log("user data found", res.data());
            })
            .catch((err) => {
              console.error("error in db: ", err.message);
            });
        })
        .catch((error) => {
          console.error("error in auth: ", error.message);
        });

      action.payload.setIsLoading(false);
    },
  },
});

export const { signUpUser } = userSlice.actions;
export default userSlice.reducer;
