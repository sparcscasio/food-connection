import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useRecoilState } from "recoil";
import { loginState } from "../utils/recoil/atoms/loginState";
import { userInfoState } from "../utils/recoil/atoms/userInfo";
import { loadData, saveData } from "../utils/storage";

const LoginPage = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const handleLogin = async () => {
    // 로그인 로직 (예: 서버 요청)
    console.log("Logged in with", email, password);
    await saveData("userEmail", email);

    setIsLoggedIn(true);
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeScreen" }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.Button}>
        <Pressable onPress={handleLogin}>
          <Text style={styles.ButtonText}>Login</Text>
        </Pressable>
      </View>
      <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    gap: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 8,
  },
  link: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
  Button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 7,
  },
  ButtonText: {
    color: "white",
    fontSize: 15,
  },
});
export default LoginPage;
