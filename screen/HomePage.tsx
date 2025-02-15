import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../component/Header";
import UserProfile from "../component/storyList/UserProfile";
import StoryList from "../component/storyList/StoryList";
import FeedScrollArea from "../component/feed/FeedScrollArea";
import FeeadArea from "../component/feed/FeedArea";


const Stack = createStackNavigator();

const HomePageScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.listWrapper}>
        <Header />
        <FeeadArea uid={""} user_uid={""} star={1} score={10}/>
        <FeeadArea uid={""} user_uid={""} star={1} score={10} comments={[]}/>
        <FeeadArea uid={""} user_uid={""} star={1} score={10} comments={[]}/>
        <FeeadArea uid={""} user_uid={""} star={1} score={10} comments={[]}/>
        <FeeadArea uid={""} user_uid={""} star={1} score={10} comments={[]}/>
      </ScrollView>
    </SafeAreaView>
  );
};

// 🔹 Stack Navigator로 감싸기
const HomePage: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomePageScreen" component={HomePageScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
      display: "flex",
      width: "100%",
      paddingLeft: 15,
      paddingRight: 15,
      overflow: "scroll",
      backgroundColor: "white",
      flexDirection: 'column',
  },
  safeAreaContainer: {
    backgroundColor: "white",
  }
});

export default HomePage;
