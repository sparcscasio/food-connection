import React from "react";
import { SafeAreaView } from "react-native";
import UserPage from "./UserPage";

interface MyPageProps {
  role: string;
}

const MyPage: React.FC<MyPageProps> = ({ role }) => {
  return (
    <SafeAreaView>
      {/* {role === "user" ? <UserPage /> : <FoodtruckPage />} */}
      <UserPage />
    </SafeAreaView>
  );
};

export default MyPage;
