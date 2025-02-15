import React from "react";
import { SafeAreaView } from "react-native";
import FoodtruckPage from "./FoodtruckPage";
import UserPage from "./UserPage";

interface MyPageProps {
  role?: string;
}

const MyPage: React.FC<MyPageProps> = ({ role = "user" }) => {
  return (
    <SafeAreaView>
      {role === "user" ? <UserPage /> : <FoodtruckPage />}
    </SafeAreaView>
  );
};

export default MyPage;
