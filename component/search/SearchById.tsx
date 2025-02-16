import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface User {
  id: string;
  name: string;
}

const SearchById = () => {
  const [searchId, setSearchId] = useState<string>(""); // 검색 ID
  const [users, setUsers] = useState<User[]>([]); // 사용자 목록
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]); // 필터링된 사용자 목록

  // 더미 데이터 예시 (보통 API에서 가져옴)
  const dummyUsers: User[] = [
    { id: "john123", name: "John Doe" },
    { id: "jane456", name: "Jane Smith" },
    { id: "sam789", name: "Sam Lee" },
    { id: "alex112", name: "Alex Kim" },
  ];

  // 사용자가 입력할 때마다 검색 결과 업데이트
  useEffect(() => {
    setUsers(dummyUsers);
  }, []);

  useEffect(() => {
    if (searchId === "") {
      setFilteredUsers([]); // 검색어가 비어 있으면 결과 비우기
    } else {
      const result = users.filter(
        (user) => user.id.toLowerCase().includes(searchId.toLowerCase()) // ID가 포함된 사용자 검색
      );
      setFilteredUsers(result); // 필터링된 사용자 목록
    }
  }, [searchId, users]);

  const handleSearchInput = (input: string) => {
    setSearchId(input);
  };

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.resultItem}>
      <Text style={styles.resultText}>
        {item.name} ({item.id})
      </Text>
    </View>
  );

  function handleCancel(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <View style={styles.TopContainer}>
        <View style={{ flex: 0.3 }}>
          <MaterialIcons name="search" size={24} color="grey" />
        </View>
        {/* TextInput: 검색을 위한 입력란 */}
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.input}
            placeholder="Search by ID..."
            value={searchId}
            onChangeText={handleSearchInput}
          />
        </View>
        <View style={{ flex: 0.3 }}>
          <MaterialIcons
            name="cancel"
            size={24}
            color="grey"
            onPress={handleCancel}
          />
        </View>
      </View>
      <View>
        {/* 검색 결과를 보여주는 FlatList */}
        <FlatList
          data={filteredUsers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No results found</Text>
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  TopContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  resultItem: {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  resultText: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    color: "gray",
  },
});

export default SearchById;
