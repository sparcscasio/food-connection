import React, { useState } from "react";
import { View, TextInput, StyleSheet, Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TextInputArea: React.FC = () => {
  const [text, setText] = useState("");

  const handleSearch = () => {
    console.log(text);
  };

  const handleCancel = () => {
    Keyboard.dismiss(); 
    setText('');
  };

  return (
    <View style={styles.container}>
        <View style={styles.searchArea}>
            <MaterialIcons name='search' size={24} color='grey' />
            <TextInput
                style={[styles.textInput, { color: "black" }]}
                value={text}
                onChangeText={setText}
                placeholder="검색"
                placeholderTextColor="grey"
                multiline={false}
                textAlignVertical="center" 
                returnKeyType="search"
                onSubmitEditing={handleSearch}
            />
      </View>
    <MaterialIcons name='cancel' size={24} color='grey' onPress={handleCancel}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  searchArea: {
    width: '100%',
    flexShrink: 1,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    flexShrink: 1,
    width: '100%',
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default TextInputArea;
