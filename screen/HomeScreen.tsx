import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; 

import HomePage from "./HomePage";
import MapPage from "./MapPage";
import MyPage from "./MyPage";
import NewPostPage from "./NewPostPage";
import SearchPage from "./SearchPage";

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const iconMapping: Record<
            string,
            keyof typeof MaterialIcons.glyphMap
          > = {
            "메인 페이지": "home",
            "검색 페이지": "search",
            "new post": "add-box",
            "map page": "explore",
            "my page": "person",
          };

          const iconName = iconMapping[route.name] || "help-outline"; // 기본값 설정
          const iconColor = focused ? "#32CD32" : "#A8A8A8";

          return <MaterialIcons name={iconName} size={30} color={iconColor} />;
        },
        tabBarActiveTintColor: "#32CD32",
        tabBarInactiveTintColor: "#A8A8A8",
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="메인 페이지" component={HomePage} />
      <Tab.Screen name="검색 페이지" component={SearchPage} />
      <Tab.Screen name="new post" component={NewPostPage} />
      <Tab.Screen name="map page" component={MapPage} />
      <Tab.Screen name="my page" component={MyPage} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
