import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const CustomHeader: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
        <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Food Connection</Text>
        </View>
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
safeContainer: {
        backgroundColor: "white",
      },
  headerContainer: {
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
