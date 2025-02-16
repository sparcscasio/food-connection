import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const SignupPage = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // 회원가입 로직 (예: 서버 요청)
    console.log("Signed up with", email, password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <View style={styles.Button}>
        <Pressable onPress={handleSignUp}>
          <Text style={styles.ButtonText}>Sign up</Text>
        </Pressable>
      </View>
      <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
        Already have an account? Log In
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
export default SignupPage;
