import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TextInputAreaFollow from "../component/Follow/TextInputAreaFollow";
import UserProfile from "../component/storyList/UserProfile";

const FollowingrPage = () => {
  const ProfileBox = ({
    uid,
    image_url,
    name,
  }: {
    uid: string;
    image_url: string;
    name: string;
  }) => {
    return (
      <View style={styles.ProfileBox}>
        <UserProfile uid={uid} image_url={image_url} name={name} />
        <View>
          <Text style={styles.NameText}>Name</Text>
          <Text style={styles.ContentText}>About This Person</Text>
        </View>
      </View>
    );
  };

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      uid: "",
      image_url: "",
      name: "",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      uid: "",
      image_url: "",
      name: "",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      uid: "",
      image_url: "",
      name: "",
    },
  ];

  return (
    <SafeAreaView style={styles.Container}>
      <TextInputAreaFollow placeholder="팔로워검색" />
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <View>
              <ProfileBox
                uid={item.uid}
                image_url={item.image_url}
                name={item.name}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default FollowingrPage;

const styles = StyleSheet.create({
  Container: {
    paddingTop: 30,
  },
  ProfileBox: {
    flexDirection: "row",
    padding: 10,
    gap: 10,
    alignItems: "center",
  },
  NameText: {
    fontSize: 20,
  },
  ContentText: {
    fontSize: 15,
  },
});
