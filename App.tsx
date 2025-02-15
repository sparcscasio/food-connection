import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { RecoilRoot } from "recoil";
import FeedDetailArea from "./component/search/FeedDetailArea";
import FollowerPage from "./screen/FollowerPage";
import FollowingPage from "./screen/FollowingPage";
import HomeScreen from "./screen/HomeScreen";
import UserPage from "./screen/UserPage";

export type RootStackParamList = {
  Home: undefined;
  FeedDetail: { uid: string };
  FollowingPage: undefined;
  FollowerPage: undefined;
  UserPage: { uid: String };
};

const Stack = createStackNavigator<RootStackParamList>();

const App2: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FeedDetail" component={FeedDetailArea} />
        <Stack.Screen name="FollowingPage" component={FollowingPage} />
        <Stack.Screen name="FollowerPage" component={FollowerPage} />
        <Stack.Screen name="UserPage" component={UserPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <App2 />
    </RecoilRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
