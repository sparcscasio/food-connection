import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RootStackParamList } from "../App";
import FeedPreview, { FeedPreviewProps } from "../component/search/FeedPreview";
import UserProfile from "../component/storyList/UserProfile";

const ProfileBox = () => {
  return (
    <>
      <UserProfile uid={""} image_url={""} name={""} />
      <View>
        <Text style={{ fontSize: 20, fontWeight: 400 }}>Name</Text>
        <Text style={{ fontSize: 15, fontWeight: 400 }}>About This Person</Text>
      </View>
    </>
  );
};
const MiddleContent = ({
  text,
  number,

  onPress,
}: {
  text: string;
  number: number;

  onPress: () => void;
}) => {
  return (
    <Pressable
      style={{
        flexDirection: "column",
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 20,
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 15, fontWeight: 400 }}>{text}</Text>
      <Text style={{ fontSize: 25, fontWeight: 400 }}>{number.toString()}</Text>
    </Pressable>
  );
};

const UserPage = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "FollowingPage">>();

  const placeholderSearchView: FeedPreviewProps[] = Array.from(
    { length: 90 },
    (_, index) => ({
      uid: index.toString(),
    })
  );
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.profileContainer}>
        <ProfileBox />
      </View>
      <View style={styles.middleContainer}>
        <MiddleContent
          text="팔로워"
          number={500}
          onPress={() => {
            navigation.navigate("FollowerPage");
          }}
        />
        <MiddleContent
          text="팔로잉"
          number={500}
          onPress={() => {
            navigation.navigate("FollowingPage");
          }}
        />
        <MiddleContent text="작성한리뷰" number={500} onPress={() => {}} />
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={placeholderSearchView}
          keyExtractor={(item) => item.uid}
          numColumns={3}
          renderItem={({ item }) => (
            // <FeedPreview uid={item.uid} img_uri={item.img_uri} />
            <FeedPreview uid={item.uid} />
          )}
          columnWrapperStyle={styles.row}
          style={styles.listWrapper}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    borderWidth: 1,
  },
  middleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
    padding: 10,
  },
  profileContainer: {
    justifyContent: "flex-start",
    paddingTop: 30,
    padding: 20,

    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  flatListContainer: {},
  row: {
    marginBottom: 5,
    justifyContent: "space-between",
  },
  listWrapper: {
    display: "flex",
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    overflow: "scroll",
    backgroundColor: "white",
    flexDirection: "column",
    marginBottom: 60,
  },
});
export default UserPage;
