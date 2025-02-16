import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";
import SearchById from "../component/search/SearchById";

const ImageUploader: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  const pickImages = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "권한 필요",
        "사진을 선택하려면 갤러리 접근 권한이 필요합니다."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images", // 이미지 타입 선택
      allowsMultipleSelection: true, // 다중 선택 허용
      selectionLimit: 10, // 최대 10장
      quality: 1, // 원본 화질 유지
    });

    if (!result.canceled) {
      const selectedImages = result.assets.map((asset) => asset.uri);
      const updatedImages = [...images, ...selectedImages];
      setImages(updatedImages.slice(0, 10)); // 10장 초과 시 10장까지만 저장
    }
  };

  const removeImage = (uri: string) => {
    // 해당 이미지를 리스트에서 삭제
    setImages(images.filter((image) => image !== uri));
  };

  const onPressSubmit = () => {
    console.log(`${images}`);
  };

  const [contents, setContents] = useState("");
  const [tag, setTag] = useState("");

  const handleSearch = () => {
    console.log(contents);
  };

  const handleCancel = () => {
    Keyboard.dismiss();
    setContents("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollableArea}>
        <View style={styles.SaveButton}>
          <Pressable onPress={onPressSubmit}>
            <Text style={styles.ButtonText}>저장</Text>
          </Pressable>
        </View>
        <FlatList
          data={images}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={{ uri: item }} style={styles.image} />
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeImage(item)}
              >
                <MaterialIcons name="close" size={15} color="white" />
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={styles.ImgPickButton}>
          <Pressable onPress={pickImages}>
            <Text style={styles.ButtonText}>사진선택(최대 10장)</Text>
          </Pressable>
        </View>
        <TextInput
          style={[styles.textInput, { color: "black" }]}
          value={contents}
          onChangeText={setContents}
          placeholder="본문 내용을 입력해주세요"
          placeholderTextColor="grey"
          multiline={true}
          textAlignVertical="center"
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />
        <View style={styles.searchContainer}>
          <View>
            <SearchById />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SaveButton: {
    backgroundColor: "black",
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    margin: 10,
    padding: 3,
    borderRadius: 5,
  },
  ImgPickButton: {
    backgroundColor: "black",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    margin: 10,
    padding: 3,
    borderRadius: 5,
  },
  ButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "white",
  },
  scrollableArea: {
    width: "100%", // 전체 너비를 차지하게
    paddingHorizontal: 15, // 좌우 여백을 주기 위해서
  },
  imageContainer: {
    position: "relative",
    margin: 5,
  },
  image: {
    width: (Dimensions.get("window").width - 60) / 3,
    height: (Dimensions.get("window").width - 60) / 3,
    borderRadius: 10,
  },
  removeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 15,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  textInput: {
    display: "flex",
    flexShrink: 1,
    width: Dimensions.get("window").width - 30,
    fontSize: 15,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "lightgrey",
    borderRadius: 20,
    marginBottom: 10,
  },
  searchArea: {
    width: "100%",
    flexShrink: 1,
    backgroundColor: "#D3D3D3",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchInput: {
    flexShrink: 1,
    width: "100%",
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  searchContainer: {},
});

export default ImageUploader;
