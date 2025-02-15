import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { RecoilRoot, useRecoilState } from "recoil";
import FeedDetailArea from "./component/search/FeedDetailArea";
import FollowerPage from "./screen/FollowerPage";
import FollowingPage from "./screen/FollowingPage";
import HomeScreen from "./screen/HomeScreen";
import LoginPage from "./screen/LoginPage";
import SignupPage from "./screen/SignupPage";
import UserPage from "./screen/UserPage";
import { loginState } from "./utils/recoil/atoms/loginState";

export type RootStackParamList = {
  Home: undefined;
  FeedDetail: { uid: string };
  FollowingPage: undefined;
  FollowerPage: undefined;
  UserPage: { uid: String };
<<<<<<< HEAD
  Login: undefined;
  Signup: undefined;
=======
>>>>>>> df3262b6ba7804bf6015212adecc7971ee3f2675
};

const Stack = createStackNavigator<RootStackParamList>();

const App2: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={isLoggedIn ? "Home" : "Login"}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FeedDetail" component={FeedDetailArea} />
        <Stack.Screen name="FollowingPage" component={FollowingPage} />
        <Stack.Screen name="FollowerPage" component={FollowerPage} />
<<<<<<< HEAD

        <Stack.Screen name="UserPage" component={UserPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
=======
<<<<<<< HEAD
        <Stack.Screen name="UserPage" component={UserPage} />
=======
        <Stack.Screen name="ProfileDetail" component={UserPage} />
>>>>>>> 29027e3c686fb5c1348b81a99fac662cf6f49865
>>>>>>> df3262b6ba7804bf6015212adecc7971ee3f2675
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
