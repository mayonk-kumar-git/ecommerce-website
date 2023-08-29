import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/pageProps/Header";
import Button from "../components/designLayouts/Button";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { removeUserInfo } from "../redux/userSlice";

interface InfoBlockProps {
  label: string;
  value: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ label, value }) => {
  return (
    <div className="mb-[1rem] border-b-[1px] border-gray-500">
      <div className="capitalize">{label}</div>
      <div className="font-bold">{value}</div>
    </div>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => state.userReducer.user);
  const isLoggedIn = useSelector((state: any) => state.userReducer.isLoggedIn);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(removeUserInfo());
    } catch (error: any) {
      console.log("error while signing out: ", error.message);
    }
  };

  if (!isLoggedIn) {
    navigate("/signin");
  } else {
    return (
      <div className="max-w-container mx-auto px-4">
        <Header title="Profile" />
        <div className="w-full flex items-center justify-center">
          <div className="border-[1px] border-primeColor rounded-[1rem] p-[5rem] mb-[1rem]">
            {Object.entries(userInfo)
              .filter(([key]) => key != "_id" && key != "password")
              .map(([label, value]) => (
                <InfoBlock key={label + value} label={label} value={value} />
              ))}
            <div onClick={handleSignOut}>
              <Button text="Sign out" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
