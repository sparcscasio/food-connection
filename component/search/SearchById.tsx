import { MaterialIcons } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface User {
  id: string;
  name: string;
}

interface SearchbyIDProps {
  selectedId : string;
  setSelectedId : Dispatch<SetStateAction<string>>;
}

const SearchById : React.FC<SearchbyIDProps> = ({ selectedId, setSelectedId }) => {
  const [searchId, setSearchId] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]); // 사용자 목록
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]); // 필터링된 사용자 목록

  // 더미 데이터 예시 (보통 API에서 가져옴)
  const dummyUsers: User[] = [
    { id: "john123", name: "John Doe" },
    { id: "jane456", name: "Jane Smith" },
    { id: "sam789", name: "Sam Lee" },
    { id: "alex112", name: "Alex Kim" },
  ];

  const getUserNameById = (id: string): string | undefined => {
    const user = dummyUsers.find((user) => user.id === id);
    return user ? user.name : undefined; // id가 없으면 undefined 반환
  };

  const handleIdPress = (id: string) => {
    console.log(id);
    setSelectedId(id);
  };

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
    <Pressable
      onPress={() => {
        handleIdPress(item.id);
      }}
    >
      <View style={styles.resultItem}>
        <Text style={styles.resultText}>
          {item.name} ({item.id})
        </Text>
      </View>
    </Pressable>
  );

  const handleCancel = () => {
    setSearchId("");
    setSelectedId("");
  };

  return (
    <>
      <View style={styles.TopContainer}>
        <View style={styles.wrapper}>
          {selectedId ? (
            <View style={styles.input}>
              <Pressable>
                <Text style={styles.selectedText}>
                  {`@${getUserNameById(selectedId)}`}
                </Text>
              </Pressable>
            </View>
          ) : (
            <TextInput
              style={styles.input}
              placeholder="ID / 이름"
              value={searchId}
              onChangeText={handleSearchInput}
            />
          )}
          <MaterialIcons
          name="close"
          size={24}
          color="grey"
          onPress={handleCancel}
          style={styles.iconButton}
          />
        </View>
      </View>
      <View>
        {/* 검색 결과를 보여주는 FlatList */}
        {searchId && !selectedId && (
          <FlatList
            data={filteredUsers}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No results found</Text>
            }
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  TopContainer: {
    flex: 1,
    //padding: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 10,
    marginBottom: 20,
  },
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    width: '100%',
    flexShrink: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 20,
    justifyContent: "center",
  },
  selectedText: {
    fontSize: 16,
    color: "blue",
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
  iconButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SearchById;
